// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu - Production Ready
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type MainMenuProductionReadyActionId = "start-game-1";

export interface MainMenuProductionReadyProps {
  actions?: Partial<Record<MainMenuProductionReadyActionId, () => void>>;
}

export function MainMenuProductionReady({ actions }: MainMenuProductionReadyProps) {
  return (
    <>
      {/* Background overlay: Stylized game in progress */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: "radial-gradient(circle at center, rgba(51, 65, 85, 0.4) 1px, transparent 1px)", backgroundSize: "32px 32px"}}></div>
      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center z-10 px-md relative w-full max-w-7xl mx-auto h-screen">
      {/* Game Title */}
      <div className="mb-xl text-center flex flex-col items-center gap-md">
      <h1 className="font-display-score text-display-score text-primary tracking-tighter" style={{textShadow: "0 0 15px rgba(207,188,255,0.8), 0 0 30px rgba(207,188,255,0.4)"}}>Tetris Supervisor Root Fix</h1>
      <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest border border-outline-variant px-md py-xs bg-surface-container-low">Main Menu</p>
      </div>
      {/* Menu Actions */}
      <div className="flex flex-col gap-md w-full max-w-sm">
      <button className="w-full h-touch-target flex items-center justify-center gap-sm bg-primary text-on-primary font-headline-panel text-headline-panel border-2 border-primary rounded-DEFAULT hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-colors duration-200 shadow-[0_0_15px_rgba(207,188,255,0.6)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#141218]" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Start Game
                  </button>
      <a className="w-full h-touch-target flex items-center justify-center gap-sm bg-surface text-primary font-headline-panel text-headline-panel border-2 border-outline-variant rounded-DEFAULT hover:border-primary hover:bg-surface-variant transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#141218]" href="#settings">
      <Settings aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      <a className="w-full h-touch-target flex items-center justify-center gap-sm bg-surface text-primary font-headline-panel text-headline-panel border-2 border-outline-variant rounded-DEFAULT hover:border-primary hover:bg-surface-variant transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#141218]" href="#how-to-play">
      <Circle aria-hidden={true} focusable="false" />
                      How to Play
                  </a>
      </div>
      </main>
    </>
  );
}
