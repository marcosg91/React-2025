import Navbar from './components/Navbar';
import Container from './components/Container';

import SongList from './components/sections/SongList';
import AlbumList from './components/sections/AlbumList';
import PlaylistList from './components/sections/PlaylistList';
import ArtistList from './components/sections/ArtistList';

import { songs } from './data/Songs';
import { albums } from './data/Albums';
import { playlists } from './data/Playlists';
import { artists } from './data/Artists';

const App = () => {
  return (
    <div 
      className="flex min-h-screen bg-neutral-900 text-white"
      role="application"
      aria-label="Aplicación de música Mini Spotify"
    >
      {/* Navbar lateral para pantallas grandes */}
      <aside 
        className="hidden lg:block lg:w-64 bg-neutral-950 p-4 border-r border-neutral-800"
        aria-label="Navegación principal"
      >
        <Navbar />
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        {/* Navbar superior para pantallas chicas */}
        <div 
          className="lg:hidden bg-neutral-950 p-4 border-b border-neutral-800"
          aria-label="Navegación móvil"
        >
          <Navbar />
        </div>

        <main 
          className="p-6 flex-1 overflow-y-auto"
          aria-label="Contenido principal"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Columna principal */}
            <div className="flex-1 space-y-8">
              <Container title="Canciones" aria-label="Lista de canciones">
                <SongList songs={songs} />
              </Container>

              <Container title="Álbumes" aria-label="Lista de álbumes">
                <AlbumList albums={albums} />
              </Container>

              <Container title="Playlists" aria-label="Lista de playlists">
                <PlaylistList playlists={playlists} />
              </Container>
            </div>

            {/* Columna derecha: Artistas */}
            <div 
              className="w-full lg:w-[320px] xl:w-[380px] space-y-8"
              aria-label="Lista de artistas"
            >
              <Container title="Artistas">
                <ArtistList artists={artists} />
              </Container>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;