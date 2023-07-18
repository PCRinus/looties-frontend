import React from 'react';
import '../../styles/micro/HeaderUserBar.scss';
import LogoutButton from './LogoutButton';
import UserInfo from './UserInfo';
import HomeButton from './HomeButton';
import LootBoxesButton from './LootBoxesButton';
import ClassicButton from './ClassicButton';
import ProvablyFairButton from './ProvablyFairButton';
import BalanceView from './BalanceView';
import { ConnectWalletButton } from './ConnectWalletButton';
import { Link } from 'react-router-dom';
import { CreateLootboxButton } from './CreateLootboxButton';
import { useSelector } from 'react-redux';

const HeaderUserBar: React.FC = () => {
  const user = useSelector((state: any) => state.user);
  return (
    <div className="user-box top-[40px] flex h-[80px] items-center justify-between">
      <div className="flex items-center justify-start">
        <div className="ml-8">
          <Link to="/">
            <HomeButton />
          </Link>
        </div>

        <div className="ml-4">
          <Link to="/lootboxes">
            <LootBoxesButton />
          </Link>
        </div>

        {/* <div className="ml-4">
          <Link to="/classic">
            <ClassicButton />
          </Link>
        </div> */}

        {/* <div className="ml-4">
          <ProvablyFairButton />
        </div> */}
      </div>

      {user.id && user.profile ? (
        <div className="flex items-center justify-start gap-4 px-4">
          <CreateLootboxButton />
          <div>
            <BalanceView />
          </div>

          <div className="">
            <UserInfo name={user.profile.userName} level={user.profile.level} />
          </div>
          <div className="">
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
