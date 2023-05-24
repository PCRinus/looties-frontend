import React from "react";
import LogoutIcon from "../../assets/LogoutImg.svg";
const LogoutButton: React.FC = () => {
  return (
    <div>
      <button className="top-56 flex h-12 w-12 items-center justify-center rounded-xl bg-custom_gray_1">
        <img src={LogoutIcon} alt="logout-svg-icon" />
      </button>
    </div>
  );
};

export default LogoutButton;
