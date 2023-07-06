import React from "react";
import { useSelector } from "react-redux";

const SettingsWalletAddress: React.FC = () => {
  const userData = useSelector((state: any) => state.user);
  const walletAddress = userData.walletAddress;
  return (
    <>
      <div className="flex flex-col">
        <span className="font-sans text-xs font-semibold text-custom_gray_2 ">Wallet address</span>
        <div className="mt-2 flex h-12 w-full flex-shrink-0 items-center justify-center rounded-lg border-[1px] border-custom_gray_1 bg-[#1E2023] ">
          <span
            className=" mx-5 overflow-hidden whitespace-nowrap text-center font-sans text-base font-bold text-white"
            style={{ textOverflow: "ellipsis" }}
          >
            {walletAddress}
          </span>
        </div>
      </div>
    </>
  );
};

export default SettingsWalletAddress;
