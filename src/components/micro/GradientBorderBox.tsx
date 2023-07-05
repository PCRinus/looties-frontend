import React, { ReactNode, useState } from "react";
import "../../styles/micro/FlipCard.scss";
import { useSelector } from "react-redux";
import TestUserPicture from "../../assets/TestUserPicture.svg";
import RefreshIcon from "../../assets/Refresh.svg";

interface GradientBorderBoxBlueProps {
  children: ReactNode;
  className?: string;
  color: string;
}

const GradientBorderBox: React.FC<GradientBorderBoxBlueProps> = ({ children, className, color }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const user = useSelector((state: any) => state.user);

    const handleOpenBoxRefresh = () => {
        console.log('refreshed box');
    };

    return (
      <div className="flip-card" onClick={handleClick}>
          <div className={`flip-card-inner cursor-pointer ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>
          <div className={`flip-card-front cursor-pointer custom-gradient-bg-color flex h-[72px] w-[245px] items-center justify-normal rounded-lg bg-custom_black_1 ${className}`}>
               <svg width="4" height="56" viewBox="0 0 4 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                          d="M4 52C4 54.2091 2.20914 56 -4.76837e-06 56L1.27304e-07 -3.49692e-07C2.20914 -1.56562e-07 4 1.79086 4 4L4 52Z"
                          fill={color}
                      />
                    </svg>
                    {children}
          </div>
          <div className="flip-card-back custom-gradient-bg-color cursor-pointer  flex h-[72px] w-[245px] items-center justify-normal rounded-lg bg-custom_black_1">
                    <svg width="4" height="56" viewBox="0 0 4 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M4 52C4 54.2091 2.20914 56 -4.76837e-06 56L1.27304e-07 -3.49692e-07C2.20914 -1.56562e-07 4 1.79086 4 4L4 52Z"
                          fill={color}
                      />
                    </svg>
                  <span className="ml-2 text-start cursor-pointer">
                            <div className="container1 cursor-pointer flex items-center justify-center xs:text-xs 2xl:text-base">
        <button >
          <img className="user-picture h-12" src={TestUserPicture} alt="user-icon-svg"></img>
        </button>
        <div className="ml-2 flex-col items-center justify-normal cursor-pointer">
            {user.id && user.profile ? (
                <label className=" block font-sans font-semibold text-custom_white_1 cursor-pointer">{user?.profile?.userName}</label>
            ) : (            <label className=" block font-sans font-semibold text-custom_white_1 cursor-pointer">4J2X...P3TO</label>
            )}
                     <label className="block font-sans text-[12px] font-light text-red-500 cursor-pointer">NFT BOX NAME</label>
                   </div>
                    <button onClick={handleOpenBoxRefresh}>
                    <img className="absolute right-[13px] top-[10px]" src={RefreshIcon} alt="refresh-icon-svg"></img>
                    </button>
                 </div>
                  </span>
        </div>
      </div>
    </div>
  );
};

export default GradientBorderBox;
