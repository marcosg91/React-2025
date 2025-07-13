import { FaHome, FaSearch, FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav 
      className="bg-black/70 backdrop-blur-lg px-8 py-4 flex items-center justify-between border-b border-neutral-800 sticky top-0 z-50 shadow-md font-spotify"
      aria-label="Navegación principal"
    >
      {/* Título con ícono musical 🎵 */}
      <h1 className="text-2xl font-bold tracking-wide text-white flex items-center gap-2">
        <span role="img" aria-label="Música">🎵</span> Mini Spotify
      </h1>

      {/* Menú de navegación */}
      <ul className="flex items-center space-x-14 list-none text-base font-medium text-white">
        <li>
          <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
            <FaHome size={18} />
            <span>Inicio</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
            <FaSearch size={18} />
            <span>Buscar</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
            <FaHeart size={18} />
            <span>Biblioteca</span>
          </a>
        </li>
      </ul>

      {/* Botón login */}
      <button
        className="bg-primary hover:bg-primary-dark text-black font-semibold px-5 py-2 rounded-full text-sm transition-all shadow"
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;
