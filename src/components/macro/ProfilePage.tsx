import React from "react";
import Twiter from "../../assets/Twiter.svg";
import DiscordIcon from "../../assets/DiscordIcon.svg";
import StatisticsComponent from "../micro/StatisticsComponent";
import TotalGameIcon from "../../assets/TotalGameIcon.svg";
import GamesWon from "../../assets/GamesWon.svg";

interface IProps {
  totalGameData: number;
  gamesWonData: number;
  gamesLostData: number;
  winRatioData: number;
  lootboxesOpenData: number;
  referralsData: number;
  totalWageredData: number;
  netProfitData: number;
}
const ProfilePage: React.FC = () => {
  return (
    <div className="bottom-fade flex-auto rounded-xl bg-custom_black_2 xs:mx-6 xs:h-full 2xl:mx-[3vw] 2xl:mb-0 2xl:mt-0 ">
      {/* <div
        id="ProfileOptionsHeader"
        className="flex w-full items-center justify-center border-b-2 border-custom_gray_1 bg-[#1E2124] xs:h-[68px] 2xl:h-20"
      >
        <span className="font-sans text-2xl font-bold text-custom_white_1">My Profile</span>
      </div>
      <div id="content" className=" h-full w-full xs:p-6 2xl:p-8">
        <div className="h-full w-full">
          <span className="font-sans text-xl font-bold text-custom_white_1">Statistics</span>
          <div className="grid grid-cols-2 grid-rows-4 gap-4 xs:mt-4 2xl:mt-6">
            <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
              <div className=" flex h-full w-full justify-start xs:gap-3 2xl:gap-5">
                <img src={TotalGameIcon} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
                <div className="flex flex-col">
                  <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">
                    Total game
                  </span>
                  <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">4881</span>
                </div>
              </div>
            </div>

            <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
              <div className=" flex h-full w-full justify-start xs:gap-3 2xl:gap-5">
                <img src={GamesWon} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
                <div className="flex flex-col">
                  <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">
                    Total game
                  </span>
                  <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">4881</span>
                </div>
              </div>
            </div>

            <StatisticsComponent />
            <StatisticsComponent />
            <StatisticsComponent />
            <StatisticsComponent />
            <StatisticsComponent />
            <StatisticsComponent />
            <span className="mt-8 font-sans text-xl font-bold text-custom_white_1">Links</span>
          </div>
          <div className="mt-6 flex gap-6">
            <img src={Twiter} className=""></img>
            <img src={DiscordIcon} className=""></img>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProfilePage;
