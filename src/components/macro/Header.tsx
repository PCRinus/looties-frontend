import React from "react";
import HeaderLogo from "../micro/HeaderLogo";
import HeaderUserBar from "../micro/HeaderUserBar";
import LogoutButton from "../micro/LogoutButton";
import "../../styles/macro/Header.scss";
import HeaderInfoBar from "../micro/HeaderInfoBar";
const Header: React.FC = () => {
  return (
    // <header className="header">
    //   <div className="div1">
    //     <HeaderLogo />
    //   </div>
    //   <div className="div2">
    //   <HeaderInfoBar />
    //   </div>
    //   <div className="div3">
    //     <HeaderUserBar />
    //   </div>
    // </header>
    // <div className="flex">
    //   <div className="box1 w-1/5 h-[120px] lg:w-1/4 xl:w-1/5 flex">
    //     <HeaderLogo />
    //   </div>
    //   <div className="box2 w-4/5 flex-col bg-red-500">
    //     <div className=" bg-green-500 h-1/3"></div>
    //     <div className=" bg-blue-500 h-2/3"></div>
    //     <div></div>
    //     {/* <HeaderInfoBar />
    //     <HeaderUserBar /> */}
    //   </div>
    // </div>
    <>
      <HeaderLogo></HeaderLogo>
      <HeaderInfoBar></HeaderInfoBar>
      <HeaderUserBar></HeaderUserBar>
    </>
  );
};

export default Header;
