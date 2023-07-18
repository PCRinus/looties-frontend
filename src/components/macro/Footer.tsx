import React from 'react';
import ChatIcon from '../../assets/ChatIcon.svg';
import ChatIconRed from '../../assets/ChatIconRed.svg';
import DropBoxIcon from '../../assets/DropBoxIcon.svg';
import DropBoxIconRed from '../../assets/DropboxIconRed.svg';
import Star from '../../assets/Star.svg';
import StarRed from '../../assets/StarRed.svg';
import MobileMenuIcon from '../../assets/MobileMenuIcon.svg';
import MobileMenuIconRed from '../../assets/MobileMenuIconRed.svg';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxEvents } from '../../reducers/events';
import HomeIcon from '../../assets/HomeIcon.svg';
import HomeIconRed from '../../assets/HomeIconRed.svg';

export const Footer: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const openChat = useSelector((state: any) => state.ui.openChat);
  const openSidebar = useSelector((state: any) => state.ui.openSidebar);

  console.log(openSidebar);

  return (
    <div
      className="bottom-0 h-16 w-screen border-t border-custom_gray_1 xs:absolute 2xl:hidden"
      style={{ background: 'linear-gradient(0deg, #1f2225 0%, rgba(31, 34, 37, 0) 100%)' }}
    >
      <div className="flex h-full flex-row items-center justify-center ">
        <div className="flex w-20 shrink-0 grow  flex-row items-center justify-center">
          <button
            onClick={() => {
              dispatch({ type: ReduxEvents.CloseModal });
              dispatch({ type: ReduxEvents.ToggleChat });
            }}
          >
            <img className="h-7 w-7" src={openChat ? ChatIconRed : ChatIcon} alt="Chat"></img>
          </button>
        </div>
        <div className="flex w-[266px]   flex-row items-center justify-center gap-9">
          <Link to="/lootboxes">
            <button onClick={() => dispatch({ type: ReduxEvents.CloseModal })}>
              <img
                className="h-7 w-7"
                src={location.pathname === '/lootboxes' && !openChat ? DropBoxIconRed : DropBoxIcon}
                alt="DropBox "
              ></img>
            </button>
          </Link>
          <Link to="/">
            <button onClick={() => dispatch({ type: ReduxEvents.CloseModal })}>
              <img
                className="h-7 w-7"
                src={location.pathname === '/' && !openChat ? HomeIconRed : HomeIcon}
                alt="Home"
              ></img>
            </button>
          </Link>
          <Link to="/classic">
            <button onClick={() => dispatch({ type: ReduxEvents.CloseModal })}>
              <img
                className="h-7 w-7"
                src={location.pathname === '/classic' && !openChat ? StarRed : Star}
                alt="Classic"
              ></img>
            </button>
          </Link>
        </div>
        <div className="flex w-20 shrink-0 grow flex-row items-center justify-center">
          <button
            onClick={() => {
              dispatch({ type: ReduxEvents.ToggleSidebar });
              dispatch({ type: ReduxEvents.CloseModal });
            }}
          >
            <img
              id="toggle_sidebar_button"
              className="h-7 w-7"
              src={openSidebar ? MobileMenuIconRed : MobileMenuIcon}
              alt="Open sidebar"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};
