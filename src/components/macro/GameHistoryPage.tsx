import React, { useEffect, useRef, useState } from "react";
import ProfileOptionsHeader from "../micro/ProfileOptionsHeader";
import ContactSupport from "../micro/ContactSupport";
import GameHistoryMobileCard from "../micro/GameHistoryMobileCard";
import TableGameHistory from "../micro/TableGameHistory";
import { useSelector } from "react-redux";
import axios from "axios";
interface Game {
  id: number;
  gameType: string;
  betAmount: number;
  winning: number;
  date: string;
}

const GameHistoryPage = () => {
  const user = useSelector((state: any) => state.user);
  const auth = useSelector((state: any) => state.auth);
  const [isXsScreen, setIsXsScreen] = useState(window.matchMedia("(max-width: 1535px)").matches);

  const [items, setItems] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    setIsLoading(true);
    setError(null);

    axios
      .get(`${process.env.REACT_APP_API_URL}/game-history/${user.id}?page=${page}`, {
        headers: {
          Authorization: `Bearer ${auth.jwt}`,
        },
      })
      .then((response) => {
        const data = response.data;
        setItems((prevItems) => [...prevItems, ...data]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  useEffect(() => {
    const screenSizeChange = () => {
      setIsXsScreen(window.matchMedia("(max-width: 1535px)").matches);
    };

    window.addEventListener("resize", screenSizeChange);

    return () => {
      window.removeEventListener("resize", screenSizeChange);
    };
  }, []);

  return (
    <>
      <div className=" bottom-fade mb-[52px] flex-auto rounded-xl  bg-custom_black_2 xs:h-auto   2xl:w-full">
        <ProfileOptionsHeader title={"Game history"} />

        {/* Game History */}
        {items.length > 0 ? (
          <>{isXsScreen ? <GameHistoryMobileCard games={items} /> : <TableGameHistory games={items} />}</>
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

/**READ ME
 * This code will initially display 10 items, then display 10 more when the user scrolls to the bottom
 * of the page. It will then fetch 20 more items from the server, preparing for the next two scrolling events.
 */
