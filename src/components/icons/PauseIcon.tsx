type PauseIconProps = {
  size?: number;
  color?: string;
  className?: string; 
};

const PauseIcon = ({ 
  size = 24, 
  color = 'currentColor',
  className = '' 
}: PauseIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    width={`${size}px`}
    height={`${size}px`}
    className={className} 
  >
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

export default PauseIcon;