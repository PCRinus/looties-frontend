import { ReduxEvents } from "../../reducers/events";
import { ReactComponent as Close } from "../../assets/Close.svg";
import { useDispatch } from "react-redux";
import UserProfilePicture from "../../assets/UserIcon.svg";
import ChatPoint from "../../assets/ChatPoint.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { UserProfileModalItem } from "../micro/UserProfileModalItem";

export enum ModalItemType {
  TOTAL_GAME = "TOTAL_GAME",
  GAMES_WON = "GAMES_WON",
  GAMES_LOST = "GAMES_LOST",
  WIN_RATIO = "WIN_RATIO",
  LOOTBOXES_OPEN = "LOOTBOXES_OPEN",
  REFERRALS = "REFERRALS",
  TOTAL_WAGERED = "TOTAL_WAGERED",
  NET_PROFIT = "NET_PROFIT",
  SOCIAL_LINKS = "SOCIAL_LINKS",
}

// TODO: show real user data once auth is done
const UserProfile: React.FC = () => {
  const dispatch = useDispatch();
  const modalItems = [
    ModalItemType.TOTAL_GAME,
    ModalItemType.GAMES_WON,
    ModalItemType.GAMES_LOST,
    ModalItemType.WIN_RATIO,
    ModalItemType.LOOTBOXES_OPEN,
    ModalItemType.REFERRALS,
    ModalItemType.TOTAL_WAGERED,
    ModalItemType.NET_PROFIT,
    ModalItemType.SOCIAL_LINKS,
  ];

  return (
    <div
      className="flex--column autoheight modal--content w-[100vw] md:w-[837px]"
      style={{ height: `calc(100vh - 144px)`, justifyContent: "start" }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="footer flex flex-row items-center justify-between gap-5 rounded-t-[12px] border-b-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4">
        <div className="mx-auto flex items-center gap-2 pl-[30px]">
          <span className="text-2xl font-bold">Twiiss1 profile</span>
        </div>
        <div
          className="close close--unset"
          onClick={() => {
            dispatch({ type: ReduxEvents.CloseModal });
          }}
        >
          <Close />
        </div>
      </div>
      {/* content div */}
      <div className={`flex max-h-full flex-col gap-4 overflow-y-scroll px-[32px] text-[14px] text-[#848B8D] `}>
        <div className="flex flex-col gap-6 rounded-xl border border-solid border-[#2C3034] xs:p-6 2xl:p-8">
          <div className="flex flex-row items-stretch justify-start gap-6">
            <div className="shrink-0 xs:h-20 xs:w-20 2xl:h-32 2xl:w-32">
              <img className="h-full w-full" src={UserProfilePicture} alt="Profile icon"></img>
            </div>
            <div className="flex  grow flex-col xs:justify-center 2xl:justify-between">
              <h1 className="font-bold text-[#DFDFDF] xs:text-xl 2xl:text-2xl">Twiiss1</h1>
              <h2 className="font-semibold text-[#848B8D] xs:text-xs 2xl:text-base">Member Since 15 Nov 22</h2>
              {/* desktop XP */}
              <div className="flex w-full flex-row items-center justify-between xs:hidden 2xl:flex">
                <div className="flex flex-row items-center justify-center gap-2 font-semibold">
                  <span>Level: 99</span>
                  <img className="h-1 w-1" src={ChatPoint} alt="dot"></img>
                  <span>378,295 XP</span>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 font-semibold">
                  <span>Level: 100</span>
                  <img className="h-1 w-1" src={ChatPoint} alt="dot"></img>
                  <span>400,000 XP</span>
                </div>
              </div>
              <div className="w-full xs:hidden 2xl:block">
                <ProgressBar completed={60} isLabelVisible={false} animateOnRender bgColor="#F03033" />
              </div>
            </div>
          </div>
          {/* mobile progress bar */}
          <div className="flex-col gap-2 xs:flex 2xl:hidden">
            <div className="flex w-full flex-row items-center justify-between font-semibold xs:flex 2xl:hidden">
              <span>Level: 99</span>
              <span>Level: 100</span>
            </div>
            <div className="w-full">
              <ProgressBar completed={60} isLabelVisible={false} animateOnRender bgColor="#F03033" />
            </div>
            <div className="flex w-full flex-row items-center justify-between font-semibold xs:flex 2xl:hidden">
              <span>378,295 XP</span>
              <span>400,000 XP</span>
            </div>
          </div>
        </div>
        <div className="grid gap-4 xs:grid-cols-2 2xl:grid-cols-3">
          {modalItems.map((item, index) => (
            <UserProfileModalItem key={index} itemType={item} />
          ))}
        </div>
      </div>

      <div className="footer mt-auto flex flex-row items-center justify-center gap-5 rounded-b-[12px] border-t-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4">
        <button
          className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-[#2C3034] px-[10px] font-sans font-semibold text-white"
          onClick={() => {
            dispatch({ type: ReduxEvents.CloseModal });
          }}
        >
          Cancel
        </button>
        <button
          className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white"
          onClick={() => {
            dispatch({ type: ReduxEvents.CloseModal });
          }}
        >
          I got it
        </button>
      </div>
    </div>
  );
};

export { UserProfile };
