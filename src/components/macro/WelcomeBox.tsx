import React from "react";
import GradientWBoxCanva from "../micro/GradientWBoxCanva";
import "../../styles/micro/GradientWBoxCanva.scss";
import OfficialBoxSpinner from "../micro/OfficialBoxSpinner";
import WelcomeBoxContent from "../micro/WelcomeBoxContent";
import Avatar1 from "../../assets/HomePageAvatar1.svg";
import Avatar2 from "../../assets/HomePageAvatar2.svg";
import { useSelector } from "react-redux";

const WelcomeBox: React.FC = () => {
  return (
    <div className="custom-gradient-bg-color-wbox flex w-full  rounded-xl border-solid border-[#2C3034] xs:h-[300px] xs:justify-center xs:border-2 2xl:h-[268px] 2xl:min-w-[1071px] 2xl:justify-between 2xl:border-4">
      <img
        src={Avatar2}
        alt="avatar-icon.svg"
        className="mt-[-109px] xs:hidden 2xl:mb-0 2xl:inline 2xl:h-[369px] 2xl:w-[369px]"
      />
      <WelcomeBoxContent />
      <img
        src={Avatar1}
        alt="avatar-icon-svg"
        className="mt-[-109px] xs:hidden 2xl:mb-0 2xl:inline 2xl:h-[369px] 2xl:w-[369px]"
      />
    </div>
  );
};

export default WelcomeBox;
