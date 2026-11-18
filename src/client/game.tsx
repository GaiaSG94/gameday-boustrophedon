import './index.css';

import { useCallback, useEffect, useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

type Init = {
  day: string;
  username: string;
  streak: number;
  solvedToday: boolean;
  startedAt: number;
  rows: number;
  cols: number;
  grid: string[];
};

type Result = { won: boolean; streak: number; elapsedMs: number; word: string };

const App = () => {
  const [init, setInit] = useState<Init | null>(null);
  const [picked, setPicked] = useState<number[]>([]);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [seconds, setSeconds] = useState(0);

  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/init');
      const data = await res.json();
      if (data.status === 'error') throw new Error(data.message);
      setInit(data);
      setPicked([]);
      setResult(null);
      setSeconds(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'load failed');
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const tap = (cell: number) => {
    setPicked((current) =>
      current.includes(cell) ? current.filter((c) => c !== cell) : [...current, cell]
    );
  };

  const send = async () => {
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cells: picked, elapsedSeconds: seconds }),
      });
      const data = await res.json();
      if (data.status === 'error') throw new Error(data.message);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'submit failed');
    }
  };

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f3ea] text-[#33302a]">
        <p>{error}</p>
      </div>
    );
  }
  if (!init) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f3ea] text-[#9a9184]">
        <p className="animate-pulse">Ruling the columns…</p>
      </div>
    );
  }

  const clock = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  const word = picked.map((cell) => init.grid[cell] ?? '').join('');

  return (
    <div className="flex min-h-screen flex-col items-center gap-4 bg-[#f7f3ea] px-4 py-6 text-[#33302a]">
      <header className="flex w-full max-w-md items-center justify-between">
        <h1 className="text-xl font-black tracking-[0.2em] text-[#8c2f39]">BOUSTROPHEDON</h1>
        <div className="text-sm font-semibold text-[#9a9184]">
          <span className="mr-3">{clock}</span>
          <span>🔥 {result ? result.streak : init.streak}</span>
        </div>
      </header>
      <p className="max-w-md text-center text-[13px] leading-snug text-[#6f6a60]">
        A word is hidden in today's grid. The old scribes wrote in boustrophedon - left to
        right, then right to left. Tap the letters in reading order.
      </p>
      <div
        className="grid gap-1.5 rounded-xl border-2 border-[#ddd3c0] bg-white p-3"
        style={{ gridTemplateColumns: `repeat(${init.cols}, minmax(0, 1fr))` }}
      >
        {init.grid.map((letter, cell) => {
          const order = picked.indexOf(cell);
          return (
            <button
              key={cell}
              onClick={() => tap(cell)}
              className={`flex h-12 w-12 items-center justify-center rounded-lg border-2 text-lg font-black uppercase ${
                order >= 0
                  ? 'border-[#8c2f39] bg-[#8c2f39] text-white'
                  : 'border-[#ddd3c0] bg-[#f7f3ea] text-[#33302a]'
              }`}
              aria-label={`letter ${cell + 1}`}
            >
              <span>{letter}</span>
              {order >= 0 && (
                <span className="absolute -mt-6 text-[10px] font-bold text-[#8c2f39]">
                  {order + 1}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div className="w-full max-w-md rounded-xl border-2 border-[#ddd3c0] bg-white p-3 text-center font-mono text-xl tracking-[0.4em] text-[#8c2f39]">
        {word || '_'}
      </div>
      {!result ? (
        <div className="flex w-full max-w-md gap-2">
          <button
            onClick={() => setPicked([])}
            disabled={picked.length === 0}
            className="w-28 rounded-full border-2 border-[#8c2f39] py-3 text-sm font-black uppercase tracking-widest text-[#8c2f39] disabled:opacity-40"
          >
            Clear
          </button>
          <button
            onClick={() => void send()}
            disabled={picked.length === 0}
            className="flex-1 rounded-full bg-[#8c2f39] py-3 text-base font-black uppercase tracking-widest text-white transition-transform active:scale-[0.98] disabled:opacity-40"
          >
            Read it out
          </button>
        </div>
      ) : (
        <div className="flex w-full max-w-md flex-col items-center gap-3 rounded-xl border-2 border-[#ddd3c0] bg-white p-5 text-center">
          <p className="text-2xl font-black tracking-widest">
            {result.won ? 'WORD FOUND' : `THE WORD WAS ${result.word}`}
          </p>
          <p className="text-sm text-[#6f6a60]">
            {result.won
              ? `Read in ${clock} — streak 🔥 ${result.streak}. A new page tomorrow.`
              : 'The snake path was different. Try another reading order.'}
          </p>
          <button
            onClick={() => setResult(null)}
            className="rounded-full border-2 border-[#8c2f39] px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#8c2f39]"
          >
            Back to the grid
          </button>
        </div>
      )}
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
