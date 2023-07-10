import React, { useEffect, useRef, useState } from "react";
import ProfileOptionsHeader from "../micro/ProfileOptionsHeader";
import ContactSupport from "../micro/ContactSupport";
import GameHistoryMobileCard from "../micro/GameHistoryMobileCard";
import TableGameHistory from "../micro/TableGameHistory";
import { useSelector } from "react-redux";
import axios from "axios";
interface Game {
  id: number;
  game: string;
  betAmount: number;
  winning: number;
  date: string;
}

const GameHistoryPage = () => {
  const user = useSelector((state: any) => state.user);
  const auth = useSelector((state: any) => state.auth);
  const [isXsScreen, setIsXsScreen] = useState(false);

  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [displayedGames, setDisplayedGames] = useState<Game[]>([]);
  const [hiddenGames, setHiddenGames] = useState<Game[]>([]);

  const observerTarget = useRef(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/game-history/${user.id}?page=${page}`, {
        headers: {
          Authorization: `Bearer ${auth.jwt}`,
        },
      });
      const data: Game[] = await response.data;
      const newDisplayedGames = [...displayedGames, ...hiddenGames, ...data.slice(0, 10)];
      const newHiddenGames = data.slice(10);

      setDisplayedGames(newDisplayedGames);
      setHiddenGames(newHiddenGames);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDisplayedGames((prevGames) => [...prevGames, ...hiddenGames]);
          setHiddenGames([]);
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

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

  return (
    <>
      <div className=" bottom-fade mb-[52px] flex-auto rounded-xl  bg-custom_black_2 xs:mx-6 xs:h-auto   2xl:w-full">
        <ProfileOptionsHeader title={"Game history"} />

        {/* Game History */}
        {games.length > 0 ? (
          <>
            {isXsScreen ? (
              <GameHistoryMobileCard games={displayedGames} />
            ) : (
              <TableGameHistory games={displayedGames} />
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
        {isLoading && <div>Loading ...</div>}
        <div ref={observerTarget}></div>
      </div>
      <ContactSupport />
    </>
  );
};

export default GameHistoryPage;
