import React, { ReactNode } from "react";
import "../../styles/micro/UserBox.scss";
import UserBoxDetailRed from "../../assets/UserBoxDetailRed.svg";

interface GradientBorderBoxProps {
  children: ReactNode;
  className?: string;
}

const GradientBorderBoxRed: React.FC<GradientBorderBoxProps> = ({ children, className }) => {
  return (
    <div className="custom-style-red flex h-[76px] w-[251px] items-center justify-center rounded-lg">
      <div
        className={`custom-gradient-bg-color flex h-[72px] w-[245px] items-center justify-normal rounded-lg bg-custom_black_1 ${className}`}
      >
        <img src={UserBoxDetailRed} alt="detail.svg" />
        {children}
      </div>
    </div>
  );
};

export default GradientBorderBoxRed;
