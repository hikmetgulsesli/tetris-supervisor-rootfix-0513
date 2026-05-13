// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay - Production Ready
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type PauseOverlayProductionReadyActionId = "resume-1" | "restart-2" | "settings-3" | "main-menu-4";

export interface PauseOverlayProductionReadyProps {
  actions?: Partial<Record<PauseOverlayProductionReadyActionId, () => void>>;
}

export function PauseOverlayProductionReady({ actions }: PauseOverlayProductionReadyProps) {
  return (
    <>
      {/* Mock Background Game Board (Blurred) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 blur-sm pointer-events-none">
      <div className="grid grid-cols-10 grid-rows-20 gap-unit w-[320px] h-[640px] border border-outline-variant bg-surface-container-low/20 p-unit">
      {/* Simulated Tetromino Pieces */}
      <div className="col-start-4 row-start-18 col-span-2 row-span-2 bg-primary/20 border border-primary/50 shadow-[inset_0_0_8px_rgba(207,188,255,0.3)]"></div>
      <div className="col-start-6 row-start-19 col-span-2 row-span-1 bg-tertiary/20 border border-tertiary/50 shadow-[inset_0_0_8px_rgba(231,195,101,0.3)]"></div>
      {/* Ghost Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMzM0MTU1IiBzdHJva2Utb3BhY2l0eT0iMC4yIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIGQ9Ik0zMiAwSDBWMzIiLz48L2c+PC9zdmc+')] pointer-events-none"></div>
      </div>
      </div>
      {/* Pause Overlay Canvas */}
      <div className="relative z-10 w-full max-w-sm px-lg flex flex-col items-center">
      {/* Pause Header */}
      <div className="mb-xl text-center">
      <h1 className="font-display-score text-display-score text-primary tracking-tighter drop-shadow-[0_0_15px_rgba(207,188,255,0.5)]">PAUSE</h1>
      <p className="font-label-mono text-label-mono text-on-surface-variant mt-sm">SYSTEM STANDBY</p>
      </div>
      {/* Action Menu */}
      <div className="w-full flex flex-col gap-md">
      {/* Resume Button (Primary Focus) */}
      <button className="group relative w-full h-touch-target flex items-center justify-center bg-surface border-2 border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors duration-200 shadow-[0_0_10px_rgba(207,188,255,0.2)] hover:shadow-[0_0_20px_rgba(207,188,255,0.6)] rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#141218]" type="button" data-action-id="resume-1" onClick={actions?.["resume-1"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} className="mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-headline-panel text-headline-panel uppercase tracking-wide">Resume</span>
      </button>
      {/* Restart Button */}
      <button className="w-full h-touch-target flex items-center justify-center bg-surface border border-outline-variant text-[#F8FAFC] hover:bg-surface-variant hover:border-outline transition-colors duration-200 rounded focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#141218]" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <Circle className="mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-headline-panel text-headline-panel uppercase">Restart</span>
      </button>
      {/* Settings Button */}
      <button className="w-full h-touch-target flex items-center justify-center bg-surface border border-outline-variant text-[#F8FAFC] hover:bg-surface-variant hover:border-outline transition-colors duration-200 rounded focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#141218]" type="button" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings className="mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-headline-panel text-headline-panel uppercase">Settings</span>
      </button>
      {/* Main Menu Button (Destructive/Secondary) */}
      <button className="w-full h-touch-target flex items-center justify-center bg-surface border border-outline-variant text-error hover:bg-error-container hover:text-on-error-container hover:border-error transition-colors duration-200 rounded focus:outline-none focus:border-error mt-sm focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-[#141218]" type="button" data-action-id="main-menu-4" onClick={actions?.["main-menu-4"]}>
      <Circle className="mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-headline-panel text-headline-panel uppercase">Main Menu</span>
      </button>
      </div>
      </div>
    </>
  );
}
