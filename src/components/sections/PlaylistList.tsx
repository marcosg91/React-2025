import PlaylistCard from '../PlaylistCard';
import type { Playlist } from '../../data/Playlists';

type Props = {
  playlists: Playlist[];
};

const PlaylistList = ({ playlists }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {playlists.map(playlist => (
        <PlaylistCard key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default PlaylistList;