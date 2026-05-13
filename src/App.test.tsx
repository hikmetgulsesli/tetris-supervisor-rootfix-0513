import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, act } from '@testing-library/react';
import App from './App';

describe('App test bridge', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    delete (window as unknown as Record<string, unknown>).app;
    delete (window as unknown as Record<string, unknown>).game;
    delete (window as unknown as Record<string, unknown>).render_game_to_text;
    delete (window as unknown as Record<string, unknown>).advanceTime;
  });

  it('mounts App and exposes window.app', () => {
    render(<App />);
    const win = window as unknown as Record<string, unknown>;
    expect(win.app).toBeDefined();
    expect(win.game).toBeDefined();
  });

  it('render_game_to_text returns JSON with game state', () => {
    render(<App />);
    const win = window as unknown as Record<string, unknown>;
    const text = (win.render_game_to_text as () => string)();
    const state = JSON.parse(text);
    expect(state.mode).toBe('menu');
    expect(typeof state.score).toBe('number');
    expect(Array.isArray(state.board)).toBe(true);
  });

  it('advanceTime advances the game loop', async () => {
    render(<App />);
    const win = window as unknown as Record<string, unknown>;
    const app = win.app as { actions: { startGame: () => void } };
    await act(async () => {
      app.actions.startGame();
    });
    const before = (win.render_game_to_text as () => string)();
    const beforeState = JSON.parse(before);
    expect(beforeState.mode).toBe('playing');
    await act(async () => {
      (win.advanceTime as (ms: number) => void)(1000);
    });
    const after = (win.render_game_to_text as () => string)();
    const afterState = JSON.parse(after);
    expect(afterState.mode).toBe('playing');
    expect(afterState.activePiece).not.toBeNull();
  });
});
