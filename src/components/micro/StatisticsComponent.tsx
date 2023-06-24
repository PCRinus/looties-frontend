import React from "react";
import TotalGameIcon from "../../assets/TotalGameIcon.svg";
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
const StatisticsComponent: React.FC = () => {
  return (
    <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
      <div className=" flex h-full w-full justify-start xs:gap-3 2xl:gap-5">
        <img src={TotalGameIcon} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
        <div className="flex flex-col">
          <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">Total game</span>
          <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">4881</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsComponent;
