import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GameResponsiblyDaysButton } from "../micro/GameResponsiblyDaysButton";
import { GameResponsiblySelfExcludeButton } from "../micro/GameResponsiblySelfExcludeButton";
import RedArrowDown from "../../assets/RedArrowDown.svg";
import axios from "axios";
import { userIdMock } from "../../mocks/userIdMock";

export const GameResponsiblyCard: FC = () => {
  const [userSelfExcluded, setUserSelfExcluded] = useState<boolean>(false);
  const [selectedDaysOption, setSelectedDaysOption] = useState<number>(1);
  const [showSelectOptionsMobile, setShowSelectOptionsMobile] = useState<boolean>(false);

  const DAYS_OPTIONS = [1, 7, 14, 30, 60, 90];

  const handleSelectedDaysOption = (selectedOption: number) => {
    //  on mobile: once option is selected, close options
    if (showSelectOptionsMobile) {
      setShowSelectOptionsMobile(false);
    }
    setSelectedDaysOption(selectedOption);
  };

  const toggleMobileOptions = () => {
    setShowSelectOptionsMobile(!showSelectOptionsMobile);
  };

  const handleSelfExclude = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/game-responsibly`, {
        userId: userIdMock,
        timePeriodDays: selectedDaysOption,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log("Self exclude error: ", err));
  };

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/game-responsibly?userId=${userIdMock}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        // setUserSelfExcluded(res);
      })
      .catch((err) => {
        console.log("Error while checking user exclusion: ", err);
      });
  }, []);

  return (
    <div className="rounded-xl bg-gradient-to-b from-red-700 to-gray-900 pl-1 pr-1 pt-1">
      <div
        className="flex w-full flex-col items-center justify-center rounded-xl  "
        style={{ background: "linear-gradient(360deg, #272727 0%, rgba(21, 23, 25, 0) 100%), #191D20" }}
      >
        <div className="flex w-full flex-row items-center justify-center rounded-t-lg border-b-2 border-solid border-[#2C3034] bg-[#1E2124] xs:h-16 2xl:h-20 ">
          <h1 className="font-bold text-[#DFDFDF] xs:text-xl 2xl:text-2xl">Game responsibly</h1>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-8 xs:px-6 xs:py-8 2xl:px-14 2xl:py-8">
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
          <hr className="h-px w-full border border-solid border-[#2C3034] bg-[#2C3034] xs:hidden 2xl:block" />
          {/* days selector for desktop view */}
          {userSelfExcluded === false ? (
            <div className=" flex-row items-center justify-center gap-4 xs:hidden 2xl:flex">
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
          ) : (
            <h1 className="font-bold text-[#DFDFDF] xs:text-xl 2xl:text-2xl">User already excluded</h1>
          )}
          {/* days selector for mobile view */}
          {userSelfExcluded === false && (
            <button
              className=" w-full flex-row items-center justify-center gap-2 rounded-lg border border-solid border-[#F03033] bg-[#F03033]  bg-opacity-20 text-base font-semibold text-[#F03033] xs:flex xs:py-2 2xl:hidden 2xl:py-3"
              onClick={toggleMobileOptions}
            >
              <h2>{selectedDaysOption} Days</h2>
              <img
                className={`${showSelectOptionsMobile ? "rotate-180" : ""}`}
                src={RedArrowDown}
                alt="Open days exclusion options"
              ></img>
            </button>
          )}
          {userSelfExcluded === false &&
            showSelectOptionsMobile &&
            DAYS_OPTIONS.map((option, index) => {
              return option !== selectedDaysOption ? (
                <GameResponsiblyDaysButton
                  key={index}
                  numberOfExcludedDays={option}
                  isSelected={option === selectedDaysOption}
                  handleSelectedDaysOption={handleSelectedDaysOption}
                />
              ) : null;
            })}
          {userSelfExcluded === false && <GameResponsiblySelfExcludeButton handleSelfExclude={handleSelfExclude} />}
        </div>
      </div>
    </div>
  );
};
