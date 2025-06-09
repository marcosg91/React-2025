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
    <div>
      <Navbar />

      <main className="p-6">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Columna principal */}
          <div className="flex-1 space-y-8">
            <Container title="Canciones">
              <SongList songs={songs} />
            </Container>

            <Container title="Álbumes">
              <AlbumList albums={albums} />
            </Container>

            <Container title="Playlists">
              <PlaylistList playlists={playlists} />
            </Container>
          </div>

          {/* Columna derecha: Artistas */}
          <div className="mt-10 lg:mt-0 lg:w-[360px] pr-4">
            <Container title="Artistas">
              <ArtistList artists={artists} />
            </Container>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;
