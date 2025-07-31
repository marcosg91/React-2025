import { useState } from 'react';
import { useCreateSong } from '../hooks/useCreateSong';
import { useNavigate } from 'react-router-dom';

export default function NewSong() {
  const [title, setTitle] = useState('');
  const [album, setAlbum] = useState('');
  const [artist, setArtist] = useState('');
  const [year, setYear] = useState(''); // string para input controlado
  const [showSuccess, setShowSuccess] = useState(false);
  const mutation = useCreateSong();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mutation.isPending) return;

    const numericYear = year ? Number(year) : undefined;

    mutation.mutate(
      { title, album, artist, year: numericYear },
      {
        onSuccess: () => {
          setShowSuccess(true);
          setTimeout(() => navigate('/'), 1500);
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 space-y-4 bg-neutral-900 p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white mb-4">Crear nueva canción</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título de la canción"
        required
        className="w-full p-2 rounded bg-neutral-800 text-white placeholder-[#aaa]"
      />

      <input
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
        placeholder="Nombre del álbum"
        required
        className="w-full p-2 rounded bg-neutral-800 text-white placeholder-[#aaa]"
      />

      <input
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Nombre del artista"
        required
        className="w-full p-2 rounded bg-neutral-800 text-white placeholder-[#aaa]"
      />

      <input
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Año (opcional)"
        type="number"
        min="1900"
        max={new Date().getFullYear()}
        className="w-full p-2 rounded bg-neutral-800 text-white placeholder-[#aaa]"
      />

      <button
        type="submit"
        disabled={mutation.isPending}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-80 transition"
      >
        {mutation.isPending ? 'Creando...' : 'Crear canción'}
      </button>

      {mutation.isError && (
        <p className="text-red-500 text-sm">
          ❌ Error: {mutation.error?.message}
        </p>
      )}

      {showSuccess && (
        <p className="text-green-400 text-sm">
          ✅ Canción creada exitosamente. Redirigiendo...
        </p>
      )}
    </form>
  );
}
