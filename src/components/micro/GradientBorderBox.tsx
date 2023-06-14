import React, { ReactNode } from "react";

interface GradientBorderBoxBlueProps {
  children: ReactNode;
  className?: string;
  color: string;
}

const GradientBorderBox: React.FC<GradientBorderBoxBlueProps> = ({ children, className, color }) => {
  return (
    <div
      className="flex h-[76px] w-[251px] items-center justify-center rounded-lg"
      style={{ backgroundImage: `linear-gradient(270deg, rgba(44, 48, 52, 0), ${color}` }}
    >
      <div
        className={`custom-gradient-bg-color flex h-[72px] w-[245px] items-center justify-normal rounded-lg bg-custom_black_1  ${className}`}
      >
        <svg width="4" height="56" viewBox="0 0 4 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 52C4 54.2091 2.20914 56 -4.76837e-06 56L1.27304e-07 -3.49692e-07C2.20914 -1.56562e-07 4 1.79086 4 4L4 52Z"
            fill={color}
          />
        </svg>
        {children}
      </div>
    </div>
  );
};

export default GradientBorderBox;
