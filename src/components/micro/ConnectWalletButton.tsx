import walletIcon from "../../assets/Wallet.svg";

export const ConnectWalletButton: React.FC = () => {
  return (
    <button
      className="flex flex-row items-center justify-center gap-1 rounded-xl bg-gradient-to-t from-[#F03033] to-[#E5383B] px-4 py-2 font-bold text-white"
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <img src={walletIcon} alt="Wallet icon"></img>
      <span className="whitespace-nowrap">Connect wallet</span>
    </button>
  );
};
