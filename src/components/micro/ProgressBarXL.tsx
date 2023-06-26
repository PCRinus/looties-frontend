import React from "react";

interface IPropsXL {
  currentLevel: number;
  currentXP: number;
  nextLevel: number;
  xpNeeded: number;
  progressPercentage: number;
}

const ProgressBarXL: React.FC<IPropsXL> = ({ currentLevel, currentXP, nextLevel, xpNeeded, progressPercentage }) => (
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
);

export default ProgressBarXL;
