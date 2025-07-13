import { useEffect, useRef } from 'react';
import type { Song } from '../data/Songs';
import PlayIcon from './icons/PlayIcon';
import PauseIcon from './icons/PauseIcon';
import VolumeIcon from './icons/VolumeIcon';
import StopIcon from './icons/StopIcon';

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
  const playerRef = useRef<HTMLDivElement>(null);

  // Cerrar el reproductor si se hace clic afuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (playerRef.current && !playerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  if (!currentSong) return null;

  const [mins, secs] = currentSong.duration.split(':').map(Number);
  const totalSeconds = mins * 60 + secs;
  const currentTime = Math.floor((progress / 100) * totalSeconds);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div
      ref={playerRef}
      className="fixed bottom-0 left-0 right-0 h-20 bg-[#181818] border-t-2 border-primary z-30 shadow-lg"
    >
      <div className="flex items-center gap-4 w-full max-w-7xl mx-auto px-5 h-full">
        {/* Imagen */}
        <div className="w-14 h-14 flex-shrink-0 rounded overflow-hidden">
          <img
            src={currentSong.image}
            alt={currentSong.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white truncate">{currentSong.title}</h3>
          <p className="text-primary text-sm truncate">{currentSong.artist}</p>
        </div>

        {/* Controles */}
        <div className="flex items-center gap-3">
          <button
            onClick={onPlayPause}
            className="bg-primary hover:bg-primary-dark w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          >
            {isPlaying ? (
              <PauseIcon size={16} className="text-black" />
            ) : (
              <PlayIcon size={16} className="text-black" />
            )}
          </button>
          <button
            onClick={onStop}
            className="bg-primary hover:bg-primary-dark w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          >
            <StopIcon size={16} className="text-black" />
          </button>
        </div>

        {/* Progreso */}
        <div className="flex items-center gap-2 w-48">
          <span className="text-xs text-text-secondary w-8 text-right select-none">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={onSeek}
            className="flex-1 h-1 rounded-full appearance-none bg-[#535353] accent-primary cursor-pointer"
          />
          <span className="text-xs text-text-secondary w-8 select-none">{currentSong.duration}</span>
        </div>

        {/* Volumen */}
        <div className="flex items-center gap-2 w-32">
          <VolumeIcon size={16} className="text-text-secondary" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            className="w-full h-1 rounded-full appearance-none bg-[#535353] accent-primary cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
