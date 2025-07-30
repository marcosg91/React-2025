import { FaHome, FaSearch, FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

const Navbar = () => {
  const { favorites } = useFavorites(); 
  const linkStyle =
    "flex items-center gap-2 transition-colors hover:text-primary";
  const activeStyle = "text-primary font-bold";

  return (
    <nav
      className="bg-black/70 backdrop-blur-lg px-8 py-4 flex items-center justify-between border-b border-neutral-800 sticky top-0 z-50 shadow-md font-spotify"
      aria-label="Navegación principal"
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide text-white flex items-center gap-2">
        <span role="img" aria-label="Música">
          🎵
        </span>
        Mini Spotify
      </h1>

      {/* Menú */}
      <ul className="flex items-center space-x-14 list-none text-base font-medium text-white">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            <FaHome size={18} />
            <span>Inicio</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            <FaSearch size={18} />
            <span>Buscar</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favoritos"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            <FaHeart size={18} className="text-red-500" />
            <span>
              Favoritos{" "}
              {favorites.length > 0 && (
                <span className="text-sm text-primary">
                  ({favorites.length})
                </span>
              )}
            </span>
          </NavLink>
        </li>
      </ul>

      {/* Botón login */}
      <button className="bg-primary hover:bg-primary-dark text-black font-semibold px-5 py-2 rounded-full text-sm transition-all shadow">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
