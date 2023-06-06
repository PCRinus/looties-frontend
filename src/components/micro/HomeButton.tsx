import React from "react";
import HomeIcon from "../../assets/HomeIcon.svg";
const HomeButton: React.FC = () => {
  return (
    <button className="flex items-center justify-center rounded-xl bg-custom_gray_1 xs:h-10 xs:w-24 xs:gap-2 2xl:h-12 2xl:w-12 2xl:gap-0">
      <img src={HomeIcon} alt="home-svg-icon" />
      <span className="font-sans text-base font-semibold text-custom_gray_2 xs:inline-block 2xl:hidden">Home</span>
    </button>
  );
};
export default HomeButton;
