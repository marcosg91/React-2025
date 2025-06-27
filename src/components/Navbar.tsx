import { FaHome, FaSearch, FaHeart } from "react-icons/fa";
import { useMemo } from 'react';

const Navbar = () => {
  const glowAnimation = useMemo(() => `
    @keyframes subtle-glow {
      0%, 100% { text-shadow: 0 0 5px #1DB954; }
      50% { text-shadow: 0 0 10px #1ED760; }
    }
  `, []);

  return (
    <>
      <style>{glowAnimation}</style>

      <nav 
        className="bg-[#121212] px-6 py-4 flex items-center justify-between border-b border-[#2a2a2a]"
        aria-label="Navegación principal"
      >
        <h1
          style={{ animation: 'subtle-glow 2.5s ease-in-out infinite' }}
          className="text-2xl font-bold tracking-wide text-white"
          aria-label="Mini Spotify"
        >
          Mini Spotify
        </h1>

        <ul className="flex items-center space-x-8 list-none text-base font-medium text-white">
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-white no-underline hover:text-[#1DB954] transition-colors"
              aria-label="Ir a Inicio"
            >
              <FaHome size={20} />
              <span>Inicio</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-white no-underline hover:text-[#1DB954] transition-colors"
              aria-label="Buscar contenido"
            >
              <FaSearch size={20} />
              <span>Buscar</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-white no-underline hover:text-[#1DB954] transition-colors"
              aria-label="Ver biblioteca"
            >
              <FaHeart size={20} />
              <span>Biblioteca</span>
            </a>
          </li>
        </ul>

        <button 
          className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold px-5 py-2 rounded-lg text-sm transition-all"
          aria-label="Iniciar sesión"
        >
          Login
        </button>
      </nav>
    </>
  );
};

export default Navbar;
