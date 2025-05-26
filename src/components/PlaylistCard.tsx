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
    <a
      href="#"
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#1f2937', // gris oscuro
        borderRadius: '8px',
        padding: '8px',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
        width: '100%',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = '#374151') // gris más claro al hover
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = '#1f2937')
      }
    >
      <img
        src={playlist.cover}
        alt={playlist.title}
        style={{
          width: '80px',
          height: '80px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginRight: '12px',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            color: 'white',
            fontWeight: 600,
            fontSize: '0.9rem',
            margin: 0,
            marginBottom: '4px',
          }}
        >
          {playlist.title}
        </h3>
        <p
          style={{
            color: '#d1d5db', // gris claro
            fontSize: '0.75rem',
            margin: 0,
          }}
        >
          {playlist.description}
        </p>
      </div>
    </a>
  );
};

export default PlaylistCard;
