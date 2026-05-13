import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAppState } from './useAppState';
import { DEFAULT_SETTINGS } from '../types/domain';

describe('useAppState', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('initial state is menu mode with empty board', () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.mode).toBe('menu');
    expect(result.current.state.score).toBe(0);
    expect(result.current.state.level).toBe(1);
    expect(result.current.state.lines).toBe(0);
    expect(result.current.state.activePiece).toBeNull();
  });

  it('startGame transitions to playing and spawns a piece', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.actions.startGame();
    });
    expect(result.current.state.mode).toBe('playing');
    expect(result.current.state.activePiece).not.toBeNull();
    expect(result.current.state.nextQueue.length).toBeGreaterThan(0);
  });

  it('pauseGame and resumeGame toggle mode', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.pauseGame());
    expect(result.current.state.mode).toBe('paused');
    act(() => result.current.actions.resumeGame());
    expect(result.current.state.mode).toBe('playing');
  });

  it('restartGame resets state', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.restartGame());
    expect(result.current.state.mode).toBe('playing');
    expect(result.current.state.score).toBe(0);
    expect(result.current.state.lines).toBe(0);
  });

  it('goToMenu transitions to menu', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.goToMenu());
    expect(result.current.state.mode).toBe('menu');
  });

  it('goToSettings transitions to settings', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.goToSettings());
    expect(result.current.state.mode).toBe('settings');
  });

  it('updateSettings changes settings', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.updateSettings({ volume: 0.2 }));
    expect(result.current.state.settings.volume).toBe(0.2);
  });

  it('resetSettings restores defaults', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.updateSettings({ volume: 0.2 }));
    act(() => result.current.actions.resetSettings());
    expect(result.current.state.settings.volume).toBe(DEFAULT_SETTINGS.volume);
  });

  it('moveLeft and moveRight change piece x', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const startX = result.current.state.activePiece!.x;
    act(() => result.current.actions.moveRight());
    expect(result.current.state.activePiece!.x).toBe(startX + 1);
    act(() => result.current.actions.moveLeft());
    expect(result.current.state.activePiece!.x).toBe(startX);
  });

  it('rotateClockwise changes rotation', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const startRot = result.current.state.activePiece!.rotation;
    act(() => result.current.actions.rotateClockwise());
    expect(result.current.state.activePiece!.rotation).toBe((startRot + 1) % 4);
  });

  it('hold swaps hold piece', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const firstType = result.current.state.activePiece!.type;
    act(() => result.current.actions.hold());
    expect(result.current.state.holdPiece).toBe(firstType);
    expect(result.current.state.holdUsed).toBe(true);
  });

  it('hardDrop increases score and locks piece', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const beforeScore = result.current.state.score;
    act(() => result.current.actions.hardDrop());
    expect(result.current.state.score).toBeGreaterThan(beforeScore);
    expect(result.current.state.activePiece).not.toBeNull();
  });

  it('tick moves piece down via gravity', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const startY = result.current.state.activePiece!.y;
    // Tick many times to ensure gravity drop
    act(() => {
      for (let i = 0; i < 100; i++) {
        result.current.actions.tick();
      }
    });
    expect(result.current.state.activePiece!.y).toBeGreaterThan(startY);
  });
});
