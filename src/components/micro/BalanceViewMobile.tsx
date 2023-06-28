import { useDispatch } from "react-redux";
import DolarFrame from "../../assets/DolarFrame.svg";
import Wallet from "../../assets/Wallet.svg";
import { ReduxEvents } from "../../reducers/events";

export const BalanceViewMobile = () => {
  const dispatch = useDispatch();
  return (
    <div className="max-w- flex w-full flex-col gap-2 rounded-lg bg-custom_gray_1 p-2">
      <div className="ml-2 flex flex-row items-center justify-start gap-2">
        <img src={DolarFrame} alt="dolar-svg-icon"></img>
        <div className="flex font-sans text-xs font-semibold text-white">0.00 Coins</div>
      </div>
      <button
        className=" flex h-10  items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 font-sans font-semibold text-white"
        onClick={() => {
          dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "AddCoins" } });
          dispatch({ type: ReduxEvents.ToggleSidebar });
        }}
      >
        <img className="mr-1 " src={Wallet} alt="wallet-svg-icon" />
        Wallet
      </button>
    </div>
  );
};
