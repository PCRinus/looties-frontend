import React from "react";
import AnonymousInfoRectangle from "../../assets/AnonymousInfoRectangle.svg";

const AnonymousInfoBubble: React.FC = () => {
  return (
    <div className="absolute  top-[-85px] z-[1] h-[77.286px] rounded-lg bg-[#2C3034] 2xl:w-[318px]">
      <p className="p-4 font-sans text-xs font-medium text-custom_gray_2">
        Anonymous mode hides your username and <br />
        profile picture from appearing in the game
        <br /> participant lists and live drops.
      </p>
      <img className="relative top-[-11px] ml-[146px]" src={AnonymousInfoRectangle} alt="Rectangle"></img>
    </div>
  );
};

export default AnonymousInfoBubble;
