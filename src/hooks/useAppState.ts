import { useCallback, useRef, useState, useEffect } from 'react';
import type {
  CellValue,
  GameMode,
  GameSettings,
  GameState,
  TetrominoType,
  ActivePiece,
} from '../types/domain';
import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  TETROMINO_SHAPES,
  WALL_KICKS_JLSTZ,
  WALL_KICKS_I,
  createEmptyBoard,
  getDropInterval,
  DEFAULT_SETTINGS,
  LOCK_DELAY,
} from '../types/domain';

// 7-bag randomizer
function createBag(): TetrominoType[] {
  const bag: TetrominoType[] = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];
  for (let i = bag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [bag[i], bag[j]] = [bag[j], bag[i]];
  }
  return bag;
}

function getNextFromQueue(queue: TetrominoType[]): { piece: TetrominoType; newQueue: TetrominoType[] } {
  const newQueue = [...queue];
  let piece = newQueue.shift()!;
  if (newQueue.length < 7) {
    newQueue.push(...createBag());
  }
  return { piece, newQueue };
}

function getShape(type: TetrominoType, rotation: number): number[][] {
  return TETROMINO_SHAPES[type][((rotation % 4) + 4) % 4];
}

function isValidPosition(
  board: CellValue[][],
  type: TetrominoType,
  x: number,
  y: number,
  rotation: number
): boolean {
  const shape = getShape(type, rotation);
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col]) {
        const boardX = x + col;
        const boardY = y + row;
        if (boardX < 0 || boardX >= BOARD_WIDTH || boardY >= BOARD_HEIGHT) return false;
        if (boardY >= 0 && board[boardY][boardX] !== null) return false;
      }
    }
  }
  return true;
}

function placePiece(board: CellValue[][], piece: ActivePiece): CellValue[][] {
  const newBoard = board.map((row) => [...row]);
  const shape = getShape(piece.type, piece.rotation);
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col]) {
        const boardY = piece.y + row;
        const boardX = piece.x + col;
        if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
          newBoard[boardY][boardX] = piece.type;
        }
      }
    }
  }
  return newBoard;
}

function clearLines(board: CellValue[][]): { newBoard: CellValue[][]; linesCleared: number } {
  const newBoard: CellValue[][] = [];
  let linesCleared = 0;
  for (let row = 0; row < BOARD_HEIGHT; row++) {
    if (board[row].every((cell) => cell !== null)) {
      linesCleared++;
    } else {
      newBoard.push(board[row]);
    }
  }
  while (newBoard.length < BOARD_HEIGHT) {
    newBoard.unshift(Array(BOARD_WIDTH).fill(null));
  }
  return { newBoard, linesCleared };
}

function calculateScore(linesCleared: number, level: number, isTSpin: boolean, isMini: boolean, backToBack: boolean): { score: number; newBackToBack: boolean } {
  if (linesCleared === 0) return { score: 0, newBackToBack: backToBack };
  let base = 0;
  if (isTSpin) {
    if (isMini) base = 200;
    else if (linesCleared === 1) base = 800;
    else if (linesCleared === 2) base = 1200;
    else if (linesCleared === 3) base = 1600;
  } else {
    if (linesCleared === 1) base = 100;
    else if (linesCleared === 2) base = 300;
    else if (linesCleared === 3) base = 500;
    else if (linesCleared === 4) base = 800;
  }
  const isDifficult = (linesCleared === 4) || isTSpin;
  const newBackToBack = isDifficult && backToBack;
  const btbMultiplier = newBackToBack ? 1.5 : 1;
  return { score: Math.floor(base * level * btbMultiplier), newBackToBack: isDifficult };
}

function getSpawnPosition(type: TetrominoType): { x: number; y: number } {
  // Standard spawn positions
  if (type === 'I') return { x: 3, y: -1 };
  if (type === 'O') return { x: 4, y: -1 };
  return { x: 3, y: 0 };
}

export interface AppActions {
  startGame: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  restartGame: () => void;
  gameOver: () => void;
  goToMenu: () => void;
  goToSettings: () => void;
  goToHelp: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  rotateClockwise: () => void;
  rotateCounterClockwise: () => void;
  softDrop: () => void;
  hardDrop: () => void;
  hold: () => void;
  updateSettings: (settings: Partial<GameSettings>) => void;
  resetSettings: () => void;
  tick: () => void;
  lockPiece: () => void;
}

