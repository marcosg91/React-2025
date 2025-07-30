import { useState, useEffect } from "react";
import type { Song } from "../data/Songs";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Song[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const addFavorite = (song: Song) => {
    const updated = [...favorites, song];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const removeFavorite = (id: string) => {
    const updated = favorites.filter((s) => s.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const isFavorite = (id: string) => {
    return favorites.some((s) => s.id === id);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
