import React from "react";
import GradientBorderBoxBlue from "./GradientBorderBoxBlue";
import UserIcon from "../../assets/UserIcon.svg";
import DolarFrame from "../../assets/DolarFrameMini.svg";
import RefreshIcon from "../../assets/Refresh.svg";
import GradientBorderBoxRed from "./GradientBorderBoxRed";
import GradientBorderBoxPurple from "./GradientBorderBoxPurple";

export const UserBoxBlue: React.FC = () => {
  return (
    <div className="mt-4">
      <GradientBorderBoxBlue className="relative flex">
        <img src={UserIcon} alt="user-icon-svg" className="ml-2"></img>
        <div className="ml-2flex-col items-center justify-normal">
          <label className=" block font-sans font-semibold text-custom_white_1">
            {/* {name} */}
            Looties #122
          </label>
          <div className="flex">
            <img className="mr-1" src={DolarFrame} alt="dolar-svg-icon"></img>
            <label className="block font-sans text-[12px] font-light text-red-500">
              {/* Level {level} */}
              24,144 Coins
            </label>
          </div>
        </div>
        <img className="absolute right-[13px] top-[10px]" src={RefreshIcon} alt="refresh-icon-svg"></img>
      </GradientBorderBoxBlue>
    </div>
  );
};

export const UserBoxRed: React.FC = () => {
  return (
    <div className="mt-4">
      <GradientBorderBoxRed className="relative flex">
        <img src={UserIcon} alt="user-icon-svg" className="ml-2"></img>
        <div className="ml-2 flex-col items-center justify-normal">
          <label className=" block font-sans font-semibold text-custom_white_1">
            {/* {name} */}
            Looties #122
          </label>
          <div className="flex">
            <img className="mr-1" src={DolarFrame} alt="dolar-svg-icon"></img>
            <label className="block font-sans text-[12px] font-light text-red-500">
              {/* Level {level} */}
              24,144 Coins
            </label>
          </div>
        </div>
        <img className="absolute right-[13px] top-[10px]" src={RefreshIcon} alt="refresh-icon-svg"></img>
      </GradientBorderBoxRed>
    </div>
  );
};

export const UserBoxPurple: React.FC = () => {
  return (
    <div className="mt-4">
      <GradientBorderBoxPurple className="relative flex">
        <img src={UserIcon} alt="user-icon-svg" className="ml-2"></img>
        <div className="ml-2 flex-col items-center justify-normal">
          <label className=" block font-sans font-semibold text-custom_white_1">
            {/* {name} */}
            Looties #122
          </label>
          <div className="flex">
            <img className="mr-1" src={DolarFrame} alt="dolar-svg-icon"></img>
            <label className="block font-sans text-[12px] font-light text-red-500">
              {/* Level {level} */}
              24,144 Coins
            </label>
          </div>
        </div>
        <img className="absolute right-[13px] top-[10px]" src={RefreshIcon} alt="refresh-icon-svg"></img>
      </GradientBorderBoxPurple>
    </div>
  );
};
