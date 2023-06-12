import React, { ReactNode } from "react";
import "../../styles/micro/NftGradientCanva.scss";

interface INftCanvaProps {
  children?: ReactNode;
  className?: string;
  cardTitle?: string;
  cardInfo?: string | number;
}

const NftGradientCanva: React.FC<INftCanvaProps> = ({ children, className, cardTitle, cardInfo }) => {
  return (
    <div className="custom-style-gray flex items-start justify-center rounded-xl xs:h-[270px] xs:w-[160px] md:max-2xl:h-[400px] md:max-2xl:w-64 2xl:h-[400px] 2xl:w-64">
      <div className=" content flex-column items-start">
        <div className="mt-1 flex flex-row items-center justify-between rounded-t-xl bg-[#1E2124] xs:mb-[1px] xs:mt-0.5  xs:h-[32px] xs:w-[155px]  md:max-2xl:mb-0.5 md:max-2xl:ml-0 md:max-2xl:h-12 md:max-2xl:w-[248px] 2xl:mb-0.5 2xl:ml-0 2xl:h-12 2xl:w-[248px]">
          <span className="p-4 font-sans font-bold text-custom_white_1 xs:text-xs md:max-2xl:text-base 2xl:text-base">
            {cardTitle}
          </span>
          <span className=" p-4 font-sans font-bold text-[#888888] xs:text-[8px] md:max-2xl:text-base 2xl:text-base">
            {cardInfo}
          </span>
        </div>
        <div
          className={`custom-gradient-bg-color flex rounded-b-xl xs:h-[231px] xs:w-[155px] md:max-2xl:h-[340px] md:max-2xl:w-[248px] 2xl:h-[340px] 2xl:w-[248px] ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default NftGradientCanva;
