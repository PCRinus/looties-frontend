import React from "react";
import "../../styles/micro/HeaderLogo.scss";
import Logo from "../../assets/Looties_wordmark.png";
import LootiesLogo from "../../assets/Looties_wordmark 1.svg";

const HeaderLogo: React.FC = () => {
  return (
    <div className="logo-box absolute w-[378px] h-[120px] left-0 top-0 ">
      <img
        className="logo-img absolute w-[232px] h-[52px] left-[73px] top-[34px]"
        src={LootiesLogo}
        alt="image description"
      />
    </div>
  );
};

export default HeaderLogo;
