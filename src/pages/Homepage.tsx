import { useEffect, useState } from "react";
import { Chat } from "../components/macro/Chat";
import { LootboxCardsDisplay } from "../components/macro/LootboxCardsDisplay";
import LiveDropSidebar from "../components/micro/LiveDropSidebar";

export const Homepage: React.FC = () => {
  const [fadeCardsDivWidth, setFadeCardsDivWidth] = useState(0);
  const [liveDropsSideBarWidth, setLiveDropsSideBarWidth] = useState(0);

  const handleScreenResize = () => {
    const cardsDisplay = document.querySelector("#lootbox-cards-display");
    const liveDropsSideBar = document.querySelector("#live-drop-sidebar");
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
    <div className="flex h-[calc(100vh-120px)] w-screen flex-row items-center justify-center">
      <LiveDropSidebar />
      <LootboxCardsDisplay />
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
