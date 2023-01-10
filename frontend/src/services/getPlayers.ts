import { Player } from "../types";

const getPlayers: () => Promise<Player[]> = async () => {
  const response = await fetch("players.json");
  return response.json() as Promise<Player[]>;
};

export default getPlayers;
