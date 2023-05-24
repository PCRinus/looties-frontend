import React, { ReactNode } from "react";
import "../../styles/micro/UserBox.scss";
import UserBoxDetailBlue from "../../assets/UserBoxDetailBlue.svg";

interface GradientBorderBoxBlueProps {
  children: ReactNode;
  className?: string;
}

const GradientBorderBoxBlue: React.FC<GradientBorderBoxBlueProps> = ({ children, className }) => {
  return (
    <div className="custom-style-blue flex h-[76px] w-[251px] items-center justify-center rounded-lg">
      <div
        className={`custom-gradient-bg-color flex h-[72px] w-[245px] items-center justify-normal rounded-lg bg-custom_black_1  ${className}`}
      >
        <img src={UserBoxDetailBlue} alt="detail.svg" />
        {children}
      </div>
    </div>
  );
};

export default GradientBorderBoxBlue;
