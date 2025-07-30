import { createContext, useContext } from "react";
import { usePlayer } from "../hooks/usePlayer";

const PlayerContext = createContext<ReturnType<typeof usePlayer> | null>(null);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const player = usePlayer();
  return <PlayerContext.Provider value={player}>{children}</PlayerContext.Provider>;
};

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayerContext debe usarse dentro de un PlayerProvider");
  }
  return context;
};
