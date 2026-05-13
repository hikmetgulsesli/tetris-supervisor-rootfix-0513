import { useEffect, useRef, useCallback } from 'react';
import { AppProvider, useGame, useGameState, useGameActions } from './contexts/AppContext';
import {
  MainMenu,
  ControlsHelp,
  GameOver,
  GameBoard,
  GameOptions,
  PauseOverlay,
} from './screens';
import type {
  MainMenuActionId,
  ControlsHelpActionId,
  GameOverActionId,
  GameBoardActionId,
  GameOptionsActionId,
  PauseOverlayActionId,
} from './screens';
import type { CellValue, TetrominoType } from './types/domain';
import { BOARD_WIDTH, BOARD_HEIGHT, TETROMINO_COLORS, getShape } from './types/domain';
import { loadSettings, saveSettings } from './utils/storage';
import './App.css';

function GameBoardRenderer() {
  const { state } = useGame();
  const { board, activePiece, settings } = state;

  const renderCell = (cell: CellValue, x: number, y: number) => {
    let fill = cell ? TETROMINO_COLORS[cell] : 'transparent';
    let ghost = false;

    // Ghost piece
    if (settings.ghostPiece && activePiece && !cell) {
      let ghostY = activePiece.y;
      while (
        ghostY + 1 < BOARD_HEIGHT &&
        isValidPosition(board, activePiece.type, activePiece.x, ghostY + 1, activePiece.rotation)
      ) {
        ghostY++;
      }
      const shape = getShape(activePiece.type, activePiece.rotation);
      for (let row = 0; row < shape.length; row++) {
        for (let col = 0; col < shape[row].length; col++) {
          if (shape[row][col] && activePiece.x + col === x && activePiece.y + row + (ghostY - activePiece.y) === y) {
            fill = TETROMINO_COLORS[activePiece.type];
            ghost = true;
          }
        }
      }
    }

    // Active piece
    if (activePiece && !cell) {
      const shape = getShape(activePiece.type, activePiece.rotation);
      for (let row = 0; row < shape.length; row++) {
        for (let col = 0; col < shape[row].length; col++) {
          if (shape[row][col] && activePiece.x + col === x && activePiece.y + row === y) {
            fill = TETROMINO_COLORS[activePiece.type];
            ghost = false;
          }
        }
      }
    }

    return (
      <div
        key={`${x}-${y}`}
        className="tetris-cell"
        style={{
          backgroundColor: fill,
          opacity: ghost ? 0.35 : 1,
          border: settings.showGrid ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      />
    );
  };

  return (
    <div className="tetris-board-container">
      <div className="tetris-board">
        {board.map((row: CellValue[], y: number) =>
          row.map((cell: CellValue, x: number) => renderCell(cell, x, y))
        )}
      </div>
    </div>
  );
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
        const bx = x + col;
        const by = y + row;
        if (bx < 0 || bx >= BOARD_WIDTH || by >= BOARD_HEIGHT) return false;
        if (by >= 0 && board[by][bx] !== null) return false;
      }
    }
  }
  return true;
}

