import React, { FC } from "react";
import { Logo } from "./Icons";
import IconType from "./IconType";

type IconProps = {
  type: IconType;
  width?: number;
  height?: number;
};

const Icon: FC<IconProps> = ({ type, width, height }) => {
  switch (type) {
    case IconType.Logo:
      return <Logo width={width} height={height} />;
    default:
      return null;
  }
};

export default Icon;
