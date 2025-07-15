import { Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";
import SongCard from "../components/SongCard";
import AnimatedPage from "../components/AnimatedPage";

export default function Favoritos() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <AnimatedPage>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Tus Favoritos</h1>

        {favorites.length > 0 ? (
          <div className="flex gap-4 flex-wrap">
            {favorites.map((song) => (
              <SongCard
                key={song.id}
                song={song}
                onClick={() => navigate(`/song/${song.id}`)}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400">Aún no tienes canciones favoritas.</p>
        )}

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
