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

const TableDepositsTransaction: React.FC<TableGameHistoryProps> = ({ games }) => {
  return (
    <div className="w-full p-8">
      <div className="overflow-hidden rounded-xl border border-custom_gray_1">
        <table className="w-full flex-nowrap divide-y divide-custom_gray_1  font-sans text-base font-semibold text-custom_gray_2">
          <thead className=" bg-[#1E2124]">
            <tr className="h-12">
              <th className=" whitespace-nowrap  pl-4 text-left">ID</th>
              <th className=" whitespace-nowrap  text-left">Coins/NFT's</th>
              <th className=" whitespace-nowrap  text-left">Deposit method</th>
              <th className="  whitespace-nowrap text-left">Amount</th>
              <th className=" whitespace-nowrap  text-left">Date</th>
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
                <td className="whitespace-nowrap   pl-4 text-left">{game.id}</td>
                <td className="whitespace-nowrap  text-left">{game.game}</td>
                <td className="whitespace-nowrap  text-left">{game.betAmount}</td>
                <td className="whitespace-nowrap  text-left">{game.winning}</td>
                <td className="whitespace-nowrap  text-left">{game.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDepositsTransaction;
