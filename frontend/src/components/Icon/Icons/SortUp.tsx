import { FC } from "react";

type SortUpProps = {
  className?: string;
  width?: number;
  height?: number;
};

const SortUp: FC<SortUpProps> = ({
  width = "1em",
  height = "1em",
  className,
}) => {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"></path>
    </svg>
  );
};

export default SortUp;
