import { useParams, useNavigate } from "react-router-dom";
import { songs } from "../data/Songs";

export default function CategorySongs() {
  const { id } = useParams();
  const navigate = useNavigate();

  const artistName = decodeURIComponent(id || "");
  const filteredSongs = songs.filter((song) => song.artist === artistName);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-4">
        Canciones de {artistName}
      </h1>

      {filteredSongs.length > 0 ? (
        <ul className="space-y-3">
          {filteredSongs.map((song) => (
            <li
              key={song.id}
              className="bg-neutral-800 p-3 rounded-lg flex items-center justify-between"
            >
              {/* Imagen + info de la canción */}
              <div className="flex items-center gap-3">
                <img
                  src={song.image}
                  alt={song.title}
                  className="w-14 h-14 rounded object-cover"
                />
                <div>
                  <p className="text-white font-semibold">{song.title}</p>
                  <p className="text-gray-400 text-sm">{song.duration}</p>
                </div>
              </div>

              {/* Botón para reproducir */}
              <button
                className="text-primary hover:underline"
                onClick={() => navigate(`/song/${song.id}`)}
              >
                ▶ Escuchar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No hay canciones de este artista.</p>
      )}
    </div>
  );
}
