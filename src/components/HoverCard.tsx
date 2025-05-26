import { useState } from 'react';
import type { ReactNode, CSSProperties } from 'react';



type Props = {
  image: string;
  children: ReactNode;
  style?: CSSProperties; // <-- agregá esta línea
};

const HoverCard = ({ image, children, style }: Props) => {
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
        transform: hover ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease',
        ...style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
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
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)',
          opacity: hover ? 1 : 0,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: style?.borderRadius || '8px',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default HoverCard;
