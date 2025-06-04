// Importar los componentes necesarios para la interfaz
import Navbar from './components/Navbar';
import Container from './components/Container';
import SongCard from './components/SongCard';
import AlbumCard from './components/AlbumCard';
import PlaylistCard from './components/PlaylistCard';
import ArtistCard from './components/ArtistCard';

// Importar los datos para cada tipo de contenido
import { songs } from './data/Songs';
import { albums } from './data/Albums';
import { playlists } from './data/Playlists';
import { artists } from './data/Artists';

const App = () => {
  return (
    <div>
      {/* Barra de navegación superior */}
      <Navbar />

      {/* Contenedor general con padding y centrado */}
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Columna principal */}
          <div className="flex-1">
            {/* Sección de canciones */}
            <h2 className="text-2xl font-bold mb-4">Canciones</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {songs.map((song) => (
                <SongCard key={song.id} song={song} />
              ))}
            </div>

            {/* Sección de álbumes */}
            <h2 className="text-2xl font-bold mb-4">Álbumes</h2>
            <div className="flex gap-4 overflow-x-auto mb-8 animate-scroll">
              {albums.map((album) => (
                <div key={album.id} className="flex-shrink-0 w-48">
                  <AlbumCard album={album} />
                </div>
              ))}
            </div>

            {/* Sección de playlists */}
            <h2 className="text-2xl font-bold mb-4">Playlists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {playlists.map((playlist) => (
                <PlaylistCard key={playlist.id} playlist={playlist} />
              ))}
            </div>
          </div>

          {/* Columna lateral derecha: artistas */}
          <div className="w-full lg:w-[940px]"> {/* Ancho fijo para 5 artistas visibles */}
            <h2 className="text-2xl font-bold mb-4">Artistas</h2>
            <div
              className="flex gap-6 overflow-x-auto"
              style={{ maxWidth: '940px', whiteSpace: 'nowrap' }}
            >
              {artists.map((artist) => (
                <div
                  key={artist.id}
                  className="inline-block flex-shrink-0"
                  style={{ width: '188px' }}
                >
                  <ArtistCard artist={artist} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;

