import type { Song } from "../data/Songs";
import PlayIcon from "./icons/PlayIcon";
import HoverCard from "./HoverCard";
import { useFavorites } from "../hooks/useFavorites";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState, useEffect } from "react";

type Props = {
  song: Song;
  onClick: () => void;
};

const SongCard = ({ song, onClick }: Props) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(song.id));
  }, [isFavorite, song.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (favorite) {
      removeFavorite(song.id);
      setFavorite(false);
    } else {
      addFavorite(song);
      setFavorite(true);
    }
  };

  return (
    <div
      className="w-full max-w-[180px] mx-auto cursor-pointer transition-transform duration-200 hover:scale-105 group relative"
      onClick={onClick}
    >
      {/* Imagen con hover y botón de play */}
      <div className="relative w-full h-[180px] rounded-xl overflow-hidden shadow-lg">
        <HoverCard
          image={song.image}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "0.75rem",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#1DB954] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <PlayIcon size={28} className="text-white" />
            </div>
          </div>
        </HoverCard>
      </div>

      {/* Botón de favoritos (arriba a la derecha) */}
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 rounded-full p-1 transition-all"
      >
        {favorite ? (
          <FaHeart className="text-red-500" size={18} />
        ) : (
          <FaRegHeart className="text-white" size={18} />
        )}
      </button>

      {/* Título y artista */}
      <div className="mt-3 text-center">
        <h3 className="text-white font-semibold text-sm truncate">
          {song.title}
        </h3>
        <p className="text-[#b3b3b3] text-xs truncate mt-1">{song.artist}</p>
      </div>
    </div>
  );
};

export default SongCard;
