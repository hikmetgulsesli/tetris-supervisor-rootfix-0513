// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help - Production Ready
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Circle, CircleUserRound, Settings, TriangleAlert } from "lucide-react";


export type ControlsHelpProductionReadyActionId = "button-1-1" | "button-2-2" | "button-3-3";

export interface ControlsHelpProductionReadyProps {
  actions?: Partial<Record<ControlsHelpProductionReadyActionId, () => void>>;
}

export function ControlsHelpProductionReady({ actions }: ControlsHelpProductionReadyProps) {
  return (
    <>
      {/* TopAppBar: Executing Shared Components JSON verbatim for shell structure */}
      <header className="flex justify-between items-center px-lg py-sm w-full z-50 bg-surface dark:bg-surface border-b border-outline-variant shadow-[0_0_15px_rgba(207,188,255,0.1)] sticky top-0">
      <div className="flex items-center gap-md">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary dark:text-primary" aria-hidden={true} focusable="false" />
      <span className="font-headline-panel text-headline-panel font-bold tracking-tighter text-primary dark:text-primary">SUPERVISOR ROOT</span>
      </div>
      <div className="flex gap-sm items-center">
      {/* Settings (Inactive) */}
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 p-sm rounded-full active:scale-95 active:opacity-80 transition-colors flex items-center justify-center h-touch-target w-touch-target" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      {/* Help (Active - matching page intent) */}
      <button className="text-primary dark:text-primary border-b-2 border-primary bg-surface-variant/30 hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 p-sm active:scale-95 active:opacity-80 transition-colors flex items-center justify-center h-touch-target w-touch-target" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      {/* Account (Inactive) */}
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 p-sm rounded-full active:scale-95 active:opacity-80 transition-colors flex items-center justify-center h-touch-target w-touch-target" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-[1024px] mx-auto px-lg py-xl flex flex-col gap-xl">
      {/* Navigation & Header Row */}
      <div className="flex flex-col gap-lg">
      <a className="self-start flex items-center gap-sm px-md py-sm border border-outline-variant rounded-DEFAULT bg-surface-container-low hover:bg-surface-variant hover:border-outline text-primary font-label-mono text-label-mono transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent active:scale-95 group" href="index.html">
      <ArrowLeft className="text-[18px] group-hover:-translate-x-1 transition-transform" aria-hidden={true} focusable="false" />
                      RETURN TO MENU
                  </a>
      <h1 className="font-display-score text-display-score text-primary uppercase tracking-tight drop-shadow-[0_0_10px_rgba(207,188,255,0.3)]">
                      How to Play
                  </h1>
      </div>
      {/* Brutalist Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-cell relative z-10">
      {/* KEYBOARD CONTROLS PANEL (Left/Top) */}
      <section className="lg:col-span-7 border border-outline-variant bg-surface-container flex flex-col relative group">
      {/* Focus/Neon Bleed Element */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none z-20"></div>
      <header className="p-lg border-b border-outline-variant bg-surface-container-low flex items-center justify-between">
      <h2 className="font-headline-panel text-headline-panel text-tertiary flex items-center gap-sm">
      <Circle aria-hidden={true} focusable="false" />
                              INPUT PROTOCOLS
                          </h2>
      <span className="font-label-mono-sm text-label-mono-sm text-outline px-sm py-xs border border-outline-variant rounded-DEFAULT">SEC-01</span>
      </header>
      <div className="p-lg flex flex-col gap-md font-label-mono text-label-mono text-on-surface">
      <div className="flex justify-between items-center pb-sm border-b border-surface-variant hover:bg-surface-variant/50 px-sm -mx-sm rounded transition-colors">
      <span className="text-on-surface-variant">TRANSLATE X-AXIS</span>
      <div className="flex gap-xs">
      <kbd className="min-w-[32px] h-[32px] flex items-center justify-center bg-surface border border-outline text-primary rounded-DEFAULT shadow-[0_2px_0_rgba(73,69,81,1)]">←</kbd>
      <kbd className="min-w-[32px] h-[32px] flex items-center justify-center bg-surface border border-outline text-primary rounded-DEFAULT shadow-[0_2px_0_rgba(73,69,81,1)]">→</kbd>
      </div>
      </div>
      <div className="flex justify-between items-center pb-sm border-b border-surface-variant hover:bg-surface-variant/50 px-sm -mx-sm rounded transition-colors">
      <span className="text-on-surface-variant">ROTATE MATRIX</span>
      <div className="flex gap-xs items-center">
      <kbd className="min-w-[32px] h-[32px] flex items-center justify-center bg-surface border border-outline text-primary rounded-DEFAULT shadow-[0_2px_0_rgba(73,69,81,1)]">↑</kbd>
      <span className="text-outline-variant px-xs text-[10px]">OR</span>
      <kbd className="px-sm h-[32px] flex items-center justify-center bg-surface border border-outline text-primary rounded-DEFAULT shadow-[0_2px_0_rgba(73,69,81,1)]">X</kbd>
      </div>
      </div>
      <div className="flex justify-between items-center pb-sm border-b border-surface-variant hover:bg-surface-variant/50 px-sm -mx-sm rounded transition-colors">
      <span className="text-on-surface-variant">SOFT DROP (ACCEL)</span>
      <kbd className="min-w-[32px] h-[32px] flex items-center justify-center bg-surface border border-outline text-primary rounded-DEFAULT shadow-[0_2px_0_rgba(73,69,81,1)]">↓</kbd>
      </div>
      <div className="flex justify-between items-center pb-sm border-b border-surface-variant hover:bg-surface-variant/50 px-sm -mx-sm rounded transition-colors">
      <span className="text-tertiary flex items-center gap-xs">
      <TriangleAlert  style={{fontVariationSettings: "'FILL' 1"}} className="text-[16px]" aria-hidden={true} focusable="false" /> 
                                  HARD DROP (INSTANT)
                              </span>
      <kbd className="px-xl h-[32px] flex items-center justify-center bg-surface border-2 border-tertiary text-tertiary rounded-DEFAULT shadow-[0_3px_0_rgba(231,195,101,0.4)] drop-shadow-[0_0_8px_rgba(231,195,101,0.2)]">SPACE</kbd>
      </div>
      <div className="flex justify-between items-center pb-sm border-b border-surface-variant hover:bg-surface-variant/50 px-sm -mx-sm rounded transition-colors">
      <span className="text-on-surface-variant">HOLD / SWAP PIECE</span>
      <div className="flex gap-xs items-center">
      <kbd className="px-sm h-[32px] flex items-center justify-center bg-surface border border-outline text-primary rounded-DEFAULT shadow-[0_2px_0_rgba(73,69,81,1)]">SHIFT</kbd>
      <span className="text-outline-variant px-xs text-[10px]">OR</span>
      <kbd className="px-sm h-[32px] flex items-center justify-center bg-surface border border-outline text-primary rounded-DEFAULT shadow-[0_2px_0_rgba(73,69,81,1)]">C</kbd>
      </div>
      </div>
      <div className="flex justify-between items-center hover:bg-surface-variant/50 px-sm -mx-sm rounded transition-colors pt-xs">
      <span className="text-on-surface-variant">SYSTEM OVERRIDES</span>
      <div className="flex gap-md">
      <div className="flex items-center gap-sm">
      <span className="text-outline-variant text-[10px]">PAUSE</span>
      <kbd className="min-w-[32px] h-[32px] flex items-center justify-center bg-surface border border-outline text-primary rounded-DEFAULT shadow-[0_2px_0_rgba(73,69,81,1)]">P</kbd>
      </div>
      <div className="flex items-center gap-sm">
      <span className="text-outline-variant text-[10px]">RESET</span>
      <kbd className="min-w-[32px] h-[32px] flex items-center justify-center bg-surface border border-outline text-primary rounded-DEFAULT shadow-[0_2px_0_rgba(73,69,81,1)]">R</kbd>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* GAME RULES PANEL (Right/Bottom) */}
      <section className="lg:col-span-5 border border-outline-variant bg-surface-container flex flex-col relative group">
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none z-20"></div>
      <header className="p-lg border-b border-outline-variant bg-surface-container-low flex items-center justify-between">
      <h2 className="font-headline-panel text-headline-panel text-primary flex items-center gap-sm">
      <Circle aria-hidden={true} focusable="false" />
                              CORE DIRECTIVES
                          </h2>
      <span className="font-label-mono-sm text-label-mono-sm text-outline px-sm py-xs border border-outline-variant rounded-DEFAULT">SEC-02</span>
      </header>
      <div className="p-lg flex flex-col gap-xl">
      {/* Rule 1: Clear Lines */}
      <div className="flex gap-md items-start">
      <div className="flex-shrink-0 w-[44px] h-[44px] rounded-DEFAULT bg-surface border border-outline-variant flex items-center justify-center text-primary shadow-[inset_0_0_15px_rgba(207,188,255,0.05)]">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col gap-xs pt-xs">
      <h3 className="font-headline-panel text-headline-panel text-[#F8FAFC]">CLEAR LINES</h3>
      <p className="font-body-standard text-body-standard text-on-surface-variant">Complete horizontal rows across the matrix grid. Clearing 4 lines simultaneously (a Tetris) yields maximum score output.</p>
      </div>
      </div>
      {/* Rule 2: Level Up */}
      <div className="flex gap-md items-start">
      <div className="flex-shrink-0 w-[44px] h-[44px] rounded-DEFAULT bg-surface border border-outline-variant flex items-center justify-center text-tertiary shadow-[inset_0_0_15px_rgba(231,195,101,0.05)]">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col gap-xs pt-xs">
      <h3 className="font-headline-panel text-headline-panel text-[#F8FAFC]">VELOCITY ESCALATION</h3>
      <p className="font-body-standard text-body-standard text-on-surface-variant">As your score threshold increases, the system level upgrades. Gravity forces multiply, requiring faster cognitive processing.</p>
      </div>
      </div>
      {/* Rule 3: Game Over */}
      <div className="flex gap-md items-start">
      <div className="flex-shrink-0 w-[44px] h-[44px] rounded-DEFAULT bg-surface border border-error flex items-center justify-center text-error shadow-[inset_0_0_15px_rgba(255,180,171,0.1)]">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col gap-xs pt-xs">
      <h3 className="font-headline-panel text-headline-panel text-[#F8FAFC]">MATRIX OVERFLOW</h3>
      <p className="font-body-standard text-body-standard text-on-surface-variant">Prevent blocks from breaching the upper threshold. A top-out scenario triggers immediate terminal system failure.</p>
      </div>
      </div>
      </div>
      </section>
      </div>
      </main>
    </>
  );
}
