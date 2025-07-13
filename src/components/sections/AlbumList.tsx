import { useRef, useEffect } from 'react';
import AlbumCard from '../AlbumCard';
import type { Album } from '../../data/Albums';

type Props = {
  albums: Album[];
};

const AlbumList = ({ albums }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollSpeed = 0.5; // píxeles por frame (~30px/s)

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || albums.length === 0) return;

    const animate = () => {
      if (!container) return;

      container.scrollLeft += scrollSpeed;

      // si llegó al final, vuelve al inicio
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [albums]);

  return (
    <div className="relative">
      {/* Gradientes laterales */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hidden"
      >
        {albums.map((album) => (
          <div key={album.id} className="w-[160px] flex-shrink-0">
            <AlbumCard album={album} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
