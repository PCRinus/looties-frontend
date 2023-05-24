import React from "react";
import "../../styles/micro/HeaderLogo.scss";
import LootiesLogo from "../../assets/Looties_wordmark 1.svg";

const HeaderLogo: React.FC = () => {
  return (
    <div className="logo-box flex h-[120px] items-center">
      <img className="mx-auto h-[52px] w-[232px]" src={LootiesLogo} alt="Looties logo" />
    </div>
  );
};

export default HeaderLogo;
