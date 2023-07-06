import React from "react";
import DolarFrame from "../../assets/DolarFrame.svg";
import Wallet from "../../assets/Wallet.svg";

import { ReduxEvents } from "../../reducers/events";
import { useDispatch, useSelector } from "react-redux";

const BalanceView: React.FC = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <div className="top-[56px] flex  h-12 w-[272px] items-center justify-center rounded-xl bg-custom_gray_1">
        <img className="ml-5" src={DolarFrame} alt="dolar-svg-icon"></img>
        <div className="ml-2 flex font-sans font-semibold text-white">
          {parseFloat(user.tokensBalance).toFixed(2)} Coins
        </div>

        <button
          className="ml-6 flex h-10 w-[104px] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 font-sans font-semibold text-white"
          onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "AddCoins" } })}
        >
          <img className="mr-1 " src={Wallet} alt="wallet-svg-icon" />
          Wallet
        </button>
      </div>
    </>
  );
};

export default BalanceView;
