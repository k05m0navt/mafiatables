import LinkName from "./LinkName";

const links: { [key: string]: { path: string; name: string } } = {
  [LinkName.Home]: {
    path: "/",
    name: LinkName.Home,
  },
  [LinkName.Login]: {
    path: "/login",
    name: LinkName.Login,
  },
};

export default links;
