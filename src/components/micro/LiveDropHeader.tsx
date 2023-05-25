import React from "react";
import "../../styles/micro/LiveDropHeader.scss";
import InfoIcon from "../../assets/InfoIcon.svg";
const LiveDropHeader: React.FC = () => {
  return (
    <div className="livedrop-header h-[60px] w-full flex justify-between">
      <div className="flex justify-center items-center">
        <label className="ml-8 font-sans font-semibold text-custom_white_1">
          Live drops
        </label>
        <span className="ml-[9.87px]">
          <img src={InfoIcon} alt="info-icon-svg"></img>
          <i className=""></i>
        </span>
      </div>
      <div className="mr-8 flex justify-center items-center">
        <label className="mr-[12px] font-sans font-semibold text-red-500">
          Top
        </label>
        <label className="font-sans font-semibold text-custom_white_1">
          All
        </label>
      </div>
    </div>
  );
};

export default LiveDropHeader;
