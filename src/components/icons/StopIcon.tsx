type StopIconProps = {
  size?: number;
  color?: string;
  className?: string;
};

const StopIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
}: StopIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    width={size}
    height={size}
    className={className}
  >
    <rect x="6" y="6" width="12" height="12" rx="2" />
  </svg>
);

export default StopIcon;
