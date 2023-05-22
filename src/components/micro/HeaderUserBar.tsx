import React from "react";
import "../../styles/micro/HeaderUserBar.scss";
import LogoutButton from "./LogoutButton";
import UserInfo from "./UserInfo";
import HomeButton from "./HomeButton";
import LootBoxesButton from "./LootBoxesButton";
import ClassicButton from "./ClassicButton";
import BalanceView from "./BalanceView";

const HeaderUserBar: React.FC = () => {
  return (
    <div className="user-box absolute w-[1542px] h-[80px] left-[378px] top-[40px] flex justify-between items-center">
      <div className="flex justify-start items-center">
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

      <div className="flex justify-start items-center">
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
    </div>
  );
};

export default HeaderUserBar;
