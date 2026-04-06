import { createContext, useContext, useState, ReactNode } from "react";

interface GameContextType {
  bullets: string[];
  setBullets: (bullets: string[]) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [bullets, setBullets] = useState<string[]>([""]);

  return (
    <GameContext.Provider value={{ bullets, setBullets }}>
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
