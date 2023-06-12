import React from "react";
import ChatIcon from "../../assets/ChatIcon.svg";
import ChatIconRed from "../../assets/ChatIconRed.svg";
import DropBoxIcon from "../../assets/DropBoxIcon.svg";
import DropBoxIconRed from "../../assets/DropBoxIcon.svg";
import Star from "../../assets/Star.svg";
import StarRed from "../../assets/StarRed.svg";
import MobileMenuIcon from "../../assets/MobileMenuIcon.svg";
import MobileMenuIconRed from "../../assets/MobileMenuIconRed.svg";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReduxEvents } from "../../reducers/events";

export const Footer: React.FC = () => {
  // TODO: use location to display normal/red icons inside footer
  const location = useLocation();
  const dispatch = useDispatch();
  const openChat = useSelector((state: any) => state.ui.openChat);
  const openSidebar = useSelector((state: any) => state.ui.openSidebar);

  return (
    <div
      className="bottom-0 h-16 w-screen border-t border-custom_gray_1 xs:absolute 2xl:hidden"
      style={{ background: "linear-gradient(0deg, #1f2225 0%, rgba(31, 34, 37, 0) 100%)" }}
    >
      <div className="flex h-full flex-row items-center justify-center ">
        <div className="flex w-20 shrink-0 grow  flex-row items-center justify-center">
          <button onClick={() => dispatch({ type: ReduxEvents.ToggleChat })}>
            <img src={openChat ? ChatIconRed : ChatIcon} alt="Union icon"></img>
          </button>
        </div>
        <div className="flex w-[266px]  flex-row items-center justify-center gap-12">
          <button>
            <img src={DropBoxIcon} alt="DropBox icon"></img>
          </button>
          <button>
            <img src={Star} alt="Star icon"></img>
          </button>
        </div>
        <div className="flex w-20 shrink-0 grow flex-row items-center justify-center">
          <button onClick={() => dispatch({ type: ReduxEvents.ToggleSidebar })}>
            <img src={openSidebar ? MobileMenuIconRed : MobileMenuIcon} alt="Mobile menu icon"></img>
          </button>
        </div>
      </div>
    </div>
  );
};
