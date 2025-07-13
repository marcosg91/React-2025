import { useEffect, useRef } from 'react';
import PlaylistCard from '../PlaylistCard';
import type { Playlist } from '../../data/Playlists';

type Props = {
  playlists: Playlist[];
};

const PlaylistList = ({ playlists }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollSpeed = 0.5; // píxeles por frame (~30px/segundo)

  // Duplicamos visualmente para animación infinita
  const duplicated = [...playlists, ...playlists];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const totalScrollWidth = container.scrollWidth / 2;

    const animate = () => {
      if (!container) return;

      container.scrollLeft += scrollSpeed;

      if (container.scrollLeft >= totalScrollWidth) {
        container.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [playlists]);

  return (
    <div className="relative overflow-hidden">
      {/* Gradientes laterales */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Contenedor scrollable automático */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hidden w-full"
        style={{ minWidth: '100%' }}
      >
        {duplicated.map((playlist, index) => (
          <div key={`${playlist.id}-${index}`} className="w-[320px] flex-shrink-0">
            <PlaylistCard playlist={playlist} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
