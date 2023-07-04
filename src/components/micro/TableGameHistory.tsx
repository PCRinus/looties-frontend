import React from "react";

// Define the Game type
interface Game {
  id: number;
  game: string;
  betAmount: number;
  winning: number;
  date: string;
}

// Define the props type for TableGameHistory component
interface TableGameHistoryProps {
  games: Game[];
}

const TableGameHistory: React.FC<TableGameHistoryProps> = ({ games }) => {
  return (
    <div className="w-full p-8">
      <div className="overflow-hidden rounded-xl border border-custom_gray_1">
        <table className="w-full divide-y divide-custom_gray_1 font-sans text-base font-semibold text-custom_gray_2">
          <thead className=" bg-[#1E2124]">
            <tr className="h-12">
              <th className=" pl-4 text-left">ID</th>
              <th className=" pl-4 text-left">Game</th>
              <th className=" pl-4 text-left">Bet Amount</th>
              <th className=" pl-4 text-left">Winning</th>
              <th className=" pl-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-custom_gray_1">
            {games.slice(0, 10).map((game, index) => (
              <tr
                className={`${index % 2 === 0 ? "h-12 bg-[#1A1D20]" : "h-12 bg-[#1E2124]"} ${
                  games.length - 1 === index ? "rounded-b-lg" : ""
                }`}
                key={game.id}
              >
                <td className="text- pl-4 ">{game.id}</td>
                <td className="text- pl-4">{game.game}</td>
                <td className="text- pl-4">{game.betAmount}</td>
                <td className="text- pl-4">{game.winning}</td>
                <td className="text- pl-4">{game.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableGameHistory;