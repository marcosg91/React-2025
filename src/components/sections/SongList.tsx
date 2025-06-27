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
          className="w-full p-4 rounded-lg 
                     bg-[#121212] 
                     text-white placeholder-white 
                     font-bold text-2xl
                     border border-white focus:outline-none focus:border-[#1DB954] 
                     transition-colors"
          aria-label="Buscar canciones"
          style={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundColor: '#121212',
            borderColor: '#ffffff',
            outline: 'none',
          }}
        />
      </div>

      {/* Línea separadora */}
      <hr className="border-t border-[#333] my-4" />

      {/* Lista de canciones */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSongs.map(song => (
          <SongCard 
            key={song.id} 
            song={song} 
            onClick={() => onSongSelect(song)} 
          />
        ))}
        
        {filteredSongs.length === 0 && (
          <div className="col-span-full text-center py-8 text-[#b3b3b3]">
            No se encontraron canciones
          </div>
        )}
      </div>
    </div>
  );
};

export default SongList;
