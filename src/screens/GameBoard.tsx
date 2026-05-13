// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, CircleUserRound, Gamepad2, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "button-3-3";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* Top App Bar */}
      <header className="bg-surface dark:bg-surface border-b border-outline-variant shadow-[0_0_15px_rgba(207,188,255,0.1)] flex justify-between items-center px-lg py-sm w-full z-50">
      <div className="flex items-center gap-sm">
      <Circle className="text-primary dark:text-primary" aria-hidden={true} focusable="false" />
      <span className="font-headline-panel text-headline-panel font-bold tracking-tighter text-primary dark:text-primary">SUPERVISOR ROOT</span>
      </div>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 p-xs rounded" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings  data-icon="settings" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 p-xs rounded" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  data-icon="help" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 p-xs rounded" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <CircleUserRound  data-icon="account_circle" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Game Area */}
      <main className="flex-grow flex items-center justify-center relative z-10 p-md h-full overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-lg items-center lg:items-stretch h-full w-full max-w-[1200px] justify-center">
      {/* Left Panel (Hold & Stats on Desktop, Top on Mobile) */}
      <div className="flex lg:flex-col gap-md lg:w-48 order-2 lg:order-1 justify-between lg:justify-start w-full">
      {/* Hold Panel */}
      <div className="bg-surface border border-outline-variant p-md rounded flex flex-col">
      <h2 className="font-headline-panel text-headline-panel text-on-surface mb-sm">HOLD</h2>
      <div className="w-full aspect-square border border-outline-variant bg-surface-container-lowest game-grid-bg relative p-xs flex items-center justify-center">
      {/* Preview Tetromino (T-Shape) */}
      <div className="grid grid-cols-3 grid-rows-2 gap-[1px] w-[75%] h-[75%] opacity-50">
      <div className="col-start-2 tetromino-glow-secondary"></div>
      <div className="col-start-1 row-start-2 tetromino-glow-secondary"></div>
      <div className="col-start-2 row-start-2 tetromino-glow-secondary"></div>
      <div className="col-start-3 row-start-2 tetromino-glow-secondary"></div>
      </div>
      </div>
      </div>
      {/* Stats Panels */}
      <div className="flex lg:flex-col gap-sm lg:mt-auto flex-grow justify-end">
      <div className="bg-surface border border-outline-variant p-sm rounded text-right flex flex-col justify-center flex-grow lg:flex-grow-0">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">SCORE</span>
      <span className="font-display-score text-display-score text-primary tracking-tighter">042,900</span>
      </div>
      <div className="bg-surface border border-outline-variant p-sm rounded text-right flex flex-col justify-center flex-grow lg:flex-grow-0">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">LEVEL</span>
      <span className="font-headline-panel text-[24px] font-bold text-on-surface">12</span>
      </div>
      <div className="bg-surface border border-outline-variant p-sm rounded text-right flex flex-col justify-center flex-grow lg:flex-grow-0">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">LINES</span>
      <span className="font-headline-panel text-[24px] font-bold text-on-surface">144</span>
      </div>
      </div>
      </div>
      {/* Center Game Board */}
      <div className="order-1 lg:order-2 flex-shrink-0 relative">
      {/* Focus State Border (Mandatory for active interaction area) */}
      <div className="absolute -inset-[2px] border-2 border-primary rounded-sm opacity-50 blur-[2px] pointer-events-none"></div>
      <div className="absolute -inset-[2px] border-2 border-primary rounded-sm opacity-80 pointer-events-none"></div>
      <div className="w-[320px] h-[640px] bg-surface-container-lowest border border-outline-variant relative overflow-hidden game-grid-bg">
      {/* Placed Blocks (Example) */}
      <div className="absolute bottom-0 left-0 w-full h-[160px]">
      {/* Row 1 (Bottom) */}
      <div className="absolute bottom-0 left-[0px] w-[32px] h-[32px] tetromino-glow-tertiary"></div>
      <div className="absolute bottom-0 left-[32px] w-[32px] h-[32px] tetromino-glow-tertiary"></div>
      <div className="absolute bottom-0 left-[64px] w-[32px] h-[32px] tetromino-glow-tertiary"></div>
      <div className="absolute bottom-0 left-[96px] w-[32px] h-[32px] tetromino-glow-secondary"></div>
      <div className="absolute bottom-0 left-[160px] w-[32px] h-[32px] tetromino-glow-primary"></div>
      <div className="absolute bottom-0 left-[192px] w-[32px] h-[32px] tetromino-glow-primary"></div>
      <div className="absolute bottom-0 left-[256px] w-[32px] h-[32px] tetromino-glow-tertiary"></div>
      <div className="absolute bottom-0 left-[288px] w-[32px] h-[32px] tetromino-glow-tertiary"></div>
      {/* Row 2 */}
      <div className="absolute bottom-[32px] left-[0px] w-[32px] h-[32px] tetromino-glow-tertiary"></div>
      <div className="absolute bottom-[32px] left-[96px] w-[32px] h-[32px] tetromino-glow-secondary"></div>
      <div className="absolute bottom-[32px] left-[128px] w-[32px] h-[32px] tetromino-glow-secondary"></div>
      <div className="absolute bottom-[32px] left-[160px] w-[32px] h-[32px] tetromino-glow-primary"></div>
      <div className="absolute bottom-[32px] left-[192px] w-[32px] h-[32px] tetromino-glow-primary"></div>
      <div className="absolute bottom-[32px] left-[256px] w-[32px] h-[32px] tetromino-glow-tertiary"></div>
      {/* Row 3 */}
      <div className="absolute bottom-[64px] left-[128px] w-[32px] h-[32px] tetromino-glow-secondary"></div>
      <div className="absolute bottom-[64px] left-[256px] w-[32px] h-[32px] tetromino-glow-tertiary"></div>
      </div>
      {/* Active Falling Piece (J-Shape) */}
      <div className="absolute top-[160px] left-[128px] w-[64px] h-[96px]">
      <div className="absolute top-0 right-0 w-[32px] h-[32px] tetromino-glow-primary"></div>
      <div className="absolute top-[32px] right-0 w-[32px] h-[32px] tetromino-glow-primary"></div>
      <div className="absolute top-[64px] right-0 w-[32px] h-[32px] tetromino-glow-primary"></div>
      <div className="absolute top-[64px] left-0 w-[32px] h-[32px] tetromino-glow-primary"></div>
      </div>
      {/* Ghost Piece */}
      <div className="absolute bottom-[96px] left-[128px] w-[64px] h-[96px] opacity-20 border border-primary">
      <div className="absolute top-0 right-0 w-[32px] h-[32px] border border-primary"></div>
      <div className="absolute top-[32px] right-0 w-[32px] h-[32px] border border-primary"></div>
      <div className="absolute top-[64px] right-0 w-[32px] h-[32px] border border-primary"></div>
      <div className="absolute top-[64px] left-0 w-[32px] h-[32px] border border-primary"></div>
      </div>
      {/* Pause Overlay (Hidden by default, shown for structure context) */}
      {/* <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center z-20">
                              <span className="font-headline-panel text-headline-panel text-primary mb-lg">PAUSED</span>
                              <Circle className="text-[48px] text-primary" aria-hidden={true} focusable="false" />
                          </div> */}
      </div>
      </div>
      {/* Right Panel (Next Pieces) */}
      <div className="flex flex-row lg:flex-col gap-md lg:w-48 order-3 w-full justify-between lg:justify-start">
      <div className="bg-surface border border-outline-variant p-md rounded flex flex-col w-full">
      <h2 className="font-headline-panel text-headline-panel text-on-surface mb-sm">NEXT</h2>
      {/* Next 1 */}
      <div className="w-full aspect-square border border-outline-variant bg-surface-container-lowest game-grid-bg relative p-xs flex items-center justify-center mb-sm">
      {/* Preview Tetromino (I-Shape) */}
      <div className="grid grid-cols-4 grid-rows-1 gap-[1px] w-[90%] h-[25%]">
      <div className="tetromino-glow-primary"></div>
      <div className="tetromino-glow-primary"></div>
      <div className="tetromino-glow-primary"></div>
      <div className="tetromino-glow-primary"></div>
      </div>
      </div>
      {/* Next 2 & 3 (Smaller) */}
      <div className="flex lg:flex-col gap-sm">
      <div className="flex-1 aspect-square border border-outline-variant bg-surface-container-lowest relative flex items-center justify-center p-xs">
      {/* Preview Tetromino (O-Shape) */}
      <div className="grid grid-cols-2 grid-rows-2 gap-[1px] w-[50%] h-[50%] opacity-70">
      <div className="tetromino-glow-tertiary"></div>
      <div className="tetromino-glow-tertiary"></div>
      <div className="tetromino-glow-tertiary"></div>
      <div className="tetromino-glow-tertiary"></div>
      </div>
      </div>
      <div className="flex-1 aspect-square border border-outline-variant bg-surface-container-lowest relative flex items-center justify-center p-xs">
      {/* Preview Tetromino (S-Shape) */}
      <div className="grid grid-cols-3 grid-rows-2 gap-[1px] w-[75%] h-[50%] opacity-50">
      <div className="col-start-2 tetromino-glow-secondary"></div>
      <div className="col-start-3 tetromino-glow-secondary"></div>
      <div className="col-start-1 row-start-2 tetromino-glow-secondary"></div>
      <div className="col-start-2 row-start-2 tetromino-glow-secondary"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* Bottom Nav / Mobile Controls Shell */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-touch-target px-md bg-surface-container-highest dark:bg-surface-container-highest shadow-[0_-4px_20px_rgba(231,195,101,0.1)]">
      <a className="flex flex-col items-center justify-center bg-tertiary-container text-on-tertiary-container rounded-lg px-lg py-xs" href="#">
      <Circle  data-icon="grid_view" aria-hidden={true} focusable="false" />
      <span className="font-label-mono-sm text-label-mono-sm">GAME</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant px-lg py-xs hover:text-tertiary transition-colors" href="#">
      <Circle  data-icon="monitoring" aria-hidden={true} focusable="false" />
      <span className="font-label-mono-sm text-label-mono-sm">STATS</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant px-lg py-xs hover:text-tertiary transition-colors" href="#">
      <Circle  data-icon="groups" aria-hidden={true} focusable="false" />
      <span className="font-label-mono-sm text-label-mono-sm">SOCIAL</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant px-lg py-xs hover:text-tertiary transition-colors" href="#">
      <Circle  data-icon="security" aria-hidden={true} focusable="false" />
      <span className="font-label-mono-sm text-label-mono-sm">ROOT</span>
      </a>
      </nav>
      {/* Desktop Side Nav (Hidden on Mobile) */}
      <nav className="hidden lg:flex flex-col fixed left-0 top-0 h-full z-40 py-xl bg-surface-container-low dark:bg-surface-container-low w-64 pt-20">
      <div className="px-md mb-xl flex flex-col gap-sm">
      <span className="text-headline-panel font-headline-panel text-primary">OPERATOR</span>
      <span className="font-label-mono text-label-mono text-on-surface-variant">V.01-ROOT</span>
      </div>
      <div className="flex flex-col gap-sm">
      <a className="bg-primary-container text-on-primary-container font-bold border-l-4 border-primary px-md py-sm flex items-center gap-md" href="#">
      <Gamepad2  data-icon="videogame_asset" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono">CLASSIC</span>
      </a>
      <a className="text-on-surface-variant px-md py-sm flex items-center gap-md hover:bg-surface-variant hover:text-on-surface transition-colors duration-150" href="#">
      <Circle  data-icon="timer" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono">SPRINT</span>
      </a>
      <a className="text-on-surface-variant px-md py-sm flex items-center gap-md hover:bg-surface-variant hover:text-on-surface transition-colors duration-150" href="#">
      <Circle  data-icon="leaderboard" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono">RANKED</span>
      </a>
      <a className="text-on-surface-variant px-md py-sm flex items-center gap-md hover:bg-surface-variant hover:text-on-surface transition-colors duration-150 mt-auto" href="#">
      <Settings  data-icon="settings" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono">SETTINGS</span>
      </a>
      </div>
      </nav>
    </>
  );
}
