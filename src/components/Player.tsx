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
  onClose,
  onStop,
}: PlayerProps) => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (playerRef.current && !playerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!currentSong) return null;

  const [mins, secs] = currentSong.duration.split(':').map(Number);
  const totalSeconds = mins * 60 + secs;
  const currentTime = Math.floor((progress / 100) * totalSeconds);

  return (
    <div
      ref={playerRef}
      className="fixed bottom-0 left-0 right-0 h-20 bg-[#181818] border-t-2 border-[#1DB954] flex items-center px-5 z-50"
    >
      <div className="flex items-center gap-4 w-full max-w-6xl mx-auto">
        {/* Imagen de la canción */}
        <div className="w-14 h-14 flex-shrink-0 rounded overflow-hidden">
          <img
            src={currentSong.image}
            alt={currentSong.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info canción */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white truncate">{currentSong.title}</h3>
          <p className="text-[#1DB954] text-sm truncate">{currentSong.artist}</p>
        </div>

        {/* Controles reproducción */}
        <div className="flex items-center gap-3">
          <button
            onClick={onPlayPause}
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            className="bg-[#1DB954] hover:bg-[#1ED760] w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          >
            {isPlaying ? (
              <PauseIcon size={16} className="text-black" />
            ) : (
              <PlayIcon size={16} className="text-black" />
            )}
          </button>

          <button
            onClick={onStop}
            aria-label="Detener reproducción"
            className="bg-[#1DB954] hover:bg-[#1ED760] w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          >
            <StopIcon size={16} className="text-black" />
          </button>
        </div>

        {/* Barra de progreso */}
        <div className="flex items-center gap-2 w-48">
          <span className="text-xs text-[#b3b3b3] w-8 text-right select-none">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={onSeek}
            className="flex-1 h-1 rounded-full appearance-none bg-[#535353] accent-[#1DB954] cursor-pointer"
          />
          <span className="text-xs text-[#b3b3b3] w-8 select-none">{currentSong.duration}</span>
        </div>

        {/* Control volumen */}
        <div className="flex items-center gap-2 w-32">
          <VolumeIcon size={16} className="text-[#b3b3b3]" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            className="w-full h-1 rounded-full appearance-none bg-[#535353] accent-[#1DB954] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
