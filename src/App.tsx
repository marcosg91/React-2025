import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import SongList from './components/sections/SongList';
import AlbumList from './components/sections/AlbumList';
import PlaylistList from './components/sections/PlaylistList';
import ArtistList from './components/sections/ArtistList';
import Player from './components/Player';
import { usePlayer } from './hooks/usePlayer';
import { songs } from './data/Songs';
import type { Song } from './data/Songs';
import { albums } from './data/Albums';
import { playlists } from './data/Playlists';
import { artists } from './data/Artists';

const App = () => {
  const {
    currentSong,
    isPlaying,
    progress,
    volume,
    playSong,
    togglePlayPause,
    handleSeek,
    setVolume,
    handleStop,
    handleClose,
  } = usePlayer();

  const [showPlayer, setShowPlayer] = useState(false);

  const handleSongSelect = useCallback((song: Song) => {
    playSong(song);
    setShowPlayer(true);
  }, [playSong]);

  const closePlayer = useCallback(() => {
    handleClose();
    setShowPlayer(false);
  }, [handleClose]);

  return (
    <div className="flex min-h-screen bg-[#121212] text-white pb-20">
      {/* Sidebar (Desktop) */}
      <aside className="hidden lg:block lg:w-64 bg-black p-4 border-r border-neutral-800">
        <Navbar />
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        {/* Navbar móvil */}
        <div className="lg:hidden bg-black p-4 border-b border-neutral-800">
          <Navbar />
        </div>

        <main className="p-6 flex-1 overflow-y-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Columna principal */}
            <div className="flex-1 space-y-8">
              <Container title="Canciones">
                <SongList songs={songs} onSongSelect={handleSongSelect} />
              </Container>

              <Container title="Álbumes">
                <AlbumList albums={albums} />
              </Container>

              <Container title="Playlists">
                <PlaylistList playlists={playlists} />
              </Container>
            </div>

            {/* Columna derecha: Artistas */}
            <div className="lg:w-[320px] space-y-8">
              <Container title="Artistas">
                <ArtistList artists={artists} />
              </Container>
            </div>
          </div>
        </main>
      </div>

      {/* Player fijo abajo */}
      {showPlayer && currentSong && (
        <Player
          currentSong={currentSong}
          isPlaying={isPlaying}
          progress={progress}
          volume={volume}
          onPlayPause={togglePlayPause}
          onSeek={handleSeek}
          onVolumeChange={setVolume}
          onStop={handleStop}
          onClose={closePlayer}
        />
      )}
    </div>
  );
};

export default App;
