type PlayIconProps = {
  size?: number;
  color?: string;
  className?: string;
};

const PlayIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
}: PlayIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    width={size}
    height={size}
    className={className}
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default PlayIcon;
