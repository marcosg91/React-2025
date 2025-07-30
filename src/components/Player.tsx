import type { Song } from "../data/Songs";
import PlayIcon from "./icons/PlayIcon";
import PauseIcon from "./icons/PauseIcon";
import StopIcon from "./icons/StopIcon";
import VolumeIcon from "./icons/VolumeIcon";
import CloseIcon from "./icons/CloseIcon";

type PlayerProps = {
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  volume: number;
  onPlayPause: () => void;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onVolumeChange: (volume: number) => void;
  onClose: () => void;
  onStop: () => void;
};

const Player = ({
  currentSong,
  isPlaying,
  progress,
  volume,
  onPlayPause,
  onSeek,
  onVolumeChange,
  onStop,
  onClose,
}: PlayerProps) => {
  if (!currentSong) return null;

  const [mins, secs] = currentSong.duration.split(":").map(Number);
  const totalSeconds = mins * 60 + secs;
  const currentTime = Math.floor((progress / 100) * totalSeconds);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div
      className="
        fixed bottom-2 left-1/2 transform -translate-x-1/2
        w-[85%] max-w-lg h-16
        bg-[#181818] shadow-md rounded-lg
        border border-neutral-700
        flex items-center justify-between gap-3
        px-4 z-50
      "
    >
      {/* Imagen */}
      <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
        <img
          src={currentSong.image}
          alt={currentSong.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info + Progreso */}
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-medium text-xs truncate">
          {currentSong.title}
        </h3>
        <p className="text-text-secondary text-[10px] truncate">
          {currentSong.artist}
        </p>

        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-[9px] text-gray-400 w-5 text-right">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={onSeek}
            className="w-full h-1 rounded-full bg-gray-700 accent-primary cursor-pointer"
          />
          <span className="text-[9px] text-gray-400 w-5">
            {currentSong.duration}
          </span>
        </div>
      </div>

      {/* Controles */}
      <div className="flex items-center gap-1">
        <button
          onClick={onPlayPause}
          className="bg-primary hover:bg-primary-dark w-7 h-7 rounded-full flex items-center justify-center"
        >
          {isPlaying ? (
            <PauseIcon size={12} color="black" />
          ) : (
            <PlayIcon size={12} color="black" />
          )}
        </button>
        <button
          onClick={onStop}
          className="bg-primary hover:bg-primary-dark w-7 h-7 rounded-full flex items-center justify-center"
        >
          <StopIcon size={12} color="black" />
        </button>
        <button
          onClick={onClose}
          className="bg-primary hover:bg-primary-dark w-7 h-7 rounded-full flex items-center justify-center"
        >
          <CloseIcon size={11} color="black" />
        </button>
      </div>

      {/* Volumen */}
      <div className="flex items-center gap-1 w-20">
        <VolumeIcon size={12} color="#b3b3b3" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          className="w-full h-1 rounded-full bg-gray-700 accent-primary cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Player;
