import { FaHome, FaSearch, FaHeart } from "react-icons/fa";

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

const Navbar = () => {
  return (
    <>
      <style>{glowAnimation}</style>
      <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <h1
          style={{ animation: 'glow 2.5s ease-in-out infinite' }}
          className="font-bold text-lg"
        >
          Mini Spotify&nbsp;
        </h1>

        <ul className="flex text-sm" role="menubar" aria-label="Primary menu">
          <li
            className="flex items-center gap-2 cursor-pointer hover:text-green-400 mr-10"
            role="menuitem"
            tabIndex={0}
          >
            <FaHome size={18} />
            <span>Inicio</span>
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer hover:text-green-400 mr-10"
            role="menuitem"
            tabIndex={0}
          >
            <FaSearch size={18} />
            <span>Buscar</span>
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer hover:text-green-400"
            role="menuitem"
            tabIndex={0}
          >
            <FaHeart size={18} />
            <span>Biblioteca</span>
          </li>
        </ul>

        <button className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded text-sm font-semibold">
          Login
        </button>
      </nav>
    </>
  );
};

export default Navbar;

