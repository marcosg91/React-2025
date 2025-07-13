import type { Song } from '../data/Songs';
import PlayIcon from './icons/PlayIcon';
import HoverCard from './HoverCard';

type Props = {
  song: Song;
  onClick: () => void;
};

const SongCard = ({ song, onClick }: Props) => {
  return (
    <div 
      className="w-full max-w-[180px] mx-auto cursor-pointer transition-transform duration-200 hover:scale-105 group"
      onClick={onClick}
    >
      {/* Imagen con hover y botón */}
      <div className="relative w-full h-[180px] rounded-xl overflow-hidden shadow-lg">
        <HoverCard
          image={song.image}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '0.75rem'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#1DB954] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <PlayIcon size={28} className="text-white" />
            </div>
          </div>
        </HoverCard>
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
