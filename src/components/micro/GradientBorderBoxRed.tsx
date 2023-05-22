import React, { ReactNode } from "react";
import "../../styles/micro/UserBox.scss";
import UserBoxDetailRed from "../../assets/UserBoxDetailRed.svg";

interface GradientBorderBoxProps {
  children: ReactNode;
  className?: string;
}

const GradientBorderBoxRed: React.FC<GradientBorderBoxProps> = ({
  children,
  className,
}) => {
  return (
    <div className="w-[251px] h-[76px] custom-style-red rounded-lg flex justify-center items-center">
      <div
        className={`w-[245px] h-[72px] bg-custom_black_1 custom-gradient-bg-color rounded-lg flex justify-normal items-center ${className}`}
      >
        <img src={UserBoxDetailRed} alt="detail.svg" />
        {children}
      </div>
    </div>
  );
};

export default GradientBorderBoxRed;
