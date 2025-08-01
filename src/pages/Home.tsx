import { useSongs } from "../hooks/useSongs";
import { useAlbums } from "../hooks/useAlbum";
import type { Song } from "../types/music";
import Container from "../components/Container";
import SongList from "../components/sections/SongList";
import AlbumList from "../components/sections/AlbumList";
import PlaylistList from "../components/sections/PlaylistList";
import ArtistList from "../components/sections/ArtistList";
import AnimatedPage from "../components/AnimatedPage";
import { playlists } from "../data/Playlists";
import { artists } from "../data/Artists";

interface HomeProps {
  onSongSelect: (song: Song) => void;
}

export default function Home({ onSongSelect }: HomeProps) {
  const { data: songs, isLoading: loadingSongs, isError: errorSongs, error } = useSongs();
  const { data: albums, isLoading: loadingAlbums, isError: errorAlbums } = useAlbums();

  return (
    <AnimatedPage>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-8">
          <Container title="Canciones">
            {loadingSongs ? (
              <p className="text-white">Cargando canciones…</p>
            ) : errorSongs ? (
              <p className="text-red-500">Error: {error?.message || 'Error desconocido'}</p>
            ) : (
              <SongList songs={songs ?? []} onSongSelect={onSongSelect} />
            )}
          </Container>

          <Container title="Álbumes">
            {loadingAlbums ? (
              <p className="text-white">Cargando álbumes…</p>
            ) : errorAlbums ? (
              <p className="text-red-500">Error al cargar los álbumes</p>
            ) : (
              <AlbumList albums={albums ?? []} />
            )}
          </Container>

          <Container title="Playlists">
            <PlaylistList playlists={playlists} />
          </Container>
        </div>

        <div className="lg:w-[320px] space-y-8">
          <Container title="Artistas">
            <ArtistList artists={artists} />
          </Container>
        </div>
      </div>
    </AnimatedPage>
  );
}
