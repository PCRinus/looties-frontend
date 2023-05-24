interface Props {
  filterName: string;
  options: string[];
  handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

export const Filter: React.FC<Props> = ({ filterName, options, handleFilterChange, value }) => {
  return (
    <div className="flex h-[48px] w-[200px] flex-row items-center justify-center gap-1 rounded-xl bg-[#2C3034] px-[24px] py-[14px]">
      <span className="text-[#848B8D]">{filterName}</span>
      <select className="bg-[#2C3034] text-[#F03033]" onChange={handleFilterChange}>
        {options.map((option, index) => (
          <option key={index} value={option} selected={option === value ? true : false}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
