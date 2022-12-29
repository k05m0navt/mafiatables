import LinkName from "../../routers/LinkName";
import links from "../../routers/links";

const navLinks: { name: string; path: string }[] = [
  {
    name: links[LinkName.Home].name,
    path: links[LinkName.Home].path,
  },
];

export default navLinks;
