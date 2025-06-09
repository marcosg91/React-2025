// Importar componente para dar el efecto Hover.
import HoverCard from './HoverCard';

// Importar componente para el icono play.
import PlayIcon from './icons/PlayIcon';

// Importar el tipo Album para definir correctamente las props del componente.
import type { Album } from '../data/Albums';

// Definir el tipo de las props que recibe el componente AlbumCard.
type Props = {
  album: Album; // El componente espera un objeto album con datos como cover, title y year.
};

// Componente principal que representa una tarjeta de álbum.
const AlbumCard = ({ album }: Props) => {
  return (
    <a
      href="#"
      className="relative block w-[80px] p-2 bg-transparent no-underline cursor-pointer"
    >
      {/* HoverCard muestra la carátula del álbum con un ícono de reproducción encima */}
      <HoverCard image={album.cover}>
        <PlayIcon />
      </HoverCard>

      {/* Título del álbum, centrado, con texto truncado si es largo */}
      <h3
        className="font-semibold text-[0.75rem] text-center truncate w-[80px] mt-2 mb-0"
        style={{ color: 'white' }}
      >
        {album.title}
      </h3>

      {/* Año del álbum, también centrado y truncado */}
      <p
        className="text-[0.65rem] text-center truncate w-[80px] mt-0.5 mb-0"
        style={{ color: 'white' }}
      >
        {album.year}
      </p>
    </a>
  );
};


export default AlbumCard;
