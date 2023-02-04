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
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Scoreboard</h1>
        </div>
        <div className="mt-4">
          <ScoreboardTable players={players} />
        </div>
      </main>
    </div>
  );
};

export default Scoreboard;
