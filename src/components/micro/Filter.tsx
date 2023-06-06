interface Props {
  filterName: string;
  options: string[];
  handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

export const Filter: React.FC<Props> = ({ filterName, options, handleFilterChange, value }) => {
  return (
    <div className="flex h-[48px] flex-row items-center justify-center gap-1 whitespace-nowrap rounded-xl bg-[#2C3034] px-5 py-[14px] xs:my-2 xs:w-full 2xl:my-0 2xl:w-auto">
        <span className="text-[#848B8D] font-semibold">{filterName}</span>
        <select className="bg-[#2C3034] font-semibold text-[#F03033] outline-0" onChange={handleFilterChange}>
        {options.map((option, index) => (
          <option key={index} className={`${value === option ? "text-[#F03033]" : "text-[#848B8D]"} font-semibold`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
