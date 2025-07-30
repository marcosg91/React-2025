import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import { useCallback } from "react";
import { usePlayerContext } from "./context/PlayerContext";
import type { Song } from "./data/Songs";

// Páginas
import Home from "./pages/Home";
import SongDetail from "./pages/SongDetail";
import CategorySongs from "./pages/CategorySongs";
import Favoritos from "./pages/Favoritos";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

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
  } = usePlayerContext();

  const handleSongSelect = useCallback(
    (song: Song) => {
      playSong(song);
    },
    [playSong]
  );

  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background text-text-primary font-spotify">
      {/* Sidebar fija (desktop) */}
      <aside className="hidden lg:block fixed top-0 bottom-0 left-0 w-[240px] bg-black p-4 border-r border-neutral-800 z-40 overflow-y-auto">
        <Navbar />
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col lg:ml-[240px] pb-[100px] relative">
        {/* Navbar móvil */}
        <div className="lg:hidden bg-black p-4 border-b border-neutral-800 sticky top-0 z-30">
          <Navbar />
        </div>

        {/* Contenido con scroll */}
        <main className="flex-1 overflow-y-auto p-6 scrollbar-custom">
          <AnimatePresence mode="wait">
            <Routes location={location}>
              <Route
                path="/"
                element={<Home onSongSelect={handleSongSelect} />}
              />
              <Route path="/song/:id" element={<SongDetail />} />
              <Route path="/category/:id" element={<CategorySongs />} />
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>

      {/* Player inferior fijo */}
      {currentSong && (
        <Player
          currentSong={currentSong}
          isPlaying={isPlaying}
          progress={progress}
          volume={volume}
          onPlayPause={togglePlayPause}
          onSeek={handleSeek}
          onVolumeChange={setVolume}
          onStop={handleStop}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default App;
