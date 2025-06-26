import { useState, useMemo } from 'react';
import type { ReactNode, CSSProperties } from 'react';

type Props = {
  image: string; 
  children: ReactNode; 
  style?: CSSProperties; 
  hoverScale?: number; 
  overlayColor?: string; 
};

const HoverCard = ({
  image,
  children,
  style,
  hoverScale = 1.05,
  overlayColor = 'rgba(0,0,0,0.4)', 
}: Props) => {
  const [hover, setHover] = useState(false);
  
  // Memoizar estilos para evitar re-renders innecesarios
  const containerStyle = useMemo((): CSSProperties => ({
    position: 'relative',
    width: style?.width || '80px',
    height: style?.height || '80px',
    borderRadius: style?.borderRadius || '8px',
    overflow: 'hidden',
    margin: style?.margin || '0 auto',
    transform: hover ? `scale(${hoverScale})` : 'scale(1)',
    transition: 'transform 0.2s ease',
    ...style,
  }), [hover, hoverScale, style]);

  const overlayStyle = useMemo((): CSSProperties => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: overlayColor,
    opacity: hover ? 1 : 0,
    transition: 'opacity 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: style?.borderRadius || '8px',
  }), [hover, overlayColor, style?.borderRadius]);

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-hidden="true"
    >
      <img
        src={image}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
        loading="lazy"
      />

      <div style={overlayStyle}>
        {children}
      </div>
    </div>
  );
};

export default HoverCard;