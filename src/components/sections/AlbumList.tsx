import AlbumCard from '../AlbumCard';
import type { Album } from '../../data/Albums';

type Props = {
  albums: Album[];
};

const AlbumList = ({ albums }: Props) => {
  const duplicatedAlbums = [...albums, ...albums]; 

  return (
    <div className="overflow-hidden">
      <div className="flex gap-4 w-max animate-scroll">
        {duplicatedAlbums.map((album, idx) => (
          <div key={`${album.id}-${idx}`} className="w-48 flex-shrink-0">
            <AlbumCard album={album} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
