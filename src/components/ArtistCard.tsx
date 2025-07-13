import HoverCard from './HoverCard';
import PlayIcon from './icons/PlayIcon';
import type { Artist } from '../data/Artists';

type Props = {
  artist: Artist;
};

const ArtistCard = ({ artist }: Props) => {
  return (
    <a
      href="#"
      className="block w-full px-2 pt-2 pb-4 cursor-pointer no-underline group transition-transform duration-200 hover:scale-105"
    >
      <div className="mx-auto w-[120px] h-[120px] relative">
        <HoverCard
          image={artist.photo}
          style={{
            borderRadius: '50%',
            width: '100%',
            height: '100%',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#1DB954] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <PlayIcon size={20} className="text-white" />
            </div>
          </div>
        </HoverCard>
      </div>

      <h3 className="text-white font-semibold text-sm text-center truncate mt-3 mb-1">
        {artist.name}
      </h3>
      <p className="text-text-secondary text-xs text-center">
        {artist.listeners.toLocaleString()} oyentes
      </p>
    </a>
  );
};

export default ArtistCard;
