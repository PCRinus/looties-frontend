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
    <div className="custom-style-gray flex h-[400px] w-64 items-start justify-center rounded-xl">
      <div className=" content flex-column items-start">
        <div className="mb-0.5 mt-1 flex h-12 flex-row items-center justify-between rounded-t-xl bg-[#1E2124]">
          <span className="p-4 font-sans font-bold text-custom_white_1 ">{cardTitle}</span>
          <span className="p-4 font-sans font-bold text-[#888888]">{cardInfo}</span>
        </div>
        <div className={`custom-gradient-bg-color flex h-[340px] w-[248px] rounded-b-xl ${className}`}>{children}</div>
      </div>
    </div>
  );
};

export default NftGradientCanva;
