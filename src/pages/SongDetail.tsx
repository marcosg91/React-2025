import { useParams, Link } from "react-router-dom";
import { songs } from "../data/Songs";
import type { Song } from "../data/Songs";
import { useFavorites } from "../hooks/useFavorites";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import AnimatedPage from "../components/AnimatedPage";

export default function SongDetail() {
  const { id } = useParams<{ id: string }>();

  // Buscar la canción por ID
  const song: Song | undefined = songs.find((s) => s.id === id);

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (!song) {
    return (
      <AnimatedPage>
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold text-white">Canción no encontrada</h1>
          <Link
            to="/"
            className="text-blue-500 underline mt-4 inline-block"
          >
            Volver al inicio
          </Link>
        </div>
      </AnimatedPage>
    );
  }

  const handleFavoriteToggle = () => {
    if (isFavorite(song.id)) {
      removeFavorite(song.id);
    } else {
      addFavorite(song);
    }
  };

  return (
    <AnimatedPage>
      <div className="p-6 max-w-md mx-auto bg-black rounded-lg shadow-lg text-center">
        {/* Imagen de la canción */}
        <img
          src={song.image}
          alt={song.title}
          className="w-60 h-60 rounded-lg object-cover shadow-md mx-auto"
        />

        {/* Información de la canción */}
        <h1 className="mt-4 text-2xl font-bold text-white">{song.title}</h1>
        <p className="text-lg text-gray-400">Artista: {song.artist}</p>
        <p className="text-sm text-gray-500">Duración: {song.duration}</p>

        {/* Audio player */}
        <audio
          controls
          src={song.audioUrl}
          className="mt-4 w-full"
        >
          Tu navegador no soporta el elemento de audio.
        </audio>

        {/* Botón Favorito */}
        <button
          onClick={handleFavoriteToggle}
          className="mt-4 flex items-center gap-2 mx-auto bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-full transition-all"
        >
          {isFavorite(song.id) ? (
            <>
              <FaHeart className="text-red-500" /> Quitar de favoritos
            </>
          ) : (
            <>
              <FaRegHeart /> Agregar a favoritos
            </>
          )}
        </button>

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
