import { useState, type FC, type ChangeEvent } from 'react';
import type { Song } from '../../types/music';
import SongCard from '../SongCard';

type Props = {
  songs: Song[];
  onSongSelect: (song: Song) => void;
};

const SongList: FC<Props> = ({ songs, onSongSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredSongs = songs.filter(({ title, artist }) =>
    `${title} ${artist}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar canciones..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-4 rounded-lg bg-background text-white placeholder-white font-bold text-2xl border border-white focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <hr className="border-t border-[#333] my-2" />

      {filteredSongs.length > 0 ? (
        <div className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-custom pb-2">
          {filteredSongs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              onClick={() => onSongSelect(song)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-text-secondary">
          No se encontraron canciones
        </div>
      )}
    </div>
  );
};

export default SongList;
