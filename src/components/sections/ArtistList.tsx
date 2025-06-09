import ArtistCard from '../ArtistCard';
import type { Artist } from '../../data/Artists';

type Props = {
  artists: Artist[];
};

const ArtistList = ({ artists }: Props) => {
  return (
    <div className="flex flex-col gap-4 overflow-y-auto max-h-[600px] pr-2">
      {artists.map(artist => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default ArtistList;


