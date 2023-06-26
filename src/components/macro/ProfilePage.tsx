import React from "react";
import Twiter from "../../assets/Twiter.svg";
import DiscordIcon from "../../assets/DiscordIcon.svg";
import TotalGameIcon from "../../assets/TotalGameIcon.svg";
import GamesWon from "../../assets/GamesWon.svg";
import GameLostIcon from "../../assets/GamesLostIcon.svg";
import Trophy from "../../assets/Trophy.svg";
import DolarFrame from "../../assets/DolarFrame.svg";
import ReferralsIcon from "../../assets/ReferralsIcon.svg";
import RedDropBoxIcon from "../../assets/DropboxIconRed.svg";

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
const ProfilePage: React.FC<IProps> = ({
  totalGameData,
  gamesWonData,
  gamesLostData,
  winRatioData,
  lootboxesOpenData,
  referralsData,
  totalWageredData,
  netProfitData,
}) => {
  return (
    <div id="content" className=" h-full w-full xs:p-6 2xl:p-8">
      <div className="h-full w-full">
        <span className="font-sans text-xl font-bold text-custom_white_1">Statistics</span>
        <div className="grid grid-cols-2 grid-rows-4 gap-4 xs:mt-4 2xl:mt-6">
          <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
            <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
              <img src={TotalGameIcon} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">Total game</span>
                <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                  {totalGameData}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
            <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
              <img src={GamesWon} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">Games Won</span>
                <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                  {gamesWonData}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
            <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
              <img src={GameLostIcon} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">Games lost</span>
                <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                  {gamesLostData}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
            <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
              <img src={Trophy} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">Win ratio</span>
                <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                  {winRatioData.toLocaleString("de-DE", { minimumFractionDigits: 2 })} %
                </span>
              </div>
            </div>
          </div>
          <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
            <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
              <img src={RedDropBoxIcon} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">
                  Lootboxes open
                </span>
                <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                  {lootboxesOpenData}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
            <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
              <img src={ReferralsIcon} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">Referrals</span>
                <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                  {referralsData}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:px-2 xs:py-6 2xl:h-28 2xl:p-8">
            <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
              <img src={DolarFrame} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">
                  Total wagered
                </span>
                <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                  {totalWageredData.toLocaleString("de-DE", { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
            <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
              <img src={DolarFrame} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">Net Profit</span>
                <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                  + {netProfitData.toLocaleString("de-DE", { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>
          <span className="mt-8 font-sans text-xl font-bold text-custom_white_1">Links</span>
        </div>
        <div className="mt-6 flex gap-6">
          <img src={Twiter} className=""></img>
          <img src={DiscordIcon} className=""></img>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
