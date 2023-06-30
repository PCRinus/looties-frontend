import React, { useEffect, useState } from "react";
import ProfileOptionsHeader from "../micro/ProfileOptionsHeader";
import SettingsSaveChanges from "../micro/SettingsSaveChanges";
import ContactSupport from "../micro/ContactSupport";
import GameHistoryMobileCard from "../micro/GameHistoryMobileCard";
import TableGameHistory from "../micro/TableGameHistory";

interface Game {
  id: number;
  game: string;
  betAmount: number;
  winning: number;
  date: string;
}

const GameHistoryPage = () => {
  // Here we're initializing our games array to be empty.
  // In a real app, you'd likely fetch this data from an API or a database.
  const [games, setGames] = useState<Game[]>([]);
  const [displayCount, setDisplayCount] = useState(10);

  const [isXsScreen, setIsXsScreen] = useState(window.matchMedia("(max-width: 576px)").matches);

  useEffect(() => {
    const screenSizeChange = () => {
      setIsXsScreen(window.matchMedia("(max-width: 1535px)").matches);
    };

    window.addEventListener("resize", screenSizeChange);

    return () => {
      window.removeEventListener("resize", screenSizeChange);
    };
  }, []);

  // Fetch games when component mounts
  useEffect(() => {
    // In a real app, fetch games from API and set state
    // For this example, we'll create 50 dummy game entries
    const dummyGames: Game[] = Array.from({ length: 20 }, (_, id) => ({
      id,
      game: `Game ${id + 1}`,
      betAmount: Math.floor(Math.random() * 100),
      winning: Math.floor(Math.random() * 100),
      date: new Date().toLocaleDateString(),
    }));

    setGames(dummyGames);
  }, []);

  const loadMoreGames = () => {
    setDisplayCount((count) => count + 10);
  };

  return (
    <>
      <div className=" bottom-fade mb-[52px] flex-auto rounded-xl  bg-custom_black_2 xs:mx-6 xs:h-auto   2xl:w-full">
        <ProfileOptionsHeader title={"Game history"} />

        {/* Game History */}
        {games.length === 0 ? (
          <>
            {isXsScreen ? (
              <>
                <GameHistoryMobileCard games={games} />
              </>
            ) : (
              <TableGameHistory games={games} />
            )}
          </>
        ) : (
          <div className="flex w-full items-center justify-center  xs:px-6 xs:py-[58px]  2xl:min-h-[664px] 2xl:p-0">
            <div className="flex flex-col items-center justify-center gap-4 font-sans ">
              <h2 className="text-center font-bold text-custom_red_1 xs:text-xl  2xl:text-2xl">No games found.</h2>
              <p className="text-center text-base font-semibold text-custom_gray_2 ">
                When you start playing a game, its history will appear here.
              </p>
            </div>
          </div>
        )}
      </div>
      <ContactSupport />
    </>
  );
};

export default GameHistoryPage;
