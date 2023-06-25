import React from "react";
import HeaderLogo from "../micro/HeaderLogo";
import HeaderUserBar from "../micro/HeaderUserBar";
import HeaderInfoBar from "../micro/HeaderInfoBar";
import { ConnectWalletButton } from "../micro/ConnectWalletButton";
import UserInfo from "../micro/UserInfo";
import { useWallet } from "@solana/wallet-adapter-react";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  const { connected } = useWallet();

  return (
    <div
      className="flex w-screen justify-start xs:h-20 2xl:h-[120px] "
      style={{ background: "linear-gradient(0deg, #1f2225 0%, rgba(31, 34, 37, 0) 100%)" }}
    >
      <div className="flex-shrink-0 xs:w-1/2 2xl:w-[378px]">
        <Link to="/">
          <HeaderLogo></HeaderLogo>
        </Link>
      </div>

      <div className="flex-shrink-1 h-full flex-grow flex-nowrap xs:hidden 2xl:block">
        <HeaderInfoBar></HeaderInfoBar>
        <HeaderUserBar isUserLoggedIn={connected}></HeaderUserBar>
      </div>
      <div className="w-full flex-row items-center justify-center xs:flex 2xl:hidden">
        {connected ? <UserInfo name={"Solanagamer11"} level={10} /> : <ConnectWalletButton />}
      </div>
    </div>
  );
};

export default Header;