export function useAppState(initialSettings?: GameSettings): { state: GameState; actions: AppActions } {
  const [mode, setMode] = useState<GameMode>('menu');
  const [board, setBoard] = useState<CellValue[][]>(createEmptyBoard);
  const [activePiece, setActivePiece] = useState<ActivePiece | null>(null);
  const [holdPiece, setHoldPiece] = useState<TetrominoType | null>(null);
  const [holdUsed, setHoldUsed] = useState(false);
  const [nextQueue, setNextQueue] = useState<TetrominoType[]>([]);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lines, setLines] = useState(0);
  const [combo, setCombo] = useState(-1);
  const [backToBack, setBackToBack] = useState(false);
  const [settings, setSettings] = useState<GameSettings>(initialSettings ?? { ...DEFAULT_SETTINGS });

  const bagRef = useRef<TetrominoType[]>([]);
  const lockTimerRef = useRef<number | null>(null);
  const gravityRef = useRef<number>(0);

  const ensureBag = useCallback(() => {
    if (bagRef.current.length === 0) {
      bagRef.current = createBag();
    }
  }, []);

  const spawnPiece = useCallback((queue: TetrominoType[], currentBoard: CellValue[][]): { piece: ActivePiece; newQueue: TetrominoType[]; gameOver: boolean } => {
    ensureBag();
    const { piece: type, newQueue } = getNextFromQueue(queue.length > 0 ? queue : bagRef.current);
    if (queue.length === 0 && bagRef.current.length > 0) {
      bagRef.current = newQueue;
    }
    const pos = getSpawnPosition(type);
    const piece: ActivePiece = { type, x: pos.x, y: pos.y, rotation: 0 };
    const gameOver = !isValidPosition(currentBoard, type, pos.x, pos.y, 0);
    return { piece, newQueue: queue.length > 0 ? newQueue : bagRef.current, gameOver };
  }, [ensureBag]);

  const startGame = useCallback(() => {
    const newBoard = createEmptyBoard();
    bagRef.current = createBag();
    const { piece, newQueue, gameOver: immediateGameOver } = spawnPiece([], newBoard);
    setBoard(newBoard);
    setActivePiece(piece);
    setHoldPiece(null);
    setHoldUsed(false);
    setNextQueue(newQueue);
    setScore(0);
    setLevel(1);
    setLines(0);
    setCombo(-1);
    setBackToBack(false);
    setMode('playing');
    gravityRef.current = 0;
    if (lockTimerRef.current) {
      window.clearTimeout(lockTimerRef.current);
      lockTimerRef.current = null;
    }
    if (immediateGameOver) {
      setMode('gameover');
    }
  }, [spawnPiece]);

  const pauseGame = useCallback(() => {
    if (mode === 'playing') setMode('paused');
  }, [mode]);

  const resumeGame = useCallback(() => {
    if (mode === 'paused') setMode('playing');
  }, [mode]);

  const restartGame = useCallback(() => {
    startGame();
  }, [startGame]);

  const gameOver = useCallback(() => {
    setMode('gameover');
    if (lockTimerRef.current) {
      window.clearTimeout(lockTimerRef.current);
      lockTimerRef.current = null;
    }
  }, []);

  const goToMenu = useCallback(() => {
    setMode('menu');
    if (lockTimerRef.current) {
      window.clearTimeout(lockTimerRef.current);
      lockTimerRef.current = null;
    }
  }, []);

  const goToSettings = useCallback(() => setMode('settings'), []);
  const goToHelp = useCallback(() => setMode('help'), []);

  const tryMove = useCallback((dx: number, dy: number): boolean => {
    if (!activePiece || mode !== 'playing') return false;
    const newX = activePiece.x + dx;
    const newY = activePiece.y + dy;
    if (isValidPosition(board, activePiece.type, newX, newY, activePiece.rotation)) {
      setActivePiece({ ...activePiece, x: newX, y: newY });
      if (dy > 0 && lockTimerRef.current) {
        window.clearTimeout(lockTimerRef.current);
        lockTimerRef.current = null;
      }
      return true;
    }
    return false;
  }, [activePiece, board, mode]);

  const moveLeft = useCallback(() => tryMove(-1, 0), [tryMove]);
  const moveRight = useCallback(() => tryMove(1, 0), [tryMove]);
  const softDrop = useCallback(() => {
    if (!tryMove(0, 1)) {
      lockPieceInternal();
    }
  }, [tryMove]);

  const rotate = useCallback((clockwise: boolean) => {
    if (!activePiece || mode !== 'playing') return;
    const newRotation = ((activePiece.rotation + (clockwise ? 1 : -1)) % 4 + 4) % 4;
    const kicks = activePiece.type === 'I'
      ? WALL_KICKS_I[activePiece.rotation]
      : activePiece.type === 'O'
        ? [{ x: 0, y: 0 }]
        : WALL_KICKS_JLSTZ[activePiece.rotation];

    for (const kick of kicks) {
      const testX = activePiece.x + kick.x;
      const testY = activePiece.y - kick.y;
      if (isValidPosition(board, activePiece.type, testX, testY, newRotation)) {
        setActivePiece({ ...activePiece, x: testX, y: testY, rotation: newRotation });
        if (lockTimerRef.current) {
          window.clearTimeout(lockTimerRef.current);
          lockTimerRef.current = null;
        }
        return;
      }
    }
  }, [activePiece, board, mode]);

  const rotateClockwise = useCallback(() => rotate(true), [rotate]);
  const rotateCounterClockwise = useCallback(() => rotate(false), [rotate]);

  const hardDrop = useCallback(() => {
    if (!activePiece || mode !== 'playing') return;
    let dropDistance = 0;
    let testY = activePiece.y;
    while (isValidPosition(board, activePiece.type, activePiece.x, testY + 1, activePiece.rotation)) {
      testY++;
      dropDistance++;
    }
    const newPiece = { ...activePiece, y: testY };
    setActivePiece(newPiece);
    lockPieceInternal(dropDistance * 2 * level);
  }, [activePiece, board, mode, level]);

  const hold = useCallback(() => {
    if (!activePiece || mode !== 'playing' || holdUsed) return;
    const currentType = activePiece.type;
    if (holdPiece) {
      const pos = getSpawnPosition(holdPiece);
      if (!isValidPosition(board, holdPiece, pos.x, pos.y, 0)) {
        gameOver();
        return;
      }
      setActivePiece({ type: holdPiece, x: pos.x, y: pos.y, rotation: 0 });
    } else {
      const { piece, newQueue } = spawnPiece(nextQueue, board);
      setActivePiece(piece);
      setNextQueue(newQueue);
    }
    setHoldPiece(currentType);
    setHoldUsed(true);
  }, [activePiece, mode, holdUsed, holdPiece, nextQueue, board, spawnPiece, gameOver]);

  const lockPieceInternal = useCallback((dropBonus: number = 0) => {
    if (!activePiece) return;
    const newBoard = placePiece(board, activePiece);
    const { newBoard: clearedBoard, linesCleared } = clearLines(newBoard);
    const newCombo = linesCleared > 0 ? combo + 1 : -1;
    const comboBonus = newCombo > 0 ? newCombo * 50 * level : 0;
    const { score: lineScore, newBackToBack: btb } = calculateScore(linesCleared, level, false, false, backToBack);
    const newLines = lines + linesCleared;
    const newLevel = Math.floor(newLines / 10) + 1;

    setBoard(clearedBoard);
    setScore((s) => s + dropBonus + lineScore + comboBonus);
    setLines(newLines);
    setLevel(newLevel);
    setCombo(newCombo);
    setBackToBack(btb);

    const { piece: nextPiece, newQueue, gameOver: immediateGameOver } = spawnPiece(nextQueue, clearedBoard);
    setActivePiece(nextPiece);
    setNextQueue(newQueue);
    setHoldUsed(false);

    if (lockTimerRef.current) {
      window.clearTimeout(lockTimerRef.current);
      lockTimerRef.current = null;
    }

    if (immediateGameOver) {
      setMode('gameover');
    }
  }, [activePiece, board, nextQueue, level, lines, combo, backToBack, spawnPiece]);

  const tick = useCallback(() => {
    if (mode !== 'playing' || !activePiece) return;
    const interval = getDropInterval(level);
    gravityRef.current += 16.67;
    if (gravityRef.current >= interval) {
      gravityRef.current = 0;
      if (!tryMove(0, 1)) {
        if (!lockTimerRef.current) {
          lockTimerRef.current = window.setTimeout(() => {
            lockTimerRef.current = null;
            lockPieceInternal();
          }, LOCK_DELAY);
        }
      }
    }
  }, [mode, activePiece, level, tryMove, lockPieceInternal]);

  const lockPiece = useCallback(() => {
    lockPieceInternal();
  }, [lockPieceInternal]);

  const updateSettings = useCallback((partial: Partial<GameSettings>) => {
    setSettings((prev) => ({ ...prev, ...partial }));
  }, []);

  const resetSettings = useCallback(() => {
    setSettings({ ...DEFAULT_SETTINGS });
  }, []);

  useEffect(() => {
    return () => {
      if (lockTimerRef.current) {
        window.clearTimeout(lockTimerRef.current);
      }
    };
  }, []);

  const state: GameState = {
    mode,
    board,
    activePiece,
    holdPiece,
    holdUsed,
    nextQueue,
    score,
    level,
    lines,
    combo,
    backToBack,
    settings,
  };

  const actions: AppActions = {
    startGame,
    pauseGame,
    resumeGame,
    restartGame,
    gameOver,
    goToMenu,
    goToSettings,
    goToHelp,
    moveLeft,
    moveRight,
    rotateClockwise,
    rotateCounterClockwise,
    softDrop,
    hardDrop,
    hold,
    updateSettings,
    resetSettings,
    tick,
    lockPiece,
  };

  return { state, actions };
}
