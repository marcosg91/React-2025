import { FaHome, FaSearch, FaHeart } from "react-icons/fa";
import { useMemo } from 'react';

const Navbar = () => {
  // Memoizar la animación para prevenir recálculos
  const glowAnimation = useMemo(() => `
    @keyframes subtle-glow {
      0%, 100% { text-shadow: 0 0 5px #34d399; }
      50% { text-shadow: 0 0 10px #10b981; }
    }
  `, []);

  return (
    <>
      <style>{glowAnimation}</style>
      
      <nav 
        className="bg-gray-800 text-white p-4 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        <h1
          style={{ animation: 'subtle-glow 2.5s ease-in-out infinite' }}
          className="font-bold text-lg"
          aria-label="Mini Spotify"
        >
          Mini Spotify
        </h1>

        <ul className="flex text-sm" role="menubar">
          <li role="none">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-green-400 mr-10"
              role="menuitem"
              aria-label="Ir a Inicio"
            >
              <FaHome size={18} />
              <span>Inicio</span>
            </a>
          </li>
          
          <li role="none">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-green-400 mr-10"
              role="menuitem"
              aria-label="Buscar contenido"
            >
              <FaSearch size={18} />
              <span>Buscar</span>
            </a>
          </li>
          
          <li role="none">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-green-400"
              role="menuitem"
              aria-label="Ver biblioteca"
            >
              <FaHeart size={18} />
              <span>Biblioteca</span>
            </a>
          </li>
        </ul>

        <button 
          className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded text-sm font-semibold transition-colors"
          aria-label="Iniciar sesión"
        >
          Login
        </button>
      </nav>
    </>
  );
};

export default Navbar;