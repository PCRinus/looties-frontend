import React from "react";
import DolarFrame from "../../assets/DolarFrame.svg";
import Wallet from "../../assets/Wallet.svg";
const BalanceView: React.FC = () => {
  return (
    <>
      <div className="w-[272px] h-12  top-[56px] bg-custom_gray_1 rounded-xl flex justify-center items-center">
        <img className="ml-5" src={DolarFrame} alt="dolar-svg-icon"></img>
        <div className="ml-2 flex font-semibold text-white font-sans">
          0.00 Coins
        </div>

        <button className="ml-6 w-[104px] h-10 bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans">
          <img className="mr-1 " src={Wallet} alt="wallet-svg-icon" />
          Wallet
        </button>
      </div>
    </>
  );
};

export default BalanceView;
