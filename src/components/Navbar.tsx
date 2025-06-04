// Importar íconos desde la librería react-icons (estilo Font Awesome)
import { FaHome, FaSearch, FaHeart } from "react-icons/fa";

// Definir una animación CSS usando keyframes, para un efecto de "brillo" en el título
const glowAnimation = `
  @keyframes glow {
    0%, 100% {
      text-shadow: 0 0 5px #34d399, 0 0 10px #34d399; 
      color: #a7f3d0; 
    }
    50% {
      text-shadow: 0 0 20px #10b981, 0 0 30px #10b981, 0 0 40px #10b981; 
      color: #d1fae5; 
    }
  }
`;

// Componente funcional Navbar
const Navbar = () => {
  return (
    <>
      {/* Inserta la animación glow como estilo interno en el componente */}
      <style>{glowAnimation}</style>

      {/* Barra de navegación principal */}
      <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <h1
          style={{ animation: 'glow 2.5s ease-in-out infinite' }} // Aplica la animación
          className="font-bold text-lg"
        >
          Mini Spotify&nbsp; 
        </h1>

        {/* Menú de navegación */}
        <ul className="flex text-sm" role="menubar" aria-label="Primary menu">
          {/* Ítem: Inicio */}
          <li
            className="flex items-center gap-2 cursor-pointer hover:text-green-400 mr-10"
            role="menuitem"
            tabIndex={0} // Hace el elemento navegable con teclado
          >
            <FaHome size={18} /> {/* Ícono de casa */}
            <span>Inicio</span>
          </li>

          {/* Ítem: Buscar */}
          <li
            className="flex items-center gap-2 cursor-pointer hover:text-green-400 mr-10"
            role="menuitem"
            tabIndex={0}
          >
            <FaSearch size={18} /> {/* Ícono de búsqueda */}
            <span>Buscar</span>
          </li>

          {/* Ítem: Biblioteca */}
          <li
            className="flex items-center gap-2 cursor-pointer hover:text-green-400"
            role="menuitem"
            tabIndex={0}
          >
            <FaHeart size={18} /> {/* Ícono de corazón */}
            <span>Biblioteca</span>
          </li>
        </ul>

        {/* Botón de Login */}
        <button className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded text-sm font-semibold">
          Login
        </button>
      </nav>
    </>
  );
};

export default Navbar; 

