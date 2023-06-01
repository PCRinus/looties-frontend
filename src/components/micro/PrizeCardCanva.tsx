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
    <div className="custom-style-gray flex items-start justify-center rounded-xl xs:h-[200px] xs:w-[160px] 2xl:h-[270px] 2xl:w-64">
      <div className="content flex-column items-start">
        <div className="mb-0.5 mt-1 flex h-12 flex-row items-center justify-between rounded-t-xl bg-[#1E2124]">
          {/* <div className="flex ">
            {cardTitle === "Coins" && <img src={DolarFrame} alt="Icon for Coins" className="ml-3" />}
            <span className="p-2 font-sans font-bold text-custom_white_1 ">{cardTitle}</span>
            {cardTitle === "Open" && <img src={InfoIcon} alt="Icon for Open" />}
          </div>

          <div className="flex items-center p-4 font-sans font-bold text-[#888888]">
            <span>{cardInfo}</span>
          </div> */}
        </div>
        <div className={`custom-gradient-bg-color flex rounded-b-xl  2xl:h-[220px] 2xl:w-[248px]  ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PrizeCardCanva;
