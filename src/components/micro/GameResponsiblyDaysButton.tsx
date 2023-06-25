import { FC } from "react";

interface Props {
  numberOfExcludedDays: number;
  isSelected: boolean;
  handleSelectedDaysOption: (option: number) => void;
}

export const GameResponsiblyDaysButton: FC<Props> = ({
  numberOfExcludedDays,
  isSelected,
  handleSelectedDaysOption,
}) => {
  return (
    <button
      className="rounded-xl px-10 py-3 xs:w-full 2xl:w-auto"
      style={
        isSelected ? { background: "rgba(240, 48, 51, 0.2)", border: "1px solid #F03033" } : { background: "#2C3034" }
      }
      onClick={() => handleSelectedDaysOption(numberOfExcludedDays)}
    >
      <h3 className="text-base font-semibold" style={isSelected ? { color: "#F03033" } : { color: "#848B8D" }}>
        {numberOfExcludedDays} Days
      </h3>
    </button>
  );
};
