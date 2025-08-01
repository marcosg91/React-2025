import { useParams, Navigate, Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../hooks/useFavorites";
import { usePlayerContext } from "../context/PlayerContext";
import { useSong } from "../hooks/useSong.ts";
import Loading from "../components/ui/Loading";
import ErrorMessage from "../components/ui/ErrorMessage";
import AnimatedPage from "../components/AnimatedPage";

export default function SongDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: song, isLoading, isError, error } = useSong(id ?? '');

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { playSong } = usePlayerContext();

  if (isLoading) return <Loading />;

  if (isError && error?.message === 'Canción no encontrada') {
    return <Navigate to="/not-found" replace />;
  }

  if (isError) {
    return <ErrorMessage message={error.message ?? 'Error al cargar la canción'} />;
  }

  if (!song) {
    return <Navigate to="/not-found" replace />;
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
        <img
          src={song.image}
          alt={song.title}
          className="w-60 h-60 rounded-lg object-cover shadow-md mx-auto"
        />
        <h1 className="mt-4 text-2xl font-bold text-white">{song.title}</h1>
        <p className="text-lg text-gray-400">Artista: {song.artist}</p>
        <p className="text-sm text-gray-500">Duración: {song.duration}</p>

        <button
          onClick={() => playSong(song)}
          className="mt-4 w-full bg-primary hover:bg-primary-dark text-black font-semibold px-4 py-2 rounded-full transition-all"
        >
          ▶ Reproducir
        </button>

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
