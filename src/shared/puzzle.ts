export const WORDS = [
  'HARBOR', 'LANTERN', 'MEADOW', 'QUARTZ', 'RIPPLE', 'SAILOR', 'THUNDER', 'VELVET',
  'WHISPER', 'YARD', 'ZEPHYR', 'CEDAR', 'EMBER', 'FROST', 'GLIDER', 'MARSH',
  'NOMAD', 'ORBIT', 'PEBBLE', 'RIDGE', 'SPIRE', 'TUNDRA', 'VESPER', 'BASALT',
];

export type SnakePuzzle = {
  day: string;
  rows: number;
  cols: number;
  grid: string[];
  path: number[];
  solution: number[];
  word: string;
};

export const dayKeyUTC = (now: Date = new Date()): string => now.toISOString().slice(0, 10);

export const dailySeed = (day: string): number => {
  let hash = 2166136261;
  const input = 'boustrophedon:' + day;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

export const mulberry32 = (seed: number): (() => number) => {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const snakePath = (rows: number, cols: number): number[] => {
  const path: number[] = [];
  for (let r = 0; r < rows; r++) {
    const colsInRow = Array.from({ length: cols }, (_, c) => c);
    const ordered = r % 2 === 0 ? colsInRow : colsInRow.reverse();
    for (const c of ordered) path.push(r * cols + c);
  }
  return path;
};

export const generateSnake = (day: string): SnakePuzzle => {
  const rand = mulberry32(dailySeed(day));
  const rows = 4;
  const cols = 6;
  const cells = rows * cols;
  const path = snakePath(rows, cols);
  const word = WORDS[dailySeed(day) % WORDS.length] ?? 'HARBOR';
  const grid = Array.from({ length: cells }, () => LETTERS[Math.floor(rand() * LETTERS.length)] ?? 'a');
  const maxOffset = Math.max(0, path.length - word.length);
  const offset = Math.floor(rand() * (maxOffset + 1));
  const solution = path.slice(offset, offset + word.length);
  solution.forEach((cell, i) => {
    grid[cell] = word[i] ?? 'a';
  });
  return { day, rows, cols, grid, path, solution, word };
};

export const wordFromSelection = (puzzle: SnakePuzzle, cells: number[]): string =>
  cells.map((cell) => puzzle.grid[cell] ?? '').join('');

export const isCorrectSnake = (puzzle: SnakePuzzle, cells: number[]): boolean =>
  wordFromSelection(puzzle, cells) === puzzle.word;
