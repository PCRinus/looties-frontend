import React from "react";
import { ConnectWalletButton } from "../micro/ConnectWalletButton";
const MainConnectWallet: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 xs:justify-evenly 2xl:justify-center">
      <h2 className="font-sans font-bold xs:mb-[-30px] xs:text-xl 2xl:mb-[-10px] 2xl:text-2xl">
        <span className="text-custom_white_1">Welcome to</span>
        <span> </span>
        <span className="text-custom_red_1">Looties !</span>
      </h2>
      <p className="text-center font-sans font-semibold text-custom_gray_2 xs:text-base 2xl:mt-6 2xl:text-base">
        Simple connect your wallet, instant withdrawals and exclusive NFT Lootboxes and more.
      </p>
      <div className="xs:mt-[-23px] 2xl:mt-6">
        <ConnectWalletButton className="xs:h-[45px] xs:w-[300px]" />
      </div>
    </div>
  );
};

export default MainConnectWallet;
