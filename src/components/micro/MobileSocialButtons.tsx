import React from "react";
import TwiterIcon from "../../assets/TwiterIcon.svg";
import DiscordIcon from "../../assets/DiscordSmallRedIcon.svg";

export const MobileSocialButtons: React.FC = () => {
  return (
    <div className="flex w-3/4 flex-row items-center justify-end gap-5">
      <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FLootiesNFT">
        <img src={TwiterIcon} alt="twiter-icon " />
      </a>
      <a href="https://discord.gg/looties">
        <img src={DiscordIcon} alt="instagram-icon" />
      </a>
    </div>
  );
};
