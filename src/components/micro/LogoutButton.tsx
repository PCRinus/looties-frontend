import React from "react";
import LogoutIcon from "../../assets/LogoutImg.svg";
import { ReduxEvents } from "../../reducers/events";
import { useDispatch } from "react-redux";
const LogoutButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "LogOut" } });
    dispatch({ type: ReduxEvents.ToggleSidebar });
  };

  return (
    <div>
      <button
        className="top-56 flex items-center justify-center gap-2 rounded-xl bg-custom_gray_1 xs:h-10 xs:w-28 2xl:h-12 2xl:w-12"
        onClick={handleLogout}
      >
        <img src={LogoutIcon} alt="logout-svg-icon" />
        <span className="text-base font-semibold text-[#848B8D] xs:block 2xl:hidden">Log out</span>
      </button>
    </div>
  );
};

export default LogoutButton;
