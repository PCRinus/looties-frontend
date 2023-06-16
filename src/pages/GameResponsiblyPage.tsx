import { GameResponsiblyCard } from "../components/macro/GameResponsiblyCard";
import { Chat } from "../components/macro/Chat";
import LiveDropSidebar from "../components/micro/LiveDropSidebar";
import { FC } from "react";

export const GameResponsiblyPage: FC = () => {
  return (
    <div className="flex w-screen flex-row items-center justify-center xs:h-[calc(100vh-80px-64px)] 2xl:h-[calc(100vh-120px)]">
      <LiveDropSidebar />
      <div className="h-full max-h-full w-full overflow-y-scroll bg-[#151719] xs:p-6 2xl:p-[52px]">
        <GameResponsiblyCard />
      </div>
      <Chat />
    </div>
  );
};
