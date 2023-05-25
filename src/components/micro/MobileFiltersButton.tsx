import React from "react";
interface Props {
  appliedFiltersCount: number;
  openFilters: boolean;
  toggleFilters: (event: any) => void;
}
export const MobileFiltersButton: React.FC<Props> = ({ appliedFiltersCount, openFilters = false, toggleFilters }) => {
  return (
    <button
      className={`flex h-10 w-[42vw] flex-row items-center justify-center gap-1 justify-self-end rounded-xl 2xl:hidden ${
        openFilters ? "bg-[#F03033] bg-opacity-20" : "bg-[#2C3034]"
      }`}
      onClick={toggleFilters}
    >
      <div className="h-4 w-4">
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 2.75C8 1.64543 7.10457 0.75 6 0.75C4.89543 0.75 4 1.64543 4 2.75C4 3.85457 4.89543 4.75 6 4.75C7.10457 4.75 8 3.85457 8 2.75Z"
            fill={openFilters ? "#F03033" : "#848B8D"}
          />
          <path
            d="M15.25 3.5C15.6642 3.5 16 3.16421 16 2.75C16 2.33579 15.6642 2 15.25 2L9.75 2C9.33579 2 9 2.33579 9 2.75C9 3.16421 9.33579 3.5 9.75 3.5L15.25 3.5Z"
            fill={openFilters ? "#F03033" : "#848B8D"}
          />
          <path
            d="M3 2.75C3 3.16421 2.66421 3.5 2.25 3.5H0.75C0.335786 3.5 0 3.16421 0 2.75C0 2.33579 0.335786 2 0.75 2L2.25 2C2.66421 2 3 2.33579 3 2.75Z"
            fill={openFilters ? "#F03033" : "#848B8D"}
          />
          <path
            d="M2.25 16C2.66421 16 3 15.6642 3 15.25C3 14.8358 2.66421 14.5 2.25 14.5H0.75C0.335786 14.5 0 14.8358 0 15.25C0 15.6642 0.335786 16 0.75 16H2.25Z"
            fill={openFilters ? "#F03033" : "#848B8D"}
          />
          <path
            d="M15.25 16C15.6642 16 16 15.6642 16 15.25C16 14.8358 15.6642 14.5 15.25 14.5H9.75C9.33579 14.5 9 14.8358 9 15.25C9 15.6642 9.33579 16 9.75 16H15.25Z"
            fill={openFilters ? "#F03033" : "#848B8D"}
          />
          <path
            d="M7 9C7 9.41421 6.66421 9.75 6.25 9.75H0.75C0.335786 9.75 0 9.41421 0 9C0 8.58579 0.335786 8.25 0.75 8.25L6.25 8.25C6.66421 8.25 7 8.58579 7 9Z"
            fill={openFilters ? "#F03033" : "#848B8D"}
          />
          <path
            d="M15.25 9.75C15.6642 9.75 16 9.41421 16 9C16 8.58579 15.6642 8.25 15.25 8.25H13.75C13.3358 8.25 13 8.58579 13 9C13 9.41421 13.3358 9.75 13.75 9.75H15.25Z"
            fill={openFilters ? "#F03033" : "#848B8D"}
          />
          <path
            d="M12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11C11.1046 11 12 10.1046 12 9Z"
            fill={openFilters ? "#F03033" : "#848B8D"}
          />
          <path
            d="M8 15.25C8 14.1454 7.10457 13.25 6 13.25C4.89543 13.25 4 14.1454 4 15.25C4 16.3546 4.89543 17.25 6 17.25C7.10457 17.25 8 16.3546 8 15.25Z"
            fill={openFilters ? "#F03033" : "#848B8D"}
          />
        </svg>
      </div>

      <span className={openFilters ? "text-[#F03033]" : "text-[#848B8D]"}>Filters</span>
      <span className={appliedFiltersCount !== 0 || openFilters ? "text-[#F03033]" : "text-[#848B8D] "}>
        ({appliedFiltersCount})
      </span>
    </button>
  );
};
