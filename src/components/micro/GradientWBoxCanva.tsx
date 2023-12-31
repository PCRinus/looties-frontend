import React, { ReactNode } from "react";
import "../../styles/micro/NftGradientCanva.scss";

interface INftCanvaProps {
  children?: ReactNode;
  className?: string;
  cardTitle?: string;
  cardInfo?: string | number;
}

const GradientWBoxCanva: React.FC<INftCanvaProps> = ({ children, className, cardTitle, cardInfo }) => {
  return (
    <div className="custom-style-gray flex items-start justify-center rounded-xl xs:h-[270px] xs:w-[160px] 2xl:h-[400px] 2xl:w-full">
      <div className=" content flex-column items-start">
        <div className="mt-1 flex flex-row items-center justify-between rounded-t-xl bg-[#1E2124] xs:mb-[1px] xs:mt-0.5  xs:h-[32px] xs:w-[155px] 2xl:mb-0.5 2xl:ml-0 2xl:h-12 2xl:w-[248px]">
          <span className="p-4 font-sans font-bold text-custom_white_1 xs:text-xs 2xl:text-base">{cardTitle}</span>
          <span className=" p-4 font-sans font-bold text-[#888888] xs:text-[8px] 2xl:text-base">{cardInfo}</span>
        </div>
        <div
          className={`custom-gradient-bg-color-cards
           flex rounded-b-xl xs:h-[231px] xs:w-[155px] 2xl:h-[340px] 2xl:w-[248px] ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default GradientWBoxCanva;
