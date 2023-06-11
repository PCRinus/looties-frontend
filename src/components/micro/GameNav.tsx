import React from "react";

interface GameNavProps {
  img: string;
  text: string;
}

const GameNav: React.FC<GameNavProps> = ({ img, text }) => {
  return (
    <div>
      <img src={img} alt="img-svg" className="relative" />
      <p className="absolute font-sans text-base font-semibold text-custom_gray_2 2xl:mt-0">{text}</p>
    </div>
  );
};

export default GameNav;
