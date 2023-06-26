import React, { useState, useEffect } from "react";
import SettingsNicknameChange from "../micro/SettingsNicknameChange";
import Twiter from "../../assets/Twiter.svg";
import DiscordIcon from "../../assets/DiscordIcon.svg";
import ProfileOptionsHeader from "../micro/ProfileOptionsHeader";
import SettingsSaveChanges from "../micro/SettingsSaveChanges";

const SettingsPage: React.FC = () => {
  const [isXsScreen, setIsXsScreen] = useState(window.matchMedia("(max-width: 576px)").matches);

  useEffect(() => {
    const screenSizeChange = () => {
      setIsXsScreen(window.matchMedia("(max-width: 1535px)").matches);
    };

    window.addEventListener("resize", screenSizeChange);

    return () => {
      window.removeEventListener("resize", screenSizeChange);
    };
  }, []);

  return (
    <>
      <div className="2xl:autoheight bottom-fade flex-auto rounded-xl bg-custom_black_2  xs:mx-6 xs:h-auto xs:min-h-full 2xl:min-h-0 2xl:w-full">
        <ProfileOptionsHeader title={"Settings"} />
        <div id="content" className=" h-full w-full xs:p-6 2xl:p-8">
          <div className="flex h-full w-full flex-col">
            <span className=" font-sans font-bold text-custom_white_1 xs:text-base 2xl:text-xl">
              User info<span className="text-[#767676]">- Accout ID: RC-618288</span>
            </span>
            <div className={isXsScreen ? "mt-4 grid grid-cols-1 gap-4" : "mt-6 grid grid-cols-2 grid-rows-1 gap-4"}>
              <SettingsNicknameChange />
              <SettingsNicknameChange />
            </div>
            <span className="font-sans font-bold text-custom_white_1 xs:mt-6 xs:text-base 2xl:mt-8 2xl:text-xl">
              Hidden options
            </span>
            <div className={isXsScreen ? "mt-4 grid grid-cols-1 gap-4" : "mt-6 grid grid-cols-2 grid-rows-2 gap-4"}>
              <SettingsNicknameChange />
              <SettingsNicknameChange />
              <SettingsNicknameChange />
              <SettingsNicknameChange />
            </div>
            <span className="font-sans text-xl font-bold text-custom_white_1 xs:mt-6 2xl:mt-8">Links</span>
            <div className="flex xs:mt-4 xs:gap-4 2xl:mt-8 2xl:gap-6">
              <img src={Twiter} className="xs:h-[40px] xs:w-[40px] 2xl:h-[48px] 2xl:w-[48px]"></img>
              <img src={DiscordIcon} className="xs:h-[40px] xs:w-[40px] 2xl:h-[48px] 2xl:w-[48px]"></img>
            </div>
            <div className=" h-10 w-full bg-custom_black_2 2xl:h-0"></div>
          </div>
        </div>
      </div>
      <SettingsSaveChanges />
    </>
  );
};

export default SettingsPage;
