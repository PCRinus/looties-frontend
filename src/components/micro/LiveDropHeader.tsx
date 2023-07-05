import React, {useState} from "react";
import "../../styles/micro/LiveDropHeader.scss";
import InfoIcon from "../../assets/InfoIcon.svg";
// import {useDispatch} from "react-redux";
import { LiveDropsInfo } from "./LiveDropsInfo";


interface Props {
  itemsOrder: string;
  handleItemsOrder: (orderBy: string) => void;
}

const LiveDropHeader: React.FC<Props> = ({ itemsOrder, handleItemsOrder }) => {

  const [showInfo, setShowInfo] = useState(false);

  const handleInfoButtonClick = () => {
    setShowInfo(true);
  };

  const handleInfoClose = () => {
    setShowInfo(false);
  };

  return (
    <div className="livedrop-header flex h-[60px] w-full justify-between">
      <div className="flex items-center justify-center">
        <label className="ml-8 font-sans font-semibold text-custom_white_1">Live drops</label>
        <span className="ml-[9.87px] flex justify-center items-center">
          {/*<img src={InfoIcon} alt="info-icon-svg"></img>*/}
          <button id="info-button" onClick={handleInfoButtonClick}>
          <img src={InfoIcon} alt="Info"></img>
        </button>
          <i className=""></i>
        </span>
      </div>
      <div className="mr-8 flex items-center justify-center">
        <button
          className={`mr-[12px] font-sans font-semibold ${
            itemsOrder === "top" ? "text-red-500" : "text-custom_white_1"
          }`}
          onClick={() => handleItemsOrder("top")}
        >
          Top
        </button>
        <button
          className={`font-sans font-semibold text-custom_white_1 ${
            itemsOrder === "all" ? "text-red-500" : "text-custom_white_1"
          }`}
          onClick={() => handleItemsOrder("all")}
        >
          All
        </button>
      </div>
      {showInfo && <LiveDropsInfo closeInfo={handleInfoClose} />}
    </div>
  );
};

export default LiveDropHeader;
