import './index.css';

import { context, requestExpandedMode } from '@devvit/web/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export const Splash = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-[#f7f3ea] px-6 text-center text-[#33302a]">
      <div className="text-3xl">📜</div>
      <h1 className="text-2xl font-black tracking-[0.2em] text-[#8c2f39]">BOUSTROPHEDON</h1>
      <p className="max-w-[240px] text-[13px] leading-snug text-[#6f6a60]">
        Read the grid the way the scribes did: snake by snake. Hi {context.username ?? 'reader'}.
      </p>
      <button
        onClick={(e) => requestExpandedMode(e.nativeEvent, 'game')}
        className="mt-2 rounded-full bg-[#8c2f39] px-8 py-2.5 text-sm font-black uppercase tracking-widest text-white transition-transform active:scale-[0.98]"
      >
        Unroll the page
      </button>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Splash />
  </StrictMode>
);
