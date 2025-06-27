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
      className="block w-[180px] p-4 bg-transparent cursor-pointer transition-transform hover:scale-[1.03] group"
      onClick={onClick}
    >
      {/* Contenedor de imagen cuadrada con efecto hover */}
      <div className="w-[160px] h-[160px] mx-auto rounded-lg overflow-hidden">
        <HoverCard
          image={song.image}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '0.5rem'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#1DB954] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayIcon size={28} className="text-white" />
            </div>
          </div>
        </HoverCard>
      </div>

      {/* Información de la canción */}
      <div className="mt-4 text-center">
        <h3 className="font-semibold text-white text-base truncate">
          {song.title}
        </h3>
        <p className="text-[#b3b3b3] text-sm truncate mt-1">
          {song.artist}
        </p>
      </div>
    </div>
  );
};

export default SongCard;