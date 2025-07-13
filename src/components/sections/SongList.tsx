import { useState } from 'react';
import type { Song } from '../../data/Songs';
import SongCard from '../SongCard';

type Props = {
  songs: Song[];
  onSongSelect: (song: Song) => void;
};

const SongList = ({ songs, onSongSelect }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Campo de búsqueda */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar canciones..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 rounded-lg bg-background text-white placeholder-white font-bold text-2xl border border-white focus:outline-none focus:border-primary transition-colors"
          aria-label="Buscar canciones"
        />
      </div>

      <hr className="border-t border-[#333] my-2" />

      {/* Carrusel horizontal sin scrollbar vertical */}
      {filteredSongs.length > 0 ? (
        <div className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-custom pb-2">
          {filteredSongs.map(song => (
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
