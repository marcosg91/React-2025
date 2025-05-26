import { useState } from 'react';

type Artist = {
  id: string;
  name: string;
  photo: string;
  listeners: number; // nuevo campo agregado
};

type Props = {
  artist: Artist;
};

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    width="32px"
    height="32px"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ArtistCard = ({ artist }: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="#"
      style={{
        position: 'relative',
        display: 'block',
        width: '80px',
        padding: '8px',
        backgroundColor: 'transparent',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          width: '80px',
          height: '80px',
          position: 'relative',
          margin: '0 auto',
          borderRadius: '50%',
          overflow: 'hidden',
          transform: hover ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}
      >
        <img
          src={artist.photo}
          alt={artist.name}
          style={{
            width: '80px',
            height: '80px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '80px',
            height: '80px',
            backgroundColor: 'rgba(0,0,0,0.4)',
            opacity: hover ? 1 : 0,
            transition: 'opacity 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
          }}
        >
          <PlayIcon />
        </div>
      </div>

      <h3
        style={{
          color: 'white',
          fontWeight: 600,
          fontSize: '0.75rem',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '80px',
          marginTop: '8px',
          marginBottom: '4px',
        }}
      >
        {artist.name}
      </h3>

      <p
        style={{
          color: '#ccc',
          fontSize: '0.65rem',
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



