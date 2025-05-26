import HoverCard from './HoverCard';

type Playlist = {
  id: string;
  title: string;
  cover: string;
  description: string;
};

type Props = {
  playlist: Playlist;
};

const PlaylistCard = ({ playlist }: Props) => {
  return (
    <HoverCard
      image={playlist.cover}
      style={{
        borderRadius: '8px',
        width: '100%',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
      // si HoverCard tiene un "as" para cambiar etiqueta a <a>, mejor, sino lo podés envolver luego
    >
      {/* Dentro va todo el contenido, no solo la imagen */}

      {/* Imagen */}
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

      {/* Texto */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
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
            maxWidth: 'calc(100% - 80px - 12px)', // para evitar overflow
          }}
        >
          {playlist.title}
        </h3>
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

