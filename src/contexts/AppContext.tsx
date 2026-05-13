import React, { createContext, useContext, useMemo } from 'react';
import type { GameState } from '../types/domain';
import type { AppActions } from '../hooks/useAppState';
import { useAppState } from '../hooks/useAppState';
import type { GameSettings } from '../types/domain';

interface AppContextValue {
  state: GameState;
  actions: AppActions;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({
  children,
  initialSettings,
}: {
  children: React.ReactNode;
  initialSettings?: GameSettings;
}) {
  const { state, actions } = useAppState(initialSettings);
  const value = useMemo(() => ({ state, actions }), [state, actions]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useGameState(): GameState {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useGameState must be used within AppProvider');
  return ctx.state;
}

export function useGameActions(): AppActions {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useGameActions must be used within AppProvider');
  return ctx.actions;
}

export function useGame(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useGame must be used within AppProvider');
  return ctx;
}
