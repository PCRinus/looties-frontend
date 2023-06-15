import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { GameResponsiblyDaysButton } from "../micro/GameResponsiblyDaysButton";
import { GameResponsiblySelfExcludeButton } from "../micro/GameResponsiblySelfExcludeButton";

export const GameResponsiblyCard: FC = () => {
  const [selectedDaysOption, setSelectedDaysOption] = useState<number>(1);

  const DAYS_OPTIONS = [1, 7, 14, 30, 60, 90];

  const handleSelectedDaysOption = (selectedOption: number) => {
    setSelectedDaysOption(selectedOption);
  };

  const handleSelfExclude = () => {
    console.log(selectedDaysOption);
  };

  return (
    <div className="rounded-xl bg-gradient-to-b from-red-700 to-gray-900 pl-1 pr-1 pt-1">
      <div
        className="flex w-full flex-col items-center justify-center rounded-xl  "
        style={{ background: "linear-gradient(360deg, #272727 0%, rgba(21, 23, 25, 0) 100%), #191D20" }}
      >
        <div className="flex h-20 w-full flex-row items-center justify-center rounded-t-lg border-b-2 border-solid border-[#2C3034] bg-[#1E2124] ">
          <h1 className="text-2xl font-bold text-[#DFDFDF]">Game responsibly</h1>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-8 px-14 py-8">
          <h2 className="text-center text-base font-semibold text-[#848B8D]">
            On looties.app, we allow you to temporarily self-exclude from the site. This means that you will not be able
            to play, deposit and withdraw, claim rewards and free cases, or view other players games. By self-excluding,
            you agree that it is not reversible. If you wish to get a permament ban, please contact our support{" "}
            <span className="text-[#F03033]">
              {/* TODO: add link*/}
              <Link to="/">here</Link>
            </span>
            .
          </h2>
          <hr className="h-px w-full border border-solid border-[#2C3034] bg-[#2C3034]" />
          <div className="flex flex-row items-center justify-center gap-4">
            {DAYS_OPTIONS.map((option, index) => {
              return (
                <GameResponsiblyDaysButton
                  key={index}
                  numberOfExcludedDays={option}
                  isSelected={option === selectedDaysOption}
                  handleSelectedDaysOption={handleSelectedDaysOption}
                />
              );
            })}
          </div>
          <GameResponsiblySelfExcludeButton handleSelfExclude={handleSelfExclude} />
        </div>
      </div>
    </div>
  );
};
