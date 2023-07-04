import React from "react";
import LogoutWhite from "../assets/LogoutWhite.svg";
import { useAuth } from "../hooks/useAuth";
import { useSelector } from "react-redux";

export const BannedPage = () => {
  const { disconnectWallet } = useAuth();
  const user = useSelector((state: any) => state.user);

  return (
    <div className="flex w-screen flex-row items-center justify-center xs:h-[calc(100vh-80px-64px)] 2xl:h-[calc(100vh-120px)]">
      <div className="flex h-full max-h-full w-full flex-col gap-[16px] overflow-y-scroll bg-[#151719] xs:p-6 2xl:p-[52px]">
        <div className="flex h-full max-h-full w-full flex-col items-center justify-center gap-4 bg-[#151719]">
          <div className="text-center text-[40px] font-bold text-[#F03033]">You are banned</div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="text-center text-[24px] font-semibold text-white">
              You have been temporarily banned from Looties.App.
            </div>
            <div className="text-center text-[20px] font-bold text-white">
              <span className="text-[#F03033]">Reason:</span> Self exclude
            </div>
            <div className="text-center text-[20px] font-bold text-white">
              <span className="text-[#F03033]">Banned until:</span> {new Date(user.excludedUntil).toString()}
            </div>
            <div className="text-center text-[20px] font-bold text-white">
              <span className="text-[#F03033]">Account ID:</span>
              {user.id}
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <button
              className="flex h-[44.57px] w-[150px] items-center justify-center gap-2 rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white"
              onClick={() => {
                disconnectWallet();
              }}
            >
              <span className="font-bold">Log out</span>
              <img src={LogoutWhite} className="invert-0" alt="Logout Icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
