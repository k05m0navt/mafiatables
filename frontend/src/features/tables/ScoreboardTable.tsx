import { FC } from "react";
import { Player } from "../../types";

type ScoreboardTableProps = {
  players: Player[];
};

const ScoreboardTable: FC<ScoreboardTableProps> = ({ players }) => {
  return (
    <div>
      {players.map((player, index) => {
        return (
          <div key={index}>
            <div className="flex gap-1">
              <p>{player.nickName}</p>
              <p>{player.score}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScoreboardTable;
