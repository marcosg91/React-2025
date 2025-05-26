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
        <h2 className="text-2xl font-bold mb-4">Canciones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Álbumes</h2>
<div className="flex gap-4 overflow-x-auto mb-8 animate-scroll">
  {albums.map((album) => (
    <div className="flex-shrink-0 w-48">
      <AlbumCard key={album.id} album={album} />
    </div>
  ))}
</div>

        <h2 className="text-2xl font-bold mb-4">Playlists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Artistas</h2>
        <div style={{ display: 'flex', overflowX: 'auto', padding: '8px' }}>
         {artists.map((artist) => (
        <div style={{ flex: '0 0 auto', marginRight: '8px' }}>
          <ArtistCard key={artist.id} artist={artist} />
        </div>
          ))}

    </div>

      </Container>
    </div>
  );
};

export default App;
