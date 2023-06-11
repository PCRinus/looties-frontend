import React, { useEffect, useState } from "react";
import UserProgressBar from "../micro/UserProgressBar";
import { ConnectWalletButton } from "./ConnectWalletButton";

interface WelcomeBoxProps {
  isLoggedIn: boolean;
  username: string;
  text: string;
}

const WelcomeBoxContent: React.FC<WelcomeBoxProps> = ({ isLoggedIn, username, text }) => {
  return (
    <div className="flex flex-col items-center px-4 xs:justify-evenly 2xl:justify-center">
      {isLoggedIn ? (
        <>
          <h2 className="whitespace-nowrap font-sans font-bold xs:mt-[52px] xs:text-xl 2xl:mb-[-10px] 2xl:text-2xl">
            <span className="text-custom_white_1">Welcome back, </span>
            <span className="text-custom_red_1">{username} !</span>
          </h2>
          <p className="mb-8 text-center font-sans font-semibold text-custom_gray_2 xs:text-base 2xl:mt-6 2xl:text-base">
            {text}
          </p>
          <UserProgressBar currentLevel={99} currentXP={278295} nextLevel={100} xpNeeded={400000} />
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default WelcomeBoxContent;
