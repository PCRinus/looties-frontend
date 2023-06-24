import React from "react";
import ProfileIcon from "../../assets/ProfileIcon.svg";
import SettingsIcon from "../../assets/SettingsIcon.svg";
import Games from "../../assets/Games.svg";
import DropBox from "../../assets/DropBoxIcon.svg";
import Afiliates from "../../assets/AfiliatesIcon.svg";
import TransactionIcon from "../../assets/TransactionIcon.svg";
import LogoutIcon from "../../assets/TransactionIcon.svg";
const ProfileOptions: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <button className="box-border flex items-center justify-normal rounded-xl border border-red-500 bg-red-500 bg-opacity-20 xs:h-10 xs:w-[139px] 2xl:h-12 2xl:w-full 2xl:pl-[27.75px]">
        <img src={ProfileIcon} alt="" />
        <span className="ml-2 font-sans text-base font-semibold leading-6 text-custom_red_1">Lootboxes</span>
      </button>
      <button className="flex items-center justify-normal rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:h-10 xs:w-[116px] 2xl:h-12 2xl:w-full 2xl:pl-[27.75px]">
        <img src={SettingsIcon} alt="" />
        <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Classic</span>
      </button>
      <button className="flex items-center justify-normal rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:h-10 xs:w-[116px] 2xl:h-12 2xl:w-full 2xl:pl-[27.75px]">
        <img src={Games} alt="" />
        <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Classic</span>
      </button>
      <button className="flex items-center justify-normal rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:h-10 xs:w-[116px] 2xl:h-12 2xl:w-full 2xl:pl-[27.75px]">
        <img src={DropBox} alt="" />
        <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Classic</span>
      </button>
      <button className="flex items-center justify-normal rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:h-10 xs:w-[116px] 2xl:h-12 2xl:w-full 2xl:pl-[27.75px]">
        <img src={Afiliates} alt="" />
        <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Classic</span>
      </button>
      <button className="flex items-center justify-normal rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:h-10 xs:w-[116px] 2xl:h-12 2xl:w-full 2xl:pl-[27.75px]">
        <img src={TransactionIcon} alt="" />
        <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Classic</span>
      </button>
      <button className="flex items-center justify-normal rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:h-10 xs:w-[116px] 2xl:h-12 2xl:w-full 2xl:pl-[27.75px]">
        <img src={LogoutIcon} alt="" />
        <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Classic</span>
      </button>
    </div>
  );
};

export default ProfileOptions;