function NextQueueRenderer() {
  const { state } = useGame();
  const { nextQueue } = state;
  return (
    <div className="next-queue">
      <div className="panel-label">NEXT</div>
      {nextQueue.slice(0, 5).map((type: TetrominoType, i: number) => {
        const shape = getShape(type, 0);
        return (
          <div key={i} className="next-piece">
            {shape.map((row: number[], ry: number) => (
              <div key={ry} className="next-row">
                {row.map((cell: number, cx: number) => (
                  <div
                    key={cx}
                    className="next-cell"
                    style={{
                      backgroundColor: cell ? TETROMINO_COLORS[type] : 'transparent',
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function HoldRenderer() {
  const { state } = useGame();
  const { holdPiece, holdUsed } = state;
  return (
    <div className="hold-piece">
      <div className="panel-label">HOLD</div>
      {holdPiece ? (
        <div className="hold-piece-inner" style={{ opacity: holdUsed ? 0.4 : 1 }}>
          {getShape(holdPiece, 0).map((row: number[], ry: number) => (
            <div key={ry} className="hold-row">
              {row.map((cell: number, cx: number) => (
                <div
                  key={cx}
                  className="hold-cell"
                  style={{
                    backgroundColor: cell ? TETROMINO_COLORS[holdPiece] : 'transparent',
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="hold-empty" />
      )}
    </div>
  );
}

function StatsRenderer() {
  const { state } = useGame();
  const { score, level, lines } = state;
  return (
    <div className="game-stats">
      <div className="stat-row">
        <span className="stat-label">SCORE</span>
        <span className="stat-value">{score.toLocaleString()}</span>
      </div>
      <div className="stat-row">
        <span className="stat-label">LEVEL</span>
        <span className="stat-value">{level}</span>
      </div>
      <div className="stat-row">
        <span className="stat-label">LINES</span>
        <span className="stat-value">{lines}</span>
      </div>
    </div>
  );
}

function AppInner() {
  const { state, actions } = useGame();
  const { mode } = state;
  const gameLoopRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Game loop
  useEffect(() => {
    if (mode !== 'playing') {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
        gameLoopRef.current = null;
      }
      return;
    }

    const loop = (timestamp: number) => {
      const dt = Math.min((timestamp - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = timestamp;
      actions.tick();
      gameLoopRef.current = requestAnimationFrame(loop);
    };

    lastTimeRef.current = performance.now();
    gameLoopRef.current = requestAnimationFrame(loop);

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [mode, actions]);

  // Keyboard controls
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (mode === 'playing') {
        switch (e.code) {
          case 'ArrowLeft':
          case 'KeyA':
            e.preventDefault();
            actions.moveLeft();
            break;
          case 'ArrowRight':
          case 'KeyD':
            e.preventDefault();
            actions.moveRight();
            break;
          case 'ArrowUp':
          case 'KeyW':
          case 'KeyX':
            e.preventDefault();
            actions.rotateClockwise();
            break;
          case 'KeyZ':
            e.preventDefault();
            actions.rotateCounterClockwise();
            break;
          case 'ArrowDown':
          case 'KeyS':
            e.preventDefault();
            actions.softDrop();
            break;
          case 'Space':
            e.preventDefault();
            actions.hardDrop();
            break;
          case 'KeyC':
          case 'ShiftLeft':
          case 'ShiftRight':
            e.preventDefault();
            actions.hold();
            break;
          case 'Escape':
          case 'KeyP':
            e.preventDefault();
            actions.pauseGame();
            break;
        }
      } else if (mode === 'paused') {
        if (e.code === 'Escape' || e.code === 'KeyP') {
          e.preventDefault();
          actions.resumeGame();
        }
      } else if (mode === 'gameover') {
        if (e.code === 'Enter' || e.code === 'Space') {
          e.preventDefault();
          actions.restartGame();
        }
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [mode, actions]);

  // Test bridge
  useEffect(() => {
    const appBridge = {
      state,
      actions,
    };
    (window as unknown as Record<string, unknown>).app = appBridge;
    (window as unknown as Record<string, unknown>).game = appBridge;

    (window as unknown as Record<string, unknown>).render_game_to_text = () => {
      return JSON.stringify({
        mode: state.mode,
        board: state.board,
        activePiece: state.activePiece,
        holdPiece: state.holdPiece,
        nextQueue: state.nextQueue.slice(0, 3),
        score: state.score,
        level: state.level,
        lines: state.lines,
      });
    };

    (window as unknown as Record<string, unknown>).advanceTime = (ms: number) => {
      const steps = Math.max(1, Math.round(ms / (1000 / 60)));
      for (let i = 0; i < steps; i++) {
        actions.tick();
      }
    };
  }, [state, actions]);

  const mainMenuActions: Record<MainMenuActionId, () => void> = {
    'start-game-1': actions.startGame,
    'settings-2': actions.goToSettings,
    'how-to-play-3': actions.goToHelp,
  };

  const controlsHelpActions: Record<ControlsHelpActionId, () => void> = {
    'button-1-1': actions.goToSettings,
    'button-2-2': actions.goToHelp,
    'button-3-3': () => {},
    'return-to-menu-4': actions.goToMenu,
  };

  const gameOverActions: Record<GameOverActionId, () => void> = {
    'reboot-sequence-1': actions.restartGame,
    'main-menu-2': actions.goToMenu,
    'share-data-3': () => {},
  };

  const gameBoardActions: Record<GameBoardActionId, () => void> = {
    'button-1-1': actions.goToSettings,
    'button-2-2': actions.goToHelp,
    'button-3-3': () => {},
  };

  const gameOptionsActions: Record<GameOptionsActionId, () => void> = {
    'button-1-1': actions.goToMenu,
    'button-2-2': actions.goToHelp,
    'button-3-3': () => {},
    'reset-defaults-4': actions.resetSettings,
    'save-changes-5': () => saveSettings(state.settings),
  };

  const pauseOverlayActions: Record<PauseOverlayActionId, () => void> = {
    'resume-1': actions.resumeGame,
    'restart-2': actions.restartGame,
    'settings-3': actions.goToSettings,
    'main-menu-4': actions.goToMenu,
  };

  return (
    <main data-setfarm-root="app" className="min-h-screen bg-[var(--color-background)] text-[var(--color-on-surface)]">
      {mode === 'menu' && <MainMenu actions={mainMenuActions} />}
      {mode === 'help' && <ControlsHelp actions={controlsHelpActions} />}
      {mode === 'settings' && <GameOptions actions={gameOptionsActions} />}
      {(mode === 'playing' || mode === 'paused' || mode === 'gameover') && (
        <div className="game-layout">
          <div className="game-sidebar left">
            <HoldRenderer />
            <StatsRenderer />
          </div>
          <div className="game-center">
            <GameBoard actions={gameBoardActions} />
            <div className="board-overlay">
              <GameBoardRenderer />
            </div>
          </div>
          <div className="game-sidebar right">
            <NextQueueRenderer />
          </div>
          {mode === 'paused' && <PauseOverlay actions={pauseOverlayActions} />}
          {mode === 'gameover' && <GameOver actions={gameOverActions} />}
        </div>
      )}
    </main>
  );
}

export default function App() {
  const settings = loadSettings();
  return (
    <AppProvider initialSettings={settings}>
      <AppInner />
    </AppProvider>
  );
}
