// Definimos los props que puede recibir el componente PlayIcon:
// size para el tamaño del ícono (opcional, por defecto 60px)
// color para el color del ícono (opcional, por defecto blanco)
type PlayIconProps = {
  size?: number;
  color?: string;
};

// Componente funcional que renderiza un ícono SVG de "play"
// Usa los props para ajustar tamaño y color del ícono
const PlayIcon = ({ size = 60, color = 'white' }: PlayIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"  
    viewBox="0 0 24 24"                  
    fill={color}                        
    width={`${size}px`}                 
    height={`${size}px`}                
  >
    <path d="M8 5v14l11-7z" />          {/* Forma del triángulo play */}
  </svg>
);

export default PlayIcon;  // Exportar el componente para su uso en otras partes.
