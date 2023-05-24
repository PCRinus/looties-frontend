import React from "react";

interface Props {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<Props> = ({ onSearchChange }) => {
  return (
    <input
      className="h-12 w-[302px] rounded-xl border-[1px,solid,#2C3034] bg-[#1E2023] px-6 py-[14px] text-[#888888] "
      type="text"
      placeholder="Search..."
      onChange={onSearchChange}
    />
  );
};
