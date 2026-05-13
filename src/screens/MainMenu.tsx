// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type MainMenuActionId = "start-game-1" | "settings-2" | "how-to-play-3";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Background overlay: Stylized game in progress */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: "radial-gradient(circle at center, rgba(51, 65, 85, 0.4) 1px, transparent 1px)", backgroundSize: "32px 32px"}}></div>
      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center z-10 px-md relative w-full max-w-7xl mx-auto h-screen">
      {/* Game Title */}
      <div className="mb-xl text-center flex flex-col items-center gap-md">
      <h1 className="font-display-score text-display-score text-primary tracking-tighter" style={{textShadow: "0 0 15px rgba(207,188,255,0.5)"}}>Tetris Supervisor Root Fix</h1>
      <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest border border-outline-variant px-md py-xs bg-surface-container-low">Main Menu</p>
      </div>
      {/* Menu Actions */}
      <div className="flex flex-col gap-md w-full max-w-sm">
      <button className="w-full h-touch-target flex items-center justify-center gap-sm bg-primary text-on-primary font-headline-panel text-headline-panel border-2 border-primary rounded-DEFAULT hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-colors duration-200 shadow-[0_0_10px_rgba(207,188,255,0.5)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Start Game
                  </button>
      <button className="w-full h-touch-target flex items-center justify-center gap-sm bg-surface text-primary font-headline-panel text-headline-panel border-2 border-outline-variant rounded-DEFAULT hover:border-primary hover:bg-surface-variant transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings aria-hidden={true} focusable="false" />
                      Settings
                  </button>
      <button className="w-full h-touch-target flex items-center justify-center gap-sm bg-surface text-primary font-headline-panel text-headline-panel border-2 border-outline-variant rounded-DEFAULT hover:border-primary hover:bg-surface-variant transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="how-to-play-3" onClick={actions?.["how-to-play-3"]}>
      <Circle aria-hidden={true} focusable="false" />
                      How to Play
                  </button>
      </div>
      </main>
    </>
  );
}
