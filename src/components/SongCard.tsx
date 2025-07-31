import { useMemo } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PlayIcon from "./icons/PlayIcon";
import HoverCard from "./HoverCard";
import { useFavorites } from "../hooks/useFavorites";
import type { Song } from "../types/music";

type Props = {
  song: Song;
  onClick: () => void;
};

const SongCard = ({ song, onClick }: Props) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const favorite = useMemo(() => isFavorite(song.id), [isFavorite, song.id]);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    favorite ? removeFavorite(song.id) : addFavorite(song);
  };

  return (
    <div
      className="w-full max-w-[180px] mx-auto cursor-pointer hover:scale-105 transition-transform group relative"
      onClick={onClick}
    >
      {/* Imagen + botón play */}
      <div className="relative w-full h-[180px] rounded-xl overflow-hidden shadow-lg">
        <HoverCard
          image={song.image} 
          style={{ width: "100%", height: "100%", borderRadius: "0.75rem" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#1DB954] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <PlayIcon size={28} className="text-white" />
            </div>
          </div>
        </HoverCard>

        {/* Favorito (esquina superior derecha) */}
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 rounded-full p-1 transition"
        >
          {favorite ? (
            <FaHeart size={18} className="text-red-500" />
          ) : (
            <FaRegHeart size={18} className="text-white" />
          )}
        </button>
      </div>

      {/* Título y artista */}
      <div className="mt-3 text-center">
        <h3 className="text-white font-semibold text-sm truncate">
          {song.title}
        </h3>
        <p className="text-[#b3b3b3] text-xs truncate mt-1">
          {song.artist}
        </p>
      </div>
    </div>
  );
};

export default SongCard;
