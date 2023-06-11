import { useDispatch } from "react-redux";
import walletIcon from "../../assets/Wallet.svg";
import { ReduxEvents } from "../../reducers/events";

interface IWalletButtonProps {
  className?: string;
}

export const ConnectWalletButton: React.FC<IWalletButtonProps> = ({ className }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={`flex flex-row items-center justify-center gap-1 rounded-xl bg-gradient-to-t from-[#F03033] to-[#E5383B] px-4 py-2 font-bold text-white ${className}`}
      onClick={() => {
        dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "Wallet" } });
      }}
    >
      <img src={walletIcon} alt="Wallet icon"></img>
      <span className="whitespace-nowrap">Connect wallet</span>
    </button>
  );
};
