import SongCard from '../SongCard';
import type { Song } from '../../data/Songs';

type Props = {
  songs: Song[];
};

const SongList = ({ songs }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {songs.map(song => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SongList;