import React, { useEffect, useState } from "react";

interface IProps {
  currentLevel: number;
  currentXP: number;
  nextLevel: number;
  xpNeeded: number;
}

const UserProgressBar: React.FC<IProps> = ({ currentLevel, currentXP, nextLevel, xpNeeded }) => {
  const progressPercentage = (currentXP / xpNeeded) * 100;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define the screen width for the 2xl breakpoint
  const breakpoint2xl = 1536;

  const breakpointXs = 0;
  return (
    <div className="flex w-full flex-col">
      {windowWidth >= breakpoint2xl ? (
        <>
          <div id="level-info" className="flex flex-row justify-between">
            <p className="test-base font-sans font-semibold text-custom_gray_2">
              Level:<span className="text-[#F030BA]"> {currentLevel}</span> • {currentXP.toLocaleString()} XP
            </p>
            <p className="test-base font-sans font-semibold text-custom_gray_2">
              Level:<span className="text-[#614FD0]"> {nextLevel}</span> • {xpNeeded.toLocaleString()} XP
            </p>
          </div>
          <div id="progress-bar" className="mt-2 h-2.5 w-full rounded-full bg-custom_gray_1">
            <div
              id="progress-bar-fill"
              className="h-2.5 w-full rounded-full bg-custom_red_1"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row justify-between">
            <p className="test-base font-sans font-semibold text-custom_gray_2">
              Level:<span className="text-[#F030BA]"> {currentLevel}</span>
            </p>
            <p className="test-base font-sans font-semibold text-custom_gray_2">
              Level:<span className="text-[#614FD0]"> {nextLevel}</span>
            </p>
          </div>
          <div id="progress-bar" className="my-2 h-2.5 w-full rounded-full bg-custom_gray_1">
            <div
              id="progress-bar-fill"
              className="h-2.5 w-full rounded-full bg-custom_red_1"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="flex flex-row justify-between">
            <p className="test-base font-sans font-semibold text-custom_gray_2">{currentXP.toLocaleString()} XP</p>
            <p className="test-base font-sans font-semibold text-custom_gray_2">{xpNeeded.toLocaleString()} XP</p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProgressBar;
