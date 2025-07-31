import HoverCard from './HoverCard';
import PlayIcon from './icons/PlayIcon';
import type { Album } from '../types/music';

type Props = {
  album: Album;
};

const AlbumCard = ({ album }: Props) => {
  return (
    <div
      className="w-full max-w-[160px] mx-auto cursor-pointer hover:scale-105 transition-transform group"
    >
      {/* Imagen + botón play */}
      <div className="relative w-full h-[160px] rounded-xl overflow-hidden shadow-lg">
        <HoverCard
          image={album.cover}
          style={{ width: "100%", height: "100%", borderRadius: "0.75rem" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#1DB954] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <PlayIcon size={28} className="text-white" />
            </div>
          </div>
        </HoverCard>
      </div>

      {/* Info del álbum */}
      <div className="mt-3 text-center">
        <h3 className="text-white font-semibold text-sm truncate">
          {album.title}
        </h3>
        <p className="text-[#b3b3b3] text-xs truncate mt-1">{album.year}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
