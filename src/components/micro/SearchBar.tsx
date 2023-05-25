import React from "react";

interface Props {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<Props> = ({ onSearchChange }) => {
  return (
    <input
      className="rounded-xl border  border-solid border-[#2C3034] bg-[#1E2023] px-6 py-[14px] text-[#888888] xs:h-10 xs:w-[42vw] xs:justify-self-start 2xl:h-12 2xl:w-[302px] 2xl:justify-self-center "
      type="text"
      placeholder="Search..."
      onChange={onSearchChange}
    />
  );
};
