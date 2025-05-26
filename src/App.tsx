import Navbar from './components/Navbar';
import Container from './components/Container';
import SongCard from './components/SongCard';
import AlbumCard from './components/AlbumCard';
import PlaylistCard from './components/PlaylistCard';
import ArtistCard from './components/ArtistCard';
import { songs } from './data/Songs';
import { albums } from './data/Albums';
import { playlists } from './data/Playlists';
import { artists } from './data/Artists';

const App = () => {
  return (
    <div>
      <Navbar />

      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Columna principal */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Canciones</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {songs.map((song) => (
                <SongCard key={song.id} song={song} />
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">Álbumes</h2>
            <div className="flex gap-4 overflow-x-auto mb-8 animate-scroll">
              {albums.map((album) => (
                <div key={album.id} className="flex-shrink-0 w-48">
                  <AlbumCard album={album} />
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">Playlists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {playlists.map((playlist) => (
                <PlaylistCard key={playlist.id} playlist={playlist} />
              ))}
            </div>
          </div>

          {/* Columna lateral para artistas en fila horizontal */}
          <div className="w-full lg:w-1/4">
            <h2 className="text-2xl font-bold mb-4">Artistas</h2>
            <div className="flex gap-4 overflow-x-auto">
              {artists.map((artist) => (
                <div key={artist.id} className="flex-shrink-0">
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
