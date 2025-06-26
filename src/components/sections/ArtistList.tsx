import ArtistCard from '../ArtistCard';
import type { Artist } from '../../data/Artists';

type Props = {
  artists: Artist[];
};

const ArtistList = ({ artists }: Props) => {
  return (
    <div 
      className="flex flex-col gap-4 overflow-y-auto max-h-[70vh] min-h-[200px] pr-2"
      style={{ 
        scrollbarWidth: 'thin',
        scrollbarColor: '#4ade80 #1e293b'
      }}
    >
      {artists.map(artist => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
      
      {/* Mensaje para listas vacías */}
      {artists.length === 0 && (
        <p className="text-center text-neutral-400 py-8">
          No se encontraron artistas
        </p>
      )}
    </div>
  );
};

export default ArtistList;