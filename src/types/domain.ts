export type TetrominoType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';

export type GameMode = 'menu' | 'playing' | 'paused' | 'gameover' | 'settings' | 'help';

export type CellValue = TetrominoType | null;

export interface Position {
  x: number;
  y: number;
}

export interface Tetromino {
  type: TetrominoType;
  shape: number[][];
  color: string;
}

export interface ActivePiece {
  type: TetrominoType;
  x: number;
  y: number;
  rotation: number;
}

export interface GameSettings {
  dasDelay: number;
  arrDelay: number;
  softDropSpeed: number;
  ghostPiece: boolean;
  showGrid: boolean;
  volume: number;
}

export interface GameState {
  mode: GameMode;
  board: CellValue[][];
  activePiece: ActivePiece | null;
  holdPiece: TetrominoType | null;
  holdUsed: boolean;
  nextQueue: TetrominoType[];
  score: number;
  level: number;
  lines: number;
  combo: number;
  backToBack: boolean;
  settings: GameSettings;
}

export interface HighScore {
  score: number;
  lines: number;
  level: number;
  date: string;
}

export const TETROMINO_SHAPES: Record<TetrominoType, number[][][]> = {
  I: [
    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0]],
    [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]],
  ],
  O: [
    [[1, 1], [1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1], [1, 1]],
  ],
  T: [
    [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
    [[0, 1, 0], [0, 1, 1], [0, 1, 0]],
    [[0, 0, 0], [1, 1, 1], [0, 1, 0]],
    [[0, 1, 0], [1, 1, 0], [0, 1, 0]],
  ],
  S: [
    [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
    [[0, 1, 0], [0, 1, 1], [0, 0, 1]],
    [[0, 0, 0], [0, 1, 1], [1, 1, 0]],
    [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
  ],
  Z: [
    [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
    [[0, 0, 1], [0, 1, 1], [0, 1, 0]],
    [[0, 0, 0], [1, 1, 0], [0, 1, 1]],
    [[0, 1, 0], [1, 1, 0], [1, 0, 0]],
  ],
  J: [
    [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
    [[0, 1, 1], [0, 1, 0], [0, 1, 0]],
    [[0, 0, 0], [1, 1, 1], [0, 0, 1]],
    [[0, 1, 0], [0, 1, 0], [1, 1, 0]],
  ],
  L: [
    [[0, 0, 1], [1, 1, 1], [0, 0, 0]],
    [[0, 1, 0], [0, 1, 0], [0, 1, 1]],
    [[0, 0, 0], [1, 1, 1], [1, 0, 0]],
    [[1, 1, 0], [0, 1, 0], [0, 1, 0]],
  ],
};

export const TETROMINO_COLORS: Record<TetrominoType, string> = {
  I: 'var(--tetromino-i)',
  O: 'var(--tetromino-o)',
  T: 'var(--tetromino-t)',
  S: 'var(--tetromino-s)',
  Z: 'var(--tetromino-z)',
  J: 'var(--tetromino-j)',
  L: 'var(--tetromino-l)',
};

export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;
export const VISIBLE_HEIGHT = 20;

export const DEFAULT_SETTINGS: GameSettings = {
  dasDelay: 167,
  arrDelay: 33,
  softDropSpeed: 0.05,
  ghostPiece: true,
  showGrid: true,
  volume: 0.7,
};

// SRS wall kick data
// For pieces other than I and O
export const WALL_KICKS_JLSTZ: Position[][] = [
  // 0->1
  [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: -2 }, { x: -1, y: -2 }],
  // 1->2
  [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
  // 2->3
  [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: -2 }, { x: 1, y: -2 }],
  // 3->0
  [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: -1 }, { x: 0, y: 2 }, { x: -1, y: 2 }],
];

// For I piece
export const WALL_KICKS_I: Position[][] = [
  // 0->1
  [{ x: 0, y: 0 }, { x: -2, y: 0 }, { x: 1, y: 0 }, { x: -2, y: -1 }, { x: 1, y: 2 }],
  // 1->2
  [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 2, y: 0 }, { x: -1, y: 2 }, { x: 2, y: -1 }],
  // 2->3
  [{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: -1, y: 0 }, { x: 2, y: 1 }, { x: -1, y: -2 }],
  // 3->0
  [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: -2, y: 0 }, { x: 1, y: -2 }, { x: -2, y: 1 }],
];

export const LOCK_DELAY = 500;

export function getShape(type: TetrominoType, rotation: number): number[][] {
  return TETROMINO_SHAPES[type][((rotation % 4) + 4) % 4];
}

export function getDropInterval(level: number): number {
  // Tetris gravity formula: (0.8 - ((level - 1) * 0.007))^(level-1) seconds
  // Simplified: faster as level increases
  if (level <= 0) return 1000;
  const frames = Math.pow(0.8 - (level - 1) * 0.007, level - 1) * 60;
  return Math.max(frames * 16.67, 16.67); // convert frames to ms, minimum 1 frame
}

export function createEmptyBoard(): CellValue[][] {
  return Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(null));
}
