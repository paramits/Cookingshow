import { createContext, useContext, useState, ReactNode } from "react";

interface GameContextType {
  bullets: string[];
  setBullets: (bullets: string[]) => void;
  /** Stage 3 pitch notes only — independent from recipe bullets (Stages 1–2). */
  pitchBullets: string[];
  setPitchBullets: (bullets: string[]) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [bullets, setBullets] = useState<string[]>([""]);
  const [pitchBullets, setPitchBullets] = useState<string[]>([""]);

  return (
    <GameContext.Provider value={{ bullets, setBullets, pitchBullets, setPitchBullets }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}
