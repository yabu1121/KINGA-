import { create } from 'zustand'

interface GameState {
  score: number;
  clickCount: number;
  setResult: (score: number, clicks: number) => void;
  reset: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  score: 0,
  clickCount: 0,
  setResult: (score, clicks) => set({ score: score, clickCount: clicks }),
  reset: () => set({ score: 0, clickCount: 0 }),
}));