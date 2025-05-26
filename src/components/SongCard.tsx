import type { Song } from '../data/Songs';
import { FaClock, FaPlay } from "react-icons/fa";

type Props = {
  song: Song;
};

const SongCard = ({ song }: Props) => {
  return (
    <button
      className="relative bg-white shadow-md rounded p-4 flex flex-col items-center w-full hover:bg-green-100 transition group overflow-hidden"
      onClick={() => console.log(`Playing ${song.title}`)}
    >
      <img
        src={song.image}
        alt={song.title}
        className="w-[120px] h-[120px] object-cover mb-2 rounded"
      />
      <h2 className="text-lg font-semibold text-center whitespace-nowrap animate-marquee">
        {song.title}
      </h2>
      <p className="text-sm text-gray-600 text-center">{song.artist}</p>
      <p className="text-sm flex items-center gap-1 justify-center">
        <FaClock /> {song.duration}
      </p>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition">
        <div className="bg-green-500 text-white p-8 rounded-full shadow-lg">
          <FaPlay size={60} />
        </div>
      </div>
    </button>
  );
};

export default SongCard;
