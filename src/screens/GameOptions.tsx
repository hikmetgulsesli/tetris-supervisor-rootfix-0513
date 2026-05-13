// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Options
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Circle, CircleUserRound, Gamepad2, Settings } from "lucide-react";


export type GameOptionsActionId = "button-1-1" | "button-2-2" | "button-3-3" | "reset-defaults-4" | "save-changes-5";

export interface GameOptionsProps {
  actions?: Partial<Record<GameOptionsActionId, () => void>>;
}

export function GameOptions({ actions }: GameOptionsProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface border-b border-outline-variant shadow-[0_0_15px_rgba(207,188,255,0.1)] flex justify-between items-center px-lg py-sm w-full z-50 docked full-width top-0">
      <div className="flex items-center gap-md">
      <button className="text-primary dark:text-primary hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 p-sm rounded-full flex items-center justify-center" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <ArrowLeft aria-hidden={true} focusable="false" />
      </button>
      <h1 className="font-headline-panel text-headline-panel font-bold tracking-tighter text-primary dark:text-primary">SUPERVISOR ROOT</h1>
      </div>
      <div className="flex items-center gap-sm text-on-surface-variant dark:text-on-surface-variant">
      <button className="hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 p-sm rounded-full flex items-center justify-center" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 p-sm rounded-full flex items-center justify-center" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low hidden lg:flex flex-col fixed left-0 top-0 h-full z-40 py-xl docked left-0 h-full w-64 border-r border-outline-variant flat no-shadows pt-24">
      <div className="px-md mb-xl">
      <h2 className="text-headline-panel font-headline-panel text-primary mb-xs">OPERATOR</h2>
      <p className="font-label-mono text-label-mono text-on-surface-variant">V.01-ROOT</p>
      </div>
      <div className="flex flex-col gap-xs mt-lg">
      <a className="text-on-surface-variant px-md py-sm flex items-center gap-md hover:bg-surface-variant hover:text-on-surface transition-colors duration-150 font-label-mono text-label-mono" href="#">
      <Gamepad2 aria-hidden={true} focusable="false" />
                          CLASSIC
                      </a>
      <a className="text-on-surface-variant px-md py-sm flex items-center gap-md hover:bg-surface-variant hover:text-on-surface transition-colors duration-150 font-label-mono text-label-mono" href="#">
      <Circle aria-hidden={true} focusable="false" />
                          SPRINT
                      </a>
      <a className="text-on-surface-variant px-md py-sm flex items-center gap-md hover:bg-surface-variant hover:text-on-surface transition-colors duration-150 font-label-mono text-label-mono" href="#">
      <Circle aria-hidden={true} focusable="false" />
                          RANKED
                      </a>
      <a className="bg-primary-container text-on-primary-container font-bold border-l-4 border-primary px-md py-sm flex items-center gap-md transition-transform translate-x-1 font-label-mono text-label-mono" href="#">
      <Settings aria-hidden={true} focusable="false" />
                          SETTINGS
                      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 w-full lg:ml-64 flex justify-center items-start pt-xl pb-32 px-md overflow-y-auto">
      <div className="w-full max-w-2xl bg-surface border border-outline-variant rounded-lg p-xl relative">
      {/* Decorative Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-lg"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-lg"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-lg"></div>
      <div className="mb-xl border-b border-outline-variant pb-md">
      <h2 className="font-headline-panel text-display-score text-primary">Settings</h2>
      <p className="font-label-mono text-label-mono text-on-surface-variant mt-sm">CONFIGURE OPERATING PARAMETERS</p>
      </div>
      <div className="space-y-xl">
      {/* Audio Section */}
      <section className="space-y-md">
      <h3 className="font-headline-panel text-headline-panel text-secondary border-b border-outline-variant/50 pb-xs mb-md flex items-center gap-sm">
      <Circle className="text-secondary" aria-hidden={true} focusable="false" /> AUDIO
                              </h3>
      <div className="space-y-lg">
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center">
      <label className="font-label-mono text-label-mono text-on-surface">MASTER VOLUME</label>
      <span className="font-label-mono-sm text-label-mono-sm text-primary">80%</span>
      </div>
      <input className="w-full" max="100" min="0" type="range" value="80" />
      </div>
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center">
      <label className="font-label-mono text-label-mono text-on-surface">SFX VOLUME</label>
      <span className="font-label-mono-sm text-label-mono-sm text-primary">100%</span>
      </div>
      <input className="w-full" max="100" min="0" type="range" value="100" />
      </div>
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center">
      <label className="font-label-mono text-label-mono text-on-surface">MUSIC VOLUME</label>
      <span className="font-label-mono-sm text-label-mono-sm text-primary">60%</span>
      </div>
      <input className="w-full" max="100" min="0" type="range" value="60" />
      </div>
      </div>
      </section>
      {/* Gameplay Section */}
      <section className="space-y-md">
      <h3 className="font-headline-panel text-headline-panel text-secondary border-b border-outline-variant/50 pb-xs mb-md flex items-center gap-sm">
      <Circle className="text-secondary" aria-hidden={true} focusable="false" /> GAMEPLAY
                              </h3>
      <div className="space-y-lg">
      <div className="flex justify-between items-center bg-surface-variant p-md rounded border border-outline-variant">
      <div>
      <h4 className="font-label-mono text-label-mono text-on-surface">GHOST PIECE</h4>
      <p className="font-label-mono-sm text-label-mono-sm text-on-surface-variant mt-xs">Display landing position projection</p>
      </div>
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input checked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-surface border-4 border-outline-variant appearance-none cursor-pointer z-10" id="toggle1" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-outline-variant cursor-pointer" htmlFor="toggle1"></label>
      </div>
      </div>
      <div className="flex justify-between items-center bg-surface-variant p-md rounded border border-outline-variant">
      <div>
      <h4 className="font-label-mono text-label-mono text-on-surface">HARD DROP SHAKE</h4>
      <p className="font-label-mono-sm text-label-mono-sm text-on-surface-variant mt-xs">Screen shake on hard drop</p>
      </div>
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-surface border-4 border-outline-variant appearance-none cursor-pointer z-10" id="toggle2" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-outline-variant cursor-pointer" htmlFor="toggle2"></label>
      </div>
      </div>
      <div className="flex flex-col gap-sm bg-surface-variant p-md rounded border border-outline-variant">
      <div className="flex justify-between items-center">
      <label className="font-label-mono text-label-mono text-on-surface">STARTING DIFFICULTY (SPEED)</label>
      <span className="font-label-mono-sm text-label-mono-sm text-primary">LEVEL 5</span>
      </div>
      <input className="w-full mt-sm" max="15" min="1" type="range" value="5" />
      <div className="flex justify-between text-on-surface-variant font-label-mono-sm text-label-mono-sm mt-xs">
      <span>1</span>
      <span>15</span>
      </div>
      </div>
      </div>
      </section>
      {/* Actions */}
      <div className="pt-lg flex justify-end gap-md border-t border-outline-variant">
      <button className="h-touch-target px-xl border border-outline-variant text-on-surface font-label-mono text-label-mono hover:bg-surface-variant transition-colors rounded" type="button" data-action-id="reset-defaults-4" onClick={actions?.["reset-defaults-4"]}>
                                  RESET DEFAULTS
                              </button>
      <button className="h-touch-target px-xl border border-primary bg-primary/10 text-primary font-label-mono text-label-mono hover:bg-primary hover:text-on-primary transition-colors rounded shadow-[0_0_10px_rgba(207,188,255,0.2)]" type="button" data-action-id="save-changes-5" onClick={actions?.["save-changes-5"]}>
                                  SAVE CHANGES
                              </button>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* BottomNavBar */}
      <nav className="bg-surface-container-highest dark:bg-surface-container-highest lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-touch-target px-md docked full-width bottom-0 rounded-t-xl border-t border-outline-variant shadow-[0_-4px_20px_rgba(231,195,101,0.1)]">
      <a className="flex flex-col items-center justify-center text-on-surface-variant px-lg py-xs hover:text-tertiary transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-mono-sm text-label-mono-sm mt-xs">GAME</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant px-lg py-xs hover:text-tertiary transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-mono-sm text-label-mono-sm mt-xs">STATS</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant px-lg py-xs hover:text-tertiary transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-mono-sm text-label-mono-sm mt-xs">SOCIAL</span>
      </a>
      <a className="flex flex-col items-center justify-center bg-tertiary-container text-on-tertiary-container rounded-lg px-lg py-xs scale-90 transition-transform" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-mono-sm text-label-mono-sm mt-xs">ROOT</span>
      </a>
      </nav>
    </>
  );
}
