import React from "react";
import BackButton from "./BackButton";
import VolumeButton from "./VolumeButton";
import ProvablyFairButton from "./ProvablyFairButton";
import "../../styles/micro/OfficialBoxBar.scss";
const OfficialBoxHeader = () => {
  return (
    <div className="box-gradient mx-[52px] mb-9 mt-[52px] flex h-12 items-center justify-between">
      <BackButton />
      <span className=" font-semibold text-custom_white_1">Official Box</span>
      <div className="flex justify-center">
        <VolumeButton />
        <ProvablyFairButton />
      </div>
    </div>
  );
};

export default OfficialBoxHeader;
