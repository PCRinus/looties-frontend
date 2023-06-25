import React from "react";
import ProgressBarXs from "../micro/ProgressBarXs";
import Icon from "../../assets/IconTransparent.svg";
import PhotoButton from "../../assets/PhotoButton.svg";

interface IProps {
  username: string;
  data: string;
  level: number;
  currentLevel: number;
  currentXP: number;
  nextLevel: number;
  xpNeeded: number;
}

const UserProfileCard: React.FC<IProps> = ({ currentLevel, currentXP, nextLevel, xpNeeded, username, data, level }) => {
  const progressPercentage = (currentXP / xpNeeded) * 100;
  return (
    <div className="flex h-full min-h-[205px] w-full flex-col items-center justify-center gap-4 rounded-xl border-[1px] border-solid border-[#2C3034] 2xl:h-[214px] 2xl:w-full ">
      <div className="relative flex gap-4 xs:w-full xs:px-6 2xl:mx-8 2xl:mt-8 2xl:h-1/2 2xl:w-[-webkit-fill-available] 2xl:justify-normal 2xl:p-0">
        <img src={Icon} alt="transparent-icon-svg" />
        <img src={PhotoButton} alt="photo-icon-svg" className="absolute xs:left-14 xs:top-8 2xl:left-8 2xl:top-9" />
        <div className="flex flex-col">
          <span className="font-sans text-xl font-bold text-custom_white_1">{username}</span>
          <span className="mt-1 font-sans text-xs font-semibold text-custom_gray_2">Member since {data}</span>
          <span className="font-sans text-base font-semibold text-custom_red_1 2xl:mt-3">Level {level}</span>
        </div>
      </div>
      <div className="w-[-webkit-fill-available] xs:mx-6 2xl:mx-8 2xl:mb-8 2xl:mt-4 2xl:h-1/2">
        <ProgressBarXs
          currentLevel={currentLevel}
          currentXP={currentXP}
          nextLevel={nextLevel}
          xpNeeded={xpNeeded}
          progressPercentage={progressPercentage}
          fontClass="font-sans font-semibold"
          textClass="text-custom_gray_2 text-xs"
        />
      </div>
    </div>
  );
};

export default UserProfileCard;
