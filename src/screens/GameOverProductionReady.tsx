// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over - Production Ready
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Menu } from "lucide-react";


export type GameOverProductionReadyActionId = "reboot-sequence-1" | "main-menu-2" | "share-data-3";

export interface GameOverProductionReadyProps {
  actions?: Partial<Record<GameOverProductionReadyActionId, () => void>>;
}

export function GameOverProductionReady({ actions }: GameOverProductionReadyProps) {
  return (
    <>
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-error/10 via-background to-background z-0"></div>
      {/* Main Game Over Card */}
      <main className="relative z-10 flex flex-col items-center w-full max-w-md px-md py-xl gap-xl">
      {/* Header */}
      <div className="text-center w-full">
      <h1 className="font-display-score text-display-score text-error text-glow-error tracking-tighter uppercase mb-xs">SYSTEM HALT</h1>
      <p className="font-label-mono text-label-mono text-error uppercase tracking-widest">CRITICAL FAILURE IMMINENT</p>
      </div>
      {/* Stats Container */}
      <div className="w-full bg-surface-container border border-outline-variant p-lg rounded-DEFAULT neon-border-primary flex flex-col gap-md">
      {/* Final Score */}
      <div className="flex justify-between items-end border-b border-outline-variant pb-sm">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">FINAL SCORE</span>
      <span className="font-display-score text-display-score text-primary leading-none">24,590</span>
      </div>
      {/* Secondary Stats Grid */}
      <div className="grid grid-cols-2 gap-md pt-sm">
      <div className="flex flex-col bg-surface p-sm border border-outline-variant rounded-sm">
      <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase mb-xs">LEVEL REACHED</span>
      <span className="font-headline-panel text-headline-panel text-on-surface text-right">14</span>
      </div>
      <div className="flex flex-col bg-surface p-sm border border-outline-variant rounded-sm">
      <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase mb-xs">LINES CLEARED</span>
      <span className="font-headline-panel text-headline-panel text-on-surface text-right">142</span>
      </div>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="w-full flex flex-col gap-sm">
      <button className="w-full min-h-touch-target bg-primary text-on-primary font-headline-panel text-headline-panel uppercase border border-primary hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors flex items-center justify-center gap-sm" type="button" data-action-id="reboot-sequence-1" onClick={actions?.["reboot-sequence-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      REBOOT SEQUENCE
                  </button>
      <div className="grid grid-cols-2 gap-sm w-full">
      <button className="w-full min-h-touch-target bg-surface text-on-surface border border-outline-variant hover:bg-surface-variant hover:text-primary transition-colors font-label-mono text-label-mono uppercase flex items-center justify-center gap-xs" type="button" data-action-id="main-menu-2" onClick={actions?.["main-menu-2"]}>
      <Menu aria-hidden={true} focusable="false" />
                          MAIN MENU
                      </button>
      <button className="w-full min-h-touch-target bg-surface text-on-surface border border-outline-variant hover:bg-surface-variant hover:text-tertiary transition-colors font-label-mono text-label-mono uppercase flex items-center justify-center gap-xs" type="button" data-action-id="share-data-3" onClick={actions?.["share-data-3"]}>
      <Circle aria-hidden={true} focusable="false" />
                          SHARE DATA
                      </button>
      </div>
      </div>
      </main>
      {/* Suppressed Navigation Shells (Context: Transactional/Terminal Screen) */}
      {/* TopAppBar, SideNavBar, BottomNavBar are intentionally omitted as this is a dead-end overlay screen */}
    </>
  );
}
