import assert from 'node:assert/strict';
import { test } from 'node:test';

import { dailySeed, generateSnake, isCorrectSnake, snakePath, wordFromSelection } from './puzzle.ts';

test('seed deterministe', () => {
  assert.equal(dailySeed('2026-12-01'), dailySeed('2026-12-01'));
});

test('la grille du jour est deterministe', () => {
  const a = generateSnake('2026-12-01');
  const b = generateSnake('2026-12-01');
  assert.deepEqual(a.grid, b.grid);
  assert.equal(a.word, b.word);
  assert.deepEqual(a.solution, b.solution);
});

test('le chemin serpente ligne par ligne', () => {
  const path = snakePath(4, 6);
  assert.equal(path.length, 24);
  assert.equal(path[0], 0);
  assert.equal(path[5], 5);
  assert.equal(path[6], 11);
  assert.equal(path[11], 6);
  assert.equal(path[12], 12);
});

test('le mot est cache le long du chemin', () => {
  const puzzle = generateSnake('2026-12-01');
  const word = wordFromSelection(puzzle, puzzle.solution);
  assert.equal(word, puzzle.word);
  assert.ok(isCorrectSnake(puzzle, puzzle.solution));
  assert.ok(puzzle.solution.every((cell) => puzzle.path.includes(cell)));
});

test('une selection dans le desordre est rejetee', () => {
  const puzzle = generateSnake('2026-12-02');
  const reversed = [...puzzle.solution].reverse();
  assert.equal(isCorrectSnake(puzzle, reversed), false);
});
