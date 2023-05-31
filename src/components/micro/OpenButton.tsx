import React, { ReactNode } from "react";

interface IProps {
  className?: string;
  children?: ReactNode;
}

const OpenButton: React.FC<IProps> = ({ className, children }) => {
  return (
    <button
      className={` rounded-lg bg-gradient-to-t from-red-700 to-red-500 font-sans font-semibold text-white ${className}`}
    >
      Open
    </button>
  );
};

export default OpenButton;
