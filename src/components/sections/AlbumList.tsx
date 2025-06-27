import AlbumCard from '../AlbumCard';
import type { Album } from '../../data/Albums';
import { useRef, useEffect } from 'react';

type Props = {
  albums: Album[];
};

const AlbumList = ({ albums }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollSpeed = 30; // Píxeles por segundo

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || albums.length === 0) return;

    let position = 0;
    const containerWidth = container.scrollWidth / 2;

    const animate = () => {
      position += scrollSpeed / 60;
      
      if (position >= containerWidth) {
        position = 0;
      }
      
      container.style.transform = `translateX(-${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [albums]);

  // Duplicamos los álbumes para el efecto de carrusel infinito
  const duplicatedAlbums = [...albums, ...albums];

  return (
    <div className="overflow-hidden relative">
      {/* Degradados laterales */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />

      <div 
        ref={scrollContainerRef}
        className="flex gap-4 w-max"
      >
        {duplicatedAlbums.map((album, index) => (
          <div key={`${album.id}-${index}`} className="w-48 flex-shrink-0">
            <AlbumCard album={album} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;