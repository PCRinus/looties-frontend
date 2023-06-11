import { useEffect, useState } from "react";
import { Chat } from "../macro/Chat";
import HomepageCardsDisplay from "../macro/HomepageCardsDisplay";
import { LiveDropsSidebar } from "../macro/LiveDropsSidebar";

export const Homepage: React.FC = () => {
  const [fadeCardsDivWidth, setFadeCardsDivWidth] = useState(0);
  const [liveDropsSideBarWidth, setLiveDropsSideBarWidth] = useState(0);

  const handleScreenResize = () => {
    const cardsDisplay = document.querySelector("#homepage-cards-display");
    const liveDropsSideBar = document.querySelector("#liveDropsSideBar");
    setFadeCardsDivWidth(cardsDisplay!.clientWidth);
    setLiveDropsSideBarWidth(liveDropsSideBar!.clientWidth);
  };

  useEffect(() => {
    handleScreenResize();
    window.addEventListener("resize", handleScreenResize);

    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);
  return (
    // TBE: remove mt-[120px] after header is not display: absolute
    <div className="flex w-full flex-row items-center justify-center">
      <LiveDropsSidebar />
      <HomepageCardsDisplay />
      <Chat />
      <div
        className="pointer-events-none absolute bottom-0 h-[136px] bg-gradient-to-b from-transparent to-[#151719]"
        style={{
          width: fadeCardsDivWidth,
          left: liveDropsSideBarWidth,
        }}
      ></div>
    </div>
  );
};
