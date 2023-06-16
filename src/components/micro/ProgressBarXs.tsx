import React from "react";

interface IPropsXs {
  currentLevel: number;
  currentXP: number;
  nextLevel: number;
  xpNeeded: number;
  progressPercentage: number;
  fontClass: string;
  textClass: string;
}

const ProgressBarXs: React.FC<IPropsXs> = ({
  currentLevel,
  currentXP,
  nextLevel,
  xpNeeded,
  progressPercentage,
  fontClass,
  textClass,
}) => (
  <>
    <div className="flex flex-row justify-between">
      <p className={`${fontClass} ${textClass}`}>
        Level:<span className="text-[#F030BA]"> {currentLevel}</span>
      </p>
      <p className={`${fontClass} ${textClass}`}>
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
      <p className={`${fontClass} ${textClass}`}>{currentXP.toLocaleString()} XP</p>
      <p className={`${fontClass} ${textClass}`}>{xpNeeded.toLocaleString()} XP</p>
    </div>
  </>
);

export default ProgressBarXs;
