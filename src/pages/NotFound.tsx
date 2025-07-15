import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

export default function NotFound() {
  return (
    <AnimatedPage>
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold text-white">404 - Página no encontrada</h1>
        <p className="mt-2 text-gray-400">La ruta que buscas no existe.</p>
        <Link
          to="/"
          className="bg-primary hover:bg-primary-dark text-black font-semibold px-5 py-2 rounded-full text-sm transition-all inline-block mt-4"
        >
          ← Volver al inicio
        </Link>
      </div>
    </AnimatedPage>
  );
}
