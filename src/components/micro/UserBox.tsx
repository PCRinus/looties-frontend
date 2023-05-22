import React from "react";
import GradientBorderBoxBlue from "./GradientBorderBoxBlue";
import UserIcon from "../../assets/UserIcon.svg";
import DolarFrame from "../../assets/DolarFrameMini.svg";
import RefreshIcon from "../../assets/Refresh.svg";
import GradientBorderBoxRed from "./GradientBorderBoxRed";
import GradientBorderBoxPurple from "./GradientBorderBoxPurple";

export const UserBoxBlue: React.FC = () => {
  return (
    <div>
      <GradientBorderBoxBlue className="flex relative">
        <img src={UserIcon} alt="user-icon-svg" className="ml-2"></img>
        <div className="ml-2 flex-col justify-normal items-center">
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
        <img
          className="absolute top-[10px] right-[13px]"
          src={RefreshIcon}
          alt="refresh-icon-svg"
        ></img>
      </GradientBorderBoxBlue>
    </div>
  );
};

export const UserBoxRed: React.FC = () => {
  return (
    <div>
      <GradientBorderBoxRed className="flex relative">
        <img src={UserIcon} alt="user-icon-svg" className="ml-2"></img>
        <div className="ml-2 flex-col justify-normal items-center">
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
        <img
          className="absolute top-[10px] right-[13px]"
          src={RefreshIcon}
          alt="refresh-icon-svg"
        ></img>
      </GradientBorderBoxRed>
    </div>
  );
};

export const UserBoxPurple: React.FC = () => {
  return (
    <div>
      <GradientBorderBoxPurple className="flex relative">
        <img src={UserIcon} alt="user-icon-svg" className="ml-2"></img>
        <div className="ml-2 flex-col justify-normal items-center">
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
        <img
          className="absolute top-[10px] right-[13px]"
          src={RefreshIcon}
          alt="refresh-icon-svg"
        ></img>
      </GradientBorderBoxPurple>
    </div>
  );
};
