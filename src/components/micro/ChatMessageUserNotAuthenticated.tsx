import { FC } from "react";
import { ReactComponent as Close } from "../../assets/Close.svg";
import { ConnectWalletButton } from "./ConnectWalletButton";

interface Props {
  closeAction: () => void;
}

export const ChatMessageUserNotAuthenticated: FC<Props> = ({ closeAction }) => {
  return (
    <div className="absolute z-40 rounded-xl border-solid bg-gradient-to-b from-[#F03033] to-[#2C3034] pl-1 pr-1 pt-1 xs:w-[90vw] 2xl:w-[366px]">
      <div className="rounded-xl bg-gradient-to-t from-[#272727] to-[#151719] p-4 pb-12">
        <div className="flex flex-row items-center justify-end">
          <button className="rounded-lg bg-[#2C3034] p-3" onClick={closeAction}>
            <Close />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <h1 className=" text-center text-2xl text-[#F03033]">Connect your wallet</h1>
          <h2 className=" text-center text-base text-white">
            To be able to write in chat, you will have to connect your wallet
          </h2>
          <ConnectWalletButton />
        </div>
      </div>
    </div>
  );
};
