import { createColumnHelper } from "@tanstack/react-table";
import { FC } from "react";
import Table from "../../components/Table";
import { Player } from "../../types";

type ScoreboardTableProps = {
  players: Player[];
};

const columnHelper = createColumnHelper<Player>();

const columns = [
  columnHelper.accessor("place", {
    header: () => <span>Place</span>,
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("nickName", {
    header: () => <span>Nickname</span>,
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("score", {
    header: () => <span>Score</span>,
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
];

const ScoreboardTable: FC<ScoreboardTableProps> = ({ players }) => {
  return (
    <>
      <Table columns={columns} data={players} />
    </>
  );
};

export default ScoreboardTable;
