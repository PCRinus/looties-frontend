import React, { ReactNode } from "react";
import "../../styles/micro/NftGradientCanva.scss";
import Trash from "../../assets/Trash.svg";
import {useSelector} from "react-redux";

interface INftCanvaProps {
  children?: ReactNode;
  className?: string;
  cardTitle?: string;
  cardInfo?: string | number;
}

const NftGradientCanva: React.FC<INftCanvaProps> = ({ children, className, cardTitle, cardInfo }) => {

  const user = useSelector((state: any) => state.user);

  return (
    <div className="custom-style-gray flex items-start justify-center rounded-xl xs:h-[270px] xs:w-[160px] 2xl:h-[400px] 2xl:w-64">
      <div className=" content flex-column items-start">
        <div className="mt-1 flex flex-row items-center justify-between rounded-t-xl bg-[#1E2124] xs:mb-[1px] xs:mt-0.5  xs:h-[32px] xs:w-[155px] 2xl:mb-0.5 2xl:ml-0 2xl:h-12 2xl:w-[248px]">
          <span className="p-4 font-sans flex flex-row items-center justify-center gap-2 font-bold text-custom_white_1 xs:text-xs 2xl:text-base">{cardTitle}
            {user.id && user.profile ? (
                <button className="flex 2xl:h-7 2xl:w-7 w-5 h-5 gap-2 items-center justify-center rounded-lg bg-[#2C3034] font-sans font-semibold leading-4 text-white"
                >
                  <img src={Trash} className="2xl:h-4 2xl:w-4 h-3 w-3" alt="Trash"></img>
                </button>
            ) : (<div>
                </div>
            )}
          </span>
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

export default NftGradientCanva;
