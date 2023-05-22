import React, { FC } from "react";
import LogoutIcon from "../../assets/LogoutImg.svg";
const LogoutButton: React.FC = () => {
  return (
    <div>
      <button className="h-12 w-12 top-56 rounded-xl bg-custom_gray_1 flex justify-center items-center">
        <img src={LogoutIcon} alt="logout-svg-icon" />
      </button>
    </div>
  );
};

export default LogoutButton;
