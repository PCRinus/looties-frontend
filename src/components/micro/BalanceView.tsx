import React from "react";
import DolarFrame from "../../assets/DolarFrame.svg";
import Wallet from "../../assets/Wallet.svg";
const BalanceView: React.FC = () => {
  return (
    <>
      <div className="top-[56px] flex  h-12 w-[272px] items-center justify-center rounded-xl bg-custom_gray_1">
        <img className="ml-5" src={DolarFrame} alt="dolar-svg-icon"></img>
        <div className="ml-2 flex font-sans font-semibold text-white">0.00 Coins</div>

        <button className="ml-6 flex h-10 w-[104px] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 font-sans font-semibold text-white">
          <img className="mr-1 " src={Wallet} alt="wallet-svg-icon" />
          Wallet
        </button>
      </div>
    </>
  );
};

export default BalanceView;
