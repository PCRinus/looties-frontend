import React, { ReactNode } from "react";
import "../../styles/micro/OfficialBoxBar.scss";
interface IBoxProps {
  children: ReactNode;
  className?: string;
}

const GradientTitleBox: React.FC<IBoxProps> = ({ children, className }) => {
  return <div className={`box-gradient flex items-center justify-center ${className}`}>{children}</div>;
};

export default GradientTitleBox;
