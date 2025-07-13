// Importar el componente HoverCard
import HoverCard from './HoverCard';

// Define el tipo de objeto Playlist, con propiedades necesarias
type Playlist = {
  id: string;
  title: string;
  cover: string;       // URL de la imagen de portada
  description: string; 
};

// Definir los props que recibe el componente
type Props = {
  playlist: Playlist;
};

// Componente funcional PlaylistCard
const PlaylistCard = ({ playlist }: Props) => {
  return (
    <HoverCard
      image={playlist.cover} // Imagen de fondo del hover
      style={{
        borderRadius: '8px',
        width: '100%',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        textDecoration: 'none', 
      }}
    >
      {/* Imagen de la playlist */}
      <img
        src={playlist.cover}
        alt={playlist.title}
        style={{
          width: '80px',
          height: '80px',
          objectFit: 'cover',   
          borderRadius: '8px',
          marginRight: '12px',  
          flexShrink: 0,        
        }}
      />

      {/* Contenedor del texto (título y descripción) */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Título de la playlist */}
        <h3
          style={{
            color: 'white',
            fontWeight: 600,
            fontSize: '0.9rem',
            margin: 0,
            marginBottom: 4,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: 'calc(100% - 80px - 12px)', 
          }}
        >
          {playlist.title}
        </h3>

        {/* Descripción */}
        <p
          style={{
            color: '#d1d5db',
            fontSize: '0.75rem',
            margin: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: 'calc(100% - 80px - 12px)',
          }}
        >
          {playlist.description}
        </p>
      </div>
    </HoverCard>
  );
};

export default PlaylistCard; 