// Importar useState para manejar el estado de hover
import { useState } from 'react';
// Importar los tipos necesarios para tipar las props correctamente
import type { ReactNode, CSSProperties } from 'react';

// Definir las props que acepta el componente HoverCard
type Props = {
  image: string; 
  children: ReactNode; 
  style?: CSSProperties; 
  hoverScale?: number; 
  overlayColor?: string; 
};

// Componente funcional HoverCard
const HoverCard = ({
  image,
  children,
  style,
  hoverScale = 1.1, 
  overlayColor = 'rgba(0,0,0,0.4)', 
}: Props) => {
  // Estado que detecta si el mouse está encima del componente
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        position: 'relative', 
        width: style?.width || '80px',
        height: style?.height || '80px',
        borderRadius: style?.borderRadius || '8px',
        overflow: 'hidden',
        margin: style?.margin || '0 auto',
        transform: hover ? `scale(${hoverScale})` : 'scale(1)', 
        transition: 'transform 0.3s ease', 
        ...style, 
      }}
      onMouseEnter={() => setHover(true)} // Activa hover al entrar
      onMouseLeave={() => setHover(false)} // Desactiva hover al salir
    >
      {/* Imagen de fondo */}
      <img
        src={image}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Capa superpuesta que se muestra al hacer hover */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: overlayColor, 
          opacity: hover ? 1 : 0,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: style?.borderRadius || '8px', 
        }}
      >
        {children} {/* Elementos hijos que se muestran sobre la imagen */}
      </div>
    </div>
  );
};

export default HoverCard; // Exportar el componente para su uso en otras partes.
