import { FC } from "react";
import { Logo, Sort, SortDown, SortUp } from "./Icons";
import IconType from "./IconType";

type IconProps = {
  type: IconType;
  className?: string;
  width?: number;
  height?: number;
};

const Icon: FC<IconProps> = ({ type, className, width, height }) => {
  switch (type) {
    case IconType.Logo:
      return <Logo width={width} height={height} />;
    case IconType.Sort:
      return <Sort className={className} width={width} height={height} />;
    case IconType.SortDown:
      return <SortDown className={className} width={width} height={height} />;
    case IconType.SortUp:
      return <SortUp className={className} width={width} height={height} />;
    default:
      return null;
  }
};

export default Icon;
