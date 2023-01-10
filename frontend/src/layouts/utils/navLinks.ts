import LinkName from "../../routers/LinkName";
import links from "../../routers/links";

const navLinks: { name: string; path: string }[] = [
  {
    name: links[LinkName.Home].name,
    path: links[LinkName.Home].path,
  },
  {
    name: links[LinkName.Scoreboard].name,
    path: links[LinkName.Scoreboard].path,
  },
];

export default navLinks;
