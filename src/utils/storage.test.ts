import { describe, it, expect, beforeEach } from 'vitest';
import { loadSettings, saveSettings, loadHighScores, saveHighScore, clearHighScores } from './storage';
import { DEFAULT_SETTINGS } from '../types/domain';

describe('storage utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('loadSettings returns defaults when empty', () => {
    const settings = loadSettings();
    expect(settings).toEqual(DEFAULT_SETTINGS);
  });

  it('saveSettings persists to localStorage', () => {
    const custom = { ...DEFAULT_SETTINGS, volume: 0.5 };
    saveSettings(custom);
    const loaded = loadSettings();
    expect(loaded.volume).toBe(0.5);
  });

  it('loadSettings handles partial saved data', () => {
    localStorage.setItem('tetris_settings', JSON.stringify({ volume: 0.3 }));
    const settings = loadSettings();
    expect(settings.volume).toBe(0.3);
    expect(settings.dasDelay).toBe(DEFAULT_SETTINGS.dasDelay);
  });

  it('loadHighScores returns empty array when empty', () => {
    expect(loadHighScores()).toEqual([]);
  });

  it('saveHighScore stores and sorts scores', () => {
    saveHighScore({ score: 1000, lines: 10, level: 2, date: '2024-01-01' });
    saveHighScore({ score: 5000, lines: 40, level: 5, date: '2024-01-02' });
    const scores = loadHighScores();
    expect(scores.length).toBe(2);
    expect(scores[0].score).toBe(5000);
  });

  it('clearHighScores removes all scores', () => {
    saveHighScore({ score: 1000, lines: 10, level: 2, date: '2024-01-01' });
    clearHighScores();
    expect(loadHighScores()).toEqual([]);
  });
});
