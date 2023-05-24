import React from "react";
import HeaderLogo from "../micro/HeaderLogo";
import HeaderUserBar from "../micro/HeaderUserBar";
import "../../styles/macro/Header.scss";
import HeaderInfoBar from "../micro/HeaderInfoBar";
const Header: React.FC = () => {
  return (
    <div className="flex h-[120px] w-screen justify-start ">
      <div className="w-[378px] flex-shrink-0">
        <HeaderLogo></HeaderLogo>
      </div>

      <div className="h-full flex-shrink-0 flex-grow flex-nowrap">
        <HeaderInfoBar></HeaderInfoBar>
        <HeaderUserBar></HeaderUserBar>
      </div>
    </div>
  );
};

export default Header;
