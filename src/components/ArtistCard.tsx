// Importar el componente HoverCard
import HoverCard from './HoverCard';

// Importar componente para el icono play.
import PlayIcon from './icons/PlayIcon';

// Importar el tipo Artist para definir correctamente las props
import type { Artist } from '../data/Artists';

// Definir el tipo de las props que recibe el componente ArtistCard
type Props = {
  artist: Artist; // artist es un objeto que contiene datos como photo, name y listeners
};

// Componente principal que representa una tarjeta de artista
const ArtistCard = ({ artist }: Props) => {
  return (
    <a
      href="#"
      style={{
        display: 'block',
        width: '160px',
        padding: '12px',
        backgroundColor: 'transparent',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      {/* HoverCard muestra la imagen del artista con un ícono de reproducción encima */}
      <HoverCard
        image={artist.photo}
        style={{
          borderRadius: '50%', // Hace que la imagen sea redonda
          width: '160px',
          height: '160px',
          margin: '0 auto',
        }}
      >
        <PlayIcon /> {/* Ícono de reproducción dentro del hover */}
      </HoverCard>

      {/* Nombre del artista, centrado, con truncado si es muy largo */}
      <h3
        style={{
          color: 'white',
          fontWeight: 600,
          fontSize: '1rem',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '160px',
          marginTop: '12px',
          marginBottom: '6px',
        }}
      >
        {artist.name}
      </h3>

      {/* Cantidad de oyentes, formateada con separador de miles */}
      <p
        style={{
          color: '#ccc',
          fontSize: '0.85rem',
          textAlign: 'center',
          margin: 0,
        }}
      >
        {artist.listeners.toLocaleString()} oyentes
      </p>
    </a>
  );
};

export default ArtistCard;
