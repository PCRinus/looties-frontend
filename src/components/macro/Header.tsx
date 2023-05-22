import React from "react";
import HeaderLogo from "../micro/HeaderLogo";
import HeaderUserBar from "../micro/HeaderUserBar";
import LogoutButton from "../micro/LogoutButton";
import "../../styles/macro/Header.scss";
import HeaderInfoBar from "../micro/HeaderInfoBar";
const Header: React.FC = () => {
  return (
    <div className="flex justify-start h-[120px]   w-screen ">
      <div className="w-[378px] flex-shrink-0">
        <HeaderLogo></HeaderLogo>
      </div>

      <div className="h-full flex-grow flex-nowrap flex-shrink-0">
        <HeaderInfoBar></HeaderInfoBar>
        <HeaderUserBar></HeaderUserBar>
      </div>
    </div>
  );
};

export default Header;
