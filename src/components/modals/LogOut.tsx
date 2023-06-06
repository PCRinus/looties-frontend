import React from "react";
import { ReduxEvents } from "../../reducers/events";
import RedLogoutIcon from "../../assets/RedLogoutIcon.svg";
import { ReactComponent as Close } from "../../assets/Close.svg";
import { useDispatch } from "react-redux";
import { useWallet } from "@solana/wallet-adapter-react";

const LogOut = () => {
  const dispatch = useDispatch();
  const { disconnect } = useWallet();

  const logOut = async () => {
    disconnect();
    dispatch({ type: ReduxEvents.CloseModal });
  };

  return (
    <div className="flex--column modal--content wallet" onClick={(e) => e.stopPropagation()}>
      <div
        className="close"
        onClick={() => {
          dispatch({ type: ReduxEvents.CloseModal });
        }}
      >
        <Close />
      </div>
      <div className="body flex h-[289px] flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-[20.5px]">
          <img src={RedLogoutIcon} alt="logo" className="w-[36px]" />
          <p className="max-w-[269px] text-center text-xl font-bold">Are you sure you want to log out?</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-5 rounded-b-[12px] border-t-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4">
        <button
          className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-[#2C3034] font-sans font-semibold text-white"
          onClick={logOut}
        >
          Yes
        </button>
        <button
          className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 font-sans font-semibold text-white"
          onClick={() => {
            dispatch({ type: ReduxEvents.CloseModal });
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export { LogOut };
