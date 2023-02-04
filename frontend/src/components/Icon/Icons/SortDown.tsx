import { FC } from "react";

type SortDownProps = {
  className?: string;
  width?: number;
  height?: number;
};

const SortDown: FC<SortDownProps> = ({
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
      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
    </svg>
  );
};

export default SortDown;
