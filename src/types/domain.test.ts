import { describe, it, expect } from 'vitest';
import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  createEmptyBoard,
  getDropInterval,
  getShape,
  TETROMINO_SHAPES,
  DEFAULT_SETTINGS,
} from './domain';

describe('domain utilities', () => {
  it('createEmptyBoard returns 20x10 null grid', () => {
    const board = createEmptyBoard();
    expect(board.length).toBe(BOARD_HEIGHT);
    expect(board[0].length).toBe(BOARD_WIDTH);
    expect(board.every((row) => row.every((cell) => cell === null))).toBe(true);
  });

  it('getDropInterval decreases with level', () => {
    const l1 = getDropInterval(1);
    const l5 = getDropInterval(5);
    const l10 = getDropInterval(10);
    expect(l5).toBeLessThan(l1);
    expect(l10).toBeLessThan(l5);
  });

  it('getDropInterval has a minimum floor', () => {
    const l20 = getDropInterval(20);
    expect(l20).toBeGreaterThanOrEqual(16);
  });

  it('getShape returns correct rotation matrices', () => {
    const shape0 = getShape('I', 0);
    expect(shape0[1]).toEqual([1, 1, 1, 1]);
    const shape1 = getShape('I', 1);
    expect(shape1[0][2]).toBe(1);
    expect(shape1[1][2]).toBe(1);
    expect(shape1[2][2]).toBe(1);
    expect(shape1[3][2]).toBe(1);
  });

  it('TETROMINO_SHAPES has all 7 pieces', () => {
    const keys = Object.keys(TETROMINO_SHAPES);
    expect(keys.sort()).toEqual(['I', 'J', 'L', 'O', 'S', 'T', 'Z']);
  });

  it('DEFAULT_SETTINGS has required fields', () => {
    expect(DEFAULT_SETTINGS.dasDelay).toBeTypeOf('number');
    expect(DEFAULT_SETTINGS.arrDelay).toBeTypeOf('number');
    expect(DEFAULT_SETTINGS.softDropSpeed).toBeTypeOf('number');
    expect(DEFAULT_SETTINGS.ghostPiece).toBeTypeOf('boolean');
    expect(DEFAULT_SETTINGS.showGrid).toBeTypeOf('boolean');
    expect(DEFAULT_SETTINGS.volume).toBeTypeOf('number');
  });
});
