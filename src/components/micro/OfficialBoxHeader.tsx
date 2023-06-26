import React from "react";
import BackButton from "./BackButton";
import VolumeButton from "./VolumeButton";
import ProvablyFairButton from "./ProvablyFairButton";
import "../../styles/micro/OfficialBoxBar.scss";
const OfficialBoxHeader = () => {
  return (
    <div className=" flex items-center justify-between  xs:h-[40px] xs:w-screen 2xl:h-12">
      <BackButton />
      <span className="xs:text[16px] font-sans font-bold text-custom_white_1 xs:ml-[45px] 2xl:mr-[-55px] 2xl:text-[20px]">
        Official Box
      </span>
      <div className="flex justify-center">
        <VolumeButton />
        <ProvablyFairButton />
      </div>
    </div>
  );
};

export default OfficialBoxHeader;
