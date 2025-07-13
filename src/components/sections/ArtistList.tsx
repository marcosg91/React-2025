import ArtistCard from '../ArtistCard';
import type { Artist } from '../../data/Artists';

type Props = {
  artists: Artist[];
};

const ArtistList = ({ artists }: Props) => {
  return (
    <div className="relative">
      {/* Gradientes visuales */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {artists.length > 0 ? (
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="flex gap-8 px-6 pb-6">
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="min-w-[140px] max-w-[140px] flex-shrink-0"
              >
                <ArtistCard artist={artist} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-text-secondary py-8">
          No se encontraron artistas
        </p>
      )}
    </div>
  );
};

export default ArtistList;
