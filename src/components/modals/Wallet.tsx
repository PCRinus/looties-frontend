import { useState } from "react";
import { ReduxEvents } from "../../reducers/events";
import { ReactComponent as Close } from "../../assets/Close.svg";
import LootiesLogo from "../../assets/Looties_wordmark 1.svg";
import MetaMask from "../../assets/MetaMask.svg";
import Solflare from "../../assets/Solflare.svg";
import RedArrowDown from "../../assets/RedArrowDown.svg";
import Phantom from "../../assets/Phantom.svg";
import Ledger from "../../assets/Ledger.svg";
import { useDispatch } from "react-redux";
import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletName, SolflareWalletName } from "@solana/wallet-adapter-wallets";
import { WalletName } from "@solana/wallet-adapter-base";

const Wallet = () => {
  const dispatch = useDispatch();

  const [seeMore, setSeeMore] = useState<boolean>(false);
  const { select, connect } = useWallet();

  const connectWallet = async (walletName: WalletName) => {
    await select(walletName);
    try {
      await connect();
    } catch (error) {
      console.log(`Unable to connect ${walletName} wallet: ${error} `);
    } finally {
      dispatch({ type: ReduxEvents.CloseModal });
    }
  };

  return (
    <div className="flex--column modal--content wallet" onClick={(e) => e.stopPropagation()}>
      <div
        className="close"
        onClick={() => {
          dispatch({ type: ReduxEvents.CloseModal });
        }}
      >
        <Close />
      </div>
      <div className={`flex--column body ${seeMore ? "h-[483px]" : "h-[355px]"}`}>
        <div className="type mt-6 flex flex-col items-center justify-center">
          <img className="logo-img left-[73px] top-[34px] h-[36px] w-[160.94px]" src={LootiesLogo} alt="logo" />
          <span className="font-sans text-xs font-semibold">Log Into Your Account</span>
        </div>
        <div className="text flex flex-col items-center justify-center gap-4">
          <button
            className="flex h-[44.57px] w-[270px] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 font-sans font-semibold text-white sm:w-[345px]"
            onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "Wallet" } })}
          >
            <img className="mr-2 " src={MetaMask} alt="metamask-svg-icon" />
            Continue with MetaMask
          </button>
          <button
            className="flex h-[44.57px] w-[270px] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 font-sans font-semibold text-white sm:w-[345px]"
            onClick={() => {
              connectWallet(SolflareWalletName);
            }}
          >
            <img className="mr-2 " src={Solflare} alt="solflare-svg-icon" />
            Continue with Solflare
          </button>
          {seeMore ? (
            <>
              <button
                className="flex h-[44.57px] w-[270px] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 font-sans font-semibold text-white sm:w-[345px]"
                onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "Wallet" } })}
              >
                <img className="mr-2 " src={Ledger} alt="ledger-svg-icon" />
                Continue with Ledger
              </button>
              <button
                className="flex h-[44.57px] w-[270px] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 font-sans font-semibold text-white sm:w-[345px]"
                onClick={() => {
                  connectWallet(PhantomWalletName);
                }}
              >
                <img className="mr-2 " src={Phantom} alt="phantom-svg-icon" />
                Continue with Phantom
              </button>
            </>
          ) : (
            <></>
          )}
          <div className="flex cursor-pointer flex-row gap-2" onClick={() => setSeeMore(!seeMore)}>
            <span className="font-sans text-base text-[#848B8D]">{seeMore ? "Less options" : "More options"}</span>
            <img src={RedArrowDown} alt="arrow-svg-icon" className={`${seeMore ? "rotate-180" : ""}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Wallet };
