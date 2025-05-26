import HoverCard from './HoverCard';
import type { Album } from '../data/Albums';

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
  return (
    <a
      href="#"
      className="relative block w-[80px] p-2 bg-transparent no-underline cursor-pointer"
    >
      <HoverCard image={album.cover}>
        <PlayIcon />
      </HoverCard>

      <h3
        className="font-semibold text-[0.75rem] text-center truncate w-[80px] mt-2 mb-0"
        style={{ color: 'white' }}
      >
        {album.title}
      </h3>

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
