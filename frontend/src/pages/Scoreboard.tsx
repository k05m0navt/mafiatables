import { FC, useEffect, useState } from "react";
import { ScoreboardTable } from "../features/tables";
import { getPlayers } from "../services";
import { Player } from "../types";

type ScoreboardProps = {};

const Scoreboard: FC<ScoreboardProps> = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      if (players.length > 0) return;

      const response: Player[] = await getPlayers();
      setPlayers(response);
    };

    fetchPlayers();
  }, [players]);

  return (
    <div>
      <p>Scoreboard</p>
      <ScoreboardTable players={players} />
    </div>
  );
};

export default Scoreboard;
