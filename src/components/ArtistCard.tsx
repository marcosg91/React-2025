import HoverCard from './HoverCard'; 
import type { Artist } from '../data/Artists';

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
  return (
    <a
      href="#"
      style={{
        display: 'block',
        width: '80px',
        padding: '8px',
        backgroundColor: 'transparent',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      <HoverCard
        image={artist.photo}
        style={{
          borderRadius: '50%',
          width: '80px',
          height: '80px',
          margin: '0 auto',
        }}
      >
        <PlayIcon />
      </HoverCard>

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
