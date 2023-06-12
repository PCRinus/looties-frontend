import { useSelector } from "react-redux";
import { Chat } from "../components/macro/Chat";
import { LootboxCardsDisplay } from "../components/macro/LootboxCardsDisplay";
import LiveDropSidebar from "../components/micro/LiveDropSidebar";

export const LootboxesPage: React.FC = () => {
  const openChat = useSelector((state: any) => state.ui.openChat);

  return (
    <div className="flex w-screen flex-row items-center justify-center xs:h-[calc(100vh-80px-64px)] 2xl:h-[calc(100vh-120px)]">
      <LiveDropSidebar />
      <LootboxCardsDisplay />
      <Chat />
      {!openChat && (
        <div className="pointer-events-none absolute h-[136px] bg-gradient-to-b from-transparent to-[#151719] xs:bottom-16 xs:left-0 xs:w-screen 2xl:bottom-0 2xl:left-80 2xl:w-[calc(100vw-320px-429px)]"></div>
      )}
    </div>
  );
};
