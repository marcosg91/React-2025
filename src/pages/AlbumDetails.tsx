import { useParams, Navigate } from 'react-router-dom';
import { useAlbum } from '../hooks/useAlbum';
import Loading from '../components/ui/Loading';
import ErrorMessage from '../components/ui/ErrorMessage';
import SongList from '../components/sections/SongList';
import { usePlayerContext } from '../context/PlayerContext';

const AlbumDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { playSong } = usePlayerContext();

  const {
    data: album,
    isLoading,
    isError,
    error,
  } = useAlbum(id ?? '');

  // 🔄 Mientras carga
  if (isLoading) return <Loading />;

  // ❌ Si hay error y el mensaje es específico
  if (isError && error?.message === 'Álbum no encontrado') {
    return <Navigate to="/not-found" replace />;
  }

  // ❌ Otros errores no relacionados con álbum inexistente
  if (isError) {
    return <ErrorMessage message={error.message ?? 'Error al cargar el álbum'} />;
  }

  // ✅ Verificación adicional de seguridad para evitar acceso a `undefined`
  if (!album) {
    return <Navigate to="/not-found" replace />;
  }

  // ✅ Renderizado del álbum si todo está bien
  return (
    <section className="p-4">
      <h1 className="text-white text-3xl font-bold mb-2">{album.title}</h1>
      <p className="text-[#aaa] mb-6">
        {album.artist} • {album.year}
      </p>
      <SongList songs={album.songs} onSongSelect={playSong} />
    </section>
  );
};

export default AlbumDetails;
