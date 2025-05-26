import { useState } from 'react';

type Album = {
  id: string;
  title: string;
  cover: string;
  year: string;
};

type Props = {
  album: Album;
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

const AlbumCard = ({ album }: Props) => {
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
          borderRadius: '8px',
          overflow: 'hidden',
          transform: hover ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}
      >
        <img
          src={album.cover}
          alt={album.title}
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
            borderRadius: '8px',
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
          marginBottom: 0,
        }}
      >
        {album.title}
      </h3>

      <p
        style={{
          color: '#a0aec0',
          fontSize: '0.65rem',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '80px',
          marginTop: '2px',
          marginBottom: 0,
        }}
      >
        {album.year}
      </p>
    </a>
  );
};

export default AlbumCard;

