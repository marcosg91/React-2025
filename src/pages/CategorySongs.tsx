import { useState } from "react";
import { songs } from "../data/Songs";
import type { Song } from "../data/Songs";
import SongCard from "../components/SongCard";
import { useNavigate, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import AnimatedPage from "../components/AnimatedPage";

export default function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredSongs: Song[] = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase())
  );

  const handleSuggestionClick = (songId: string) => {
    navigate(`/song/${songId}`);
  };

  return (
    <AnimatedPage>
      <div className="p-6 max-w-2xl mx-auto relative">
        <h1 className="text-2xl font-bold text-white mb-4">Buscar Canciones</h1>

        {/* Campo de búsqueda con ícono */}
        <div className="relative mb-6">
          {/* Ícono 🔍 */}
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Escribe el título o artista..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 p-4 rounded-lg bg-background text-white placeholder-gray-400 border border-neutral-700 focus:outline-none focus:border-primary transition-all"
          />

          {/* Dropdown de sugerencias */}
          {query && filteredSongs.length > 0 && (
            <ul className="absolute left-0 right-0 mt-1 bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
              {filteredSongs.slice(0, 6).map((song) => (
                <li
                  key={song.id}
                  className="px-4 py-2 flex justify-between items-center hover:bg-neutral-800 cursor-pointer"
                  onClick={() => handleSuggestionClick(song.id)}
                >
                  <div>
                    <p className="text-white text-sm font-semibold">
                      {song.title}
                    </p>
                    <p className="text-gray-400 text-xs">{song.artist}</p>
                  </div>
                  <img
                    src={song.image}
                    alt={song.title}
                    className="w-10 h-10 rounded object-cover"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Resultados completos */}
        {filteredSongs.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {filteredSongs.map((song) => (
              <SongCard
                key={song.id}
                song={song}
                onClick={() => navigate(`/song/${song.id}`)}
              />
            ))}
          </div>
        ) : (
          query && <p className="text-gray-400">No se encontraron canciones.</p>
        )}

        {/* Botón para volver */}
        <div className="mt-6">
          <Link
            to="/"
            className="bg-primary hover:bg-primary-dark text-black font-semibold px-5 py-2 rounded-full text-sm transition-all"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </AnimatedPage>
  );
}
