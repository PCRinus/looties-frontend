import React from "react";
import ProfileIcon from "../../assets/ProfileIcon.svg";
const ProfileOptions: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <button className="box-border flex items-center justify-normal rounded-xl border border-red-500 bg-red-500 bg-opacity-20 xs:h-10 xs:w-[139px] 2xl:h-12 2xl:w-full 2xl:pl-[27.75px]">
        <img src={ProfileIcon} alt="" />
        <span className="ml-2 font-sans text-base font-semibold leading-6 text-custom_red_1">Lootboxes</span>
      </button>
      <button className="flex items-center justify-normal rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:h-10 xs:w-[116px] 2xl:h-12 2xl:w-full 2xl:pl-[27.75px]">
        <img src={ProfileIcon} alt="" />
        <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Classic</span>
      </button>
      <button className="flex items-center justify-normal rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:h-10 xs:w-[116px] 2xl:h-12 2xl:w-full 2xl:pl-[27.75px]">
        <img src={ProfileIcon} alt="" />
        <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Classic</span>
      </button>
      <button className="flex items-center justify-normal rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:h-10 xs:w-[116px] 2xl:h-12 2xl:w-full 2xl:pl-[27.75px]">
        <img src={ProfileIcon} alt="" />
        <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Classic</span>
      </button>
      <button className="flex items-center justify-normal rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:h-10 xs:w-[116px] 2xl:h-12 2xl:w-full 2xl:pl-[27.75px]">
        <img src={ProfileIcon} alt="" />
        <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Classic</span>
      </button>
      <button className="flex items-center justify-normal rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:h-10 xs:w-[116px] 2xl:h-12 2xl:w-full 2xl:pl-[27.75px]">
        <img src={ProfileIcon} alt="" />
        <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Classic</span>
      </button>
      <button className="flex items-center justify-normal rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:h-10 xs:w-[116px] 2xl:h-12 2xl:w-full 2xl:pl-[27.75px]">
        <img src={ProfileIcon} alt="" />
        <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Classic</span>
      </button>
    </div>
  );
};

export default ProfileOptions;
