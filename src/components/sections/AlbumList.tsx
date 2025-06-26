import AlbumCard from '../AlbumCard';
import type { Album } from '../../data/Albums';
import { useRef, useEffect } from 'react';

type Props = {
  albums: Album[];
};

const AlbumList = ({ albums }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Generar IDs únicos para cada instancia duplicada
  const duplicatedAlbums = [...albums, ...albums].map((album, index) => ({
    ...album,
    uniqueId: `${album.id}-${index}`
  }));

  // Efecto para configurar la animación
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // 1. Definir la animación CSS dinámicamente
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll-horizontal {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-${duplicatedAlbums.length * 50}%)); }
      }
    `;
    document.head.appendChild(style);

    // 2. Aplicar la animación
    container.style.animation = `scroll-horizontal ${20 * duplicatedAlbums.length / 2}s linear infinite`;

    // 3. Limpieza
    return () => {
      document.head.removeChild(style);
    };
  }, [albums]);

  return (
    <div className="overflow-hidden">
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 w-max"
      >
        {duplicatedAlbums.map(album => (
          <div key={album.uniqueId} className="w-48 flex-shrink-0">
            <AlbumCard album={album} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;