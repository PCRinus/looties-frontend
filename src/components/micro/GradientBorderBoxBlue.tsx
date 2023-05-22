import React, { ReactNode } from "react";
import "../../styles/micro/UserBox.scss";
import UserBoxDetailBlue from "../../assets/UserBoxDetailBlue.svg";

interface GradientBorderBoxBlueProps {
  children: ReactNode;
  className?: string;
}

const GradientBorderBoxBlue: React.FC<GradientBorderBoxBlueProps> = ({
  children,
  className,
}) => {
  return (
    <div className="w-[251px] h-[76px] custom-style-blue rounded-lg flex justify-center items-center">
      <div
        className={`w-[245px] h-[72px] bg-custom_black_1 custom-gradient-bg-color rounded-lg flex justify-normal items-center  ${className}`}
      >
        <img src={UserBoxDetailBlue} alt="detail.svg" />
        {children}
      </div>
    </div>
  );
};

export default GradientBorderBoxBlue;
