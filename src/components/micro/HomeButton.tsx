import React from "react";
import HomeIcon from "../../assets/HomeIcon.svg";
const HomeButton: React.FC = () => {
  return (
    <>
      <button className="top-56 flex h-12 w-12 items-center justify-center rounded-xl bg-custom_gray_1">
        <img src={HomeIcon} alt="home-svg-icon" />
      </button>
    </>
  );
};

export default HomeButton;
