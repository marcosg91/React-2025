import { useState, useEffect, useRef, useCallback } from 'react';
import type { Song } from '../data/Songs';

export const usePlayer = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Inicialización segura del audio
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  // Eventos del audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration && isFinite(audio.duration)) {
        const percentage = (audio.currentTime / audio.duration) * 100;
        setProgress(percentage);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(100);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Sincronizar volumen
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayPause = useCallback(() => {
    if (!currentSong || !audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(e => console.error('Error al reproducir:', e));
      setIsPlaying(true);
    }
  }, [currentSong, isPlaying]);

  const playSong = useCallback((song: Song) => {
    if (!audioRef.current) return;

    if (currentSong?.id === song.id) {
      togglePlayPause();
      return;
    }

    audioRef.current.pause();
    audioRef.current.src = song.audioUrl;
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(e => console.error('Error al reproducir:', e));

    setCurrentSong(song);
    setIsPlaying(true);
    setProgress(0);
  }, [currentSong, togglePlayPause]);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!currentSong || !audioRef.current) return;

    const newProgress = Number(e.target.value);
    const duration = audioRef.current.duration;

    if (duration && isFinite(duration)) {
      const newTime = (newProgress / 100) * duration;
      audioRef.current.currentTime = newTime;
      setProgress(newProgress);
    }
  }, [currentSong]);

  const handleStop = useCallback(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setProgress(0);
    setIsPlaying(false);
    // Dejar la canción cargada para poder reproducir de nuevo sin recargar
  }, []);

  const handleClose = useCallback(() => {
    handleStop();
    setCurrentSong(null);
  }, [handleStop]);

  return {
    currentSong,
    isPlaying,
    progress,
    volume,
    playSong,
    togglePlayPause,
    handleSeek,
    setVolume,
    handleStop,
    handleClose,
  };
};
