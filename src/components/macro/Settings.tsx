import React, { useState, useEffect } from 'react';
import SettingsNicknameChange from '../micro/SettingsNicknameChange';
import SettingsWalletAddress from '../micro/SettingsWalletAddress';
import SettingsSoundEffects from '../micro/SettingsSoundEffects';
import SettingsNotifications from '../micro/SettingsNotifications';
import SettingsHideStatistics from '../micro/SettingsHideStatistics';
import SettingsAnonymousMode from '../micro/SettingsAnonymousMode';
import { useSelector } from 'react-redux';

const Settings: React.FC = () => {
  const [isXsScreen, setIsXsScreen] = useState(window.matchMedia('(max-width: 576px)').matches);
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    const screenSizeChange = () => {
      setIsXsScreen(window.matchMedia('(max-width: 1535px)').matches);
    };

    window.addEventListener('resize', screenSizeChange);

    return () => {
      window.removeEventListener('resize', screenSizeChange);
    };
  }, []);

  return (
    <>
      <div className="flex h-full w-full flex-col">
        <span className=" font-sans font-bold text-custom_white_1 xs:text-base 2xl:text-xl">
          User Info<span className="text-[#767676]">- Accout ID: {user.id} </span>
        </span>
        <div className={isXsScreen ? 'mt-4 grid grid-cols-1 gap-4' : 'mt-6 grid grid-cols-2 grid-rows-1 gap-4'}>
          <SettingsNicknameChange />
          <SettingsWalletAddress />
        </div>
        <span className="font-sans font-bold text-custom_white_1 xs:mt-6 xs:text-base 2xl:mt-8 2xl:text-xl">
          Hidden options
        </span>
        <div className={isXsScreen ? 'mt-4 grid grid-cols-1 gap-4' : 'mt-6 grid grid-cols-2 grid-rows-2 gap-4'}>
          <SettingsHideStatistics />
          <SettingsAnonymousMode />
          <SettingsNotifications />
          <SettingsSoundEffects />
        </div>
        {/* <span className="font-sans text-xl font-bold text-custom_white_1 xs:mt-6 2xl:mt-8">Links</span>
        <div className="flex xs:mt-4 xs:gap-4 2xl:mt-8 2xl:gap-6">
          <img src={Twiter} className="xs:h-[40px] xs:w-[40px] 2xl:h-[48px] 2xl:w-[48px]" alt="svg"></img>
          <img src={DiscordIcon} className="xs:h-[40px] xs:w-[40px] 2xl:h-[48px] 2xl:w-[48px]" alt="svg"></img>
        </div> */}
      </div>
    </>
  );
};

export default Settings;
