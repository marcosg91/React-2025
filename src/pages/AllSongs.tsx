import { useSongs } from '../hooks/useSongs';
import Loading from '../components/ui/Loading';
import ErrorMessage from '../components/ui/ErrorMessage';
import NoData from '../components/ui/NoData';
import SongList from '../components/sections/SongList';
import { usePlayerContext } from '../context/PlayerContext';

const AllSongs = () => {
  const { data: songs, isLoading, isError, error } = useSongs();
  const { playSong } = usePlayerContext();

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error?.message ?? 'Error al cargar canciones'} />;
  if (!songs || songs.length === 0) return <NoData message="No hay canciones disponibles" />;

  return (
    <section className="p-4">
      <h1 className="text-white text-3xl font-bold mb-4">Todas las canciones</h1>
      <SongList songs={songs} onSongSelect={playSong} />
    </section>
  );
};

export default AllSongs;
