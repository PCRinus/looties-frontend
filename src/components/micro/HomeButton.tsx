import React from "react";
import HomeIcon from "../../assets/HomeIcon.svg";
const HomeButton: React.FC = () => {
  return (
    <>
      <button className="h-12 w-12 top-56 rounded-xl bg-custom_gray_1 flex justify-center items-center">
        <img src={HomeIcon} alt="home-svg-icon" />
      </button>
    </>
  );
};

export default HomeButton;
