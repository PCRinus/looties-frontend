import React, { ReactNode, useState } from "react";
import "../../styles/micro/FlipCard.scss";
import { useDispatch, useSelector } from "react-redux";
import TestUserPicture from "../../assets/TestUserPicture.svg";
import RefreshIcon from "../../assets/Refresh.svg";
import { ReduxEvents } from "../../reducers/events";

interface GradientBorderBoxBlueProps {
  children: ReactNode;
  className?: string;
  color: string;
}

const GradientBorderBox: React.FC<GradientBorderBoxBlueProps> = ({ children, className, color }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const user = useSelector((state: any) => state.user);

  const handleOpenBoxRefresh = () => {
    console.log("refreshed box");
  };

  const openProfileModal = (profileModalUserId: string) => {
    dispatch({ type: ReduxEvents.StoreModalData, payload: { data: profileModalUserId } });
    dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "UserProfile" } });
  };

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner cursor-pointer ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>
        <div
          className={`flip-card-front custom-gradient-bg-color flex h-[72px] w-[245px] cursor-pointer items-center justify-normal rounded-lg bg-custom_black_1 ${className}`}
        >
          <svg width="4" height="56" viewBox="0 0 4 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 52C4 54.2091 2.20914 56 -4.76837e-06 56L1.27304e-07 -3.49692e-07C2.20914 -1.56562e-07 4 1.79086 4 4L4 52Z"
              fill={color}
            />
          </svg>
          {children}
        </div>
        <div className="flip-card-back custom-gradient-bg-color flex  h-[72px] w-[245px] cursor-pointer items-center justify-normal rounded-lg bg-custom_black_1">
          <svg width="4" height="56" viewBox="0 0 4 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 52C4 54.2091 2.20914 56 -4.76837e-06 56L1.27304e-07 -3.49692e-07C2.20914 -1.56562e-07 4 1.79086 4 4L4 52Z"
              fill={color}
            />
          </svg>
          <span className="ml-2 cursor-pointer text-start">
            <div className="container1 flex cursor-pointer items-center justify-center xs:text-xs 2xl:text-base">
              <button>
                <img className="user-picture h-12" src={TestUserPicture} alt="user-icon-svg"></img>
              </button>
              <div className="ml-2 cursor-pointer flex-col items-center justify-normal">
                {/* TODO: refactor to always display real data when live-drops is fully implemented */}
                {user.id && user.profile ? (
                  // TODO: open real user profile modal after live drops is fully implemented and we have real user ids for each live-drop
                  <label
                    className=" block cursor-pointer font-sans font-semibold text-custom_white_1 hover:underline"
                    onClick={(event) => {
                      event.stopPropagation();
                      openProfileModal(user.id);
                    }}
                  >
                    {user?.profile?.userName}
                  </label>
                ) : (
                  <label className=" block cursor-pointer font-sans font-semibold text-custom_white_1">
                    4J2X...P3TO
                  </label>
                )}
                <label className="block cursor-pointer font-sans text-[12px] font-light text-red-500">
                  NFT BOX NAME
                </label>
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
