import type { GameSettings, HighScore } from '../types/domain';
import { DEFAULT_SETTINGS } from '../types/domain';

const SETTINGS_KEY = 'tetris_settings';
const HIGH_SCORES_KEY = 'tetris_high_scores';

export function loadSettings(): GameSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return { ...DEFAULT_SETTINGS };
    const parsed = JSON.parse(raw) as Partial<GameSettings>;
    return {
      dasDelay: parsed.dasDelay ?? DEFAULT_SETTINGS.dasDelay,
      arrDelay: parsed.arrDelay ?? DEFAULT_SETTINGS.arrDelay,
      softDropSpeed: parsed.softDropSpeed ?? DEFAULT_SETTINGS.softDropSpeed,
      ghostPiece: parsed.ghostPiece ?? DEFAULT_SETTINGS.ghostPiece,
      showGrid: parsed.showGrid ?? DEFAULT_SETTINGS.showGrid,
      volume: parsed.volume ?? DEFAULT_SETTINGS.volume,
    };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(settings: GameSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // Ignore storage errors
  }
}

export function loadHighScores(): HighScore[] {
  try {
    const raw = localStorage.getItem(HIGH_SCORES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as HighScore[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveHighScore(score: HighScore): void {
  try {
    const scores = loadHighScores();
    scores.push(score);
    scores.sort((a, b) => b.score - a.score);
    localStorage.setItem(HIGH_SCORES_KEY, JSON.stringify(scores.slice(0, 10)));
  } catch {
    // Ignore storage errors
  }
}

export function clearHighScores(): void {
  try {
    localStorage.removeItem(HIGH_SCORES_KEY);
  } catch {
    // Ignore storage errors
  }
}
