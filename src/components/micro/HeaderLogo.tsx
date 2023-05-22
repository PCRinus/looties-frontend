import React from "react";
import "../../styles/micro/HeaderLogo.scss";
import Logo from "../../assets/Looties_wordmark.png";
import LootiesLogo from "../../assets/Looties_wordmark 1.svg";

const HeaderLogo: React.FC = () => {
  return (
    <div className="logo-box h-[120px] flex items-center">
      <img
        className="w-[232px] h-[52px] mx-auto"
        src={LootiesLogo}
        alt="image description"
      />
    </div>
  );
};

export default HeaderLogo;
