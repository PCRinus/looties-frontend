import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
// Define the Game type
interface Game {
  id: number;
  game: string;
  betAmount: number;
  winning: number;
  date: string;
}

// Define the props type for GameHistoryMobileCard component
interface GameHistoryMobileCardProps {
  games: Game[];
}

const GameHistoryMobileCard: React.FC<GameHistoryMobileCardProps> = ({ games }) => {
  return (
    <div className=" flex flex-col p-6">
      <Scrollbars
        autoHeight
        autoHeightMin={0}
        autoHeightMax={880} // This height can be adjusted based on the desired height of four games
      >
        {games.map((game, index) => (
          <div
            className={`flex h-[220px] w-full flex-shrink-0  items-center justify-normal rounded-lg border-[1px] border-custom_gray_1 bg-[#1E2124]  pl-6 ${
              index < games.length - 1 ? "mb-4" : ""
            }`}
          >
            <div className="flex flex-col gap-4" key={game.id}>
              <div className="font-sans text-base font-semibold">
                <span className="mr-3 text-[#888888]">ID</span>
                <span className="text-[#DFDFDF]">{game.id}</span>
              </div>
              <div className="font-sans text-base font-semibold">
                <span className="mr-3 text-[#888888]">Game</span>

                <span className="text-[#DFDFDF]">{game.game}</span>
              </div>
              <div className="font-sans text-base font-semibold">
                <span className="mr-3 text-[#888888]">Bet Amount</span>

                <span className="text-[#DFDFDF]">{game.betAmount}</span>
              </div>
              <div className="font-sans text-base font-semibold">
                <span className="mr-3 text-[#888888]">Winning</span>

                <span className="text-[#DFDFDF]">{game.winning}</span>
              </div>
              <div className="font-sans text-base font-semibold">
                <span className="mr-3 text-[#888888]">Date</span>

                <span className="text-[#DFDFDF]">{game.date}</span>
              </div>
            </div>
          </div>
        ))}
      </Scrollbars>
      <div className="h-[40px] w-full"></div>
    </div>
  );
};

export default GameHistoryMobileCard;
