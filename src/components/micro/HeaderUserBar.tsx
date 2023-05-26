import React from "react";
import "../../styles/micro/HeaderUserBar.scss";
import LogoutButton from "./LogoutButton";
import UserInfo from "./UserInfo";
import HomeButton from "./HomeButton";
import LootBoxesButton from "./LootBoxesButton";
import ClassicButton from "./ClassicButton";
import BalanceView from "./BalanceView";
import { ConnectWalletButton } from "./ConnectWalletButton";

interface Props {
  isUserLoggedIn: boolean;
}

const HeaderUserBar: React.FC<Props> = ({ isUserLoggedIn = false }) => {
  return (
    <div className="user-box top-[40px] flex h-[80px] items-center justify-between">
      <div className="flex items-center justify-start">
        <div className="ml-8">
          <HomeButton />
        </div>

        <div className="ml-4">
          <LootBoxesButton />
        </div>

        <div className="ml-4">
          <ClassicButton />
        </div>
      </div>

      {isUserLoggedIn ? (
        <div className="flex items-center justify-start">
          <div>
            <BalanceView />
          </div>

          <div className="ml-4">
            <UserInfo name={"Solanagamer11"} level={10} />
          </div>

          <div className="ml-4 mr-8">
            <LogoutButton />
          </div>
        </div>
      ) : (
        <div className="mr-8">
          <ConnectWalletButton />
        </div>
      )}
    </div>
  );
};

export default HeaderUserBar;
