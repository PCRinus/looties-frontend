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
        <div className="mt-1 flex flex-row items-center justify-between rounded-t-xl bg-[#1E2124] xs:mb-[1px] xs:mt-0.5  xs:h-[32px] xs:w-[155px] 2xl:mb-0.5 2xl:ml-0 2xl:h-12 2xl:w-[248px]">
          <div className="flex items-center">
            {cardTitle === "Coins" && (
              <img src={DolarFrame} alt="Icon for Coins" className="xs:ml-2 xs:h-4 xs:w-4 2xl:ml-3 2xl:h-5 2xl:w-5" />
            )}
            <span className="p-2 font-sans font-bold text-custom_white_1 xs:text-xs 2xl:text-base">{cardTitle}</span>
            {cardTitle === "Open" && (
              <img src={InfoIcon} alt="Icon for Open" className="xs:ml-[-2px] xs:h-4 xs:w-4 2xl:ml-0 2xl:h-5 2xl:w-5" />
            )}
          </div>

          <div className="flex items-center p-4 font-sans font-bold leading-[10px] text-[#888888] xs:text-[8px] 2xl:text-base">
            <span>{cardInfo}</span>
          </div>
        </div>
        <div
          className={`custom-gradient-bg-color-cards flex rounded-b-xl xs:h-[158px] xs:w-[155px] 2xl:h-[220px] 2xl:w-[248px]  ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PrizeCardCanva;
