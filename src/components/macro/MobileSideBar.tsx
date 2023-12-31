import { FC, useEffect } from 'react';
import ClassicButton from '../micro/ClassicButton';
import LootBoxesButton from '../micro/LootBoxesButton';
import HomeButton from '../micro/HomeButton';
import { SidebarInfobar } from '../micro/SidebarInfobar';
import { MobileSocialButtons } from '../micro/MobileSocialButtons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import LogoutButton from '../micro/LogoutButton';
import { CreateLootboxButton } from '../micro/CreateLootboxButton';
import { BalanceViewMobile } from '../micro/BalanceViewMobile';
import { ReduxEvents } from '../../reducers/events';
import OutsideClickHandler from 'react-outside-click-handler';

export const MobileSidebar: FC = () => {
  const openSidebar = useSelector((state: any) => state.ui.openSidebar);
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch({ type: ReduxEvents.CloseSidebar });
  }, [location.pathname]);

  return (
    <OutsideClickHandler
      onOutsideClick={(event) => {
        if (event.target instanceof Element) {
          if (event.target.id !== 'toggle_sidebar_button') {
            dispatch({ type: ReduxEvents.CloseSidebar });
          }
        } else {
          dispatch({ type: ReduxEvents.CloseSidebar });
        }
      }}
    >
      <div
        className={`${
          openSidebar ? 'right-0' : 'right-[-50vw]'
        } top-20 z-50 h-[calc(100vh-80px-64px)] bg-[#1A1D20] transition-all duration-200 xs:absolute xs:w-[50vw] md:w-[25vw] 2xl:hidden`}
      >
        <div className={`${openSidebar ? 'flex' : 'hidden'}  mt-4 h-full flex-col items-center justify-start `}>
          {user.id && user.profile && (
            <>
              <div className="flex w-5/6 flex-col items-end justify-start gap-3">
                <BalanceViewMobile />
                <CreateLootboxButton />
              </div>
              <hr className="my-4 block h-px w-3/4 shrink-0 border-0 bg-[#34373A]" />
            </>
          )}

          <SidebarInfobar />
          <hr className="my-4 block h-px w-3/4 shrink-0 border-0 bg-[#34373A]" />
          <MobileSocialButtons />
          {user.id && user.profile && (
            <>
              <hr className="my-4 block h-px w-3/4 shrink-0 border-0 bg-[#34373A]" />
              <div className="flex w-3/4 flex-col items-end justify-start gap-3">
                <LogoutButton />
              </div>
            </>
          )}
        </div>
      </div>
    </OutsideClickHandler>
  );
};
