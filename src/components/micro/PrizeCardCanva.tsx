import React, { ReactNode } from "react";
import InfoIcon from "../../assets/InfoIcon.svg"; // replace with the correct path
import DolarFrame from "../../assets/Frame.svg"; // replace with the correct path

interface IPrizeCardCanva {
  children?: ReactNode;
  className?: string;
  cardTitle?: string;
  cardInfo?: string;
}

const PrizeCardCanva: React.FC<IPrizeCardCanva> = ({ children, className, cardTitle, cardInfo }) => {
  return (
    <div className="custom-style-gray flex h-[270px] w-64 items-start justify-center rounded-xl">
      <div className="content flex-column items-start">
        <div className="mb-0.5 mt-1 flex h-12 flex-row items-center justify-between rounded-t-xl bg-[#1E2124]">
          <div className="flex ">
            {cardTitle === "Coins" && <img src={DolarFrame} alt="Icon for Coins" className="ml-3" />}
            <span className="p-2 font-sans font-bold text-custom_white_1 ">{cardTitle}</span>
            {cardTitle === "Open" && <img src={InfoIcon} alt="Icon for Open" />}
          </div>

          <div className="flex items-center p-4 font-sans font-bold text-[#888888]">
            <span>{cardInfo}</span>
          </div>
        </div>
        <div className={`custom-gradient-bg-color flex h-[220px] w-[248px] rounded-b-xl ${className}`}>{children}</div>
      </div>
    </div>
  );
};

export default PrizeCardCanva;
