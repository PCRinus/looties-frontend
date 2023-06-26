import React, { useEffect, useState } from "react";
import ProgressBarXL from "./ProgressBarXL";
import ProgressBarXs from "./ProgressBarXs";

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

  return (
    <div className="flex w-full flex-col">
      {windowWidth >= breakpoint2xl ? (
        <ProgressBarXL
          currentLevel={currentLevel}
          currentXP={currentXP}
          nextLevel={nextLevel}
          xpNeeded={xpNeeded}
          progressPercentage={progressPercentage}
        />
      ) : (
        <ProgressBarXs
          currentLevel={currentLevel}
          currentXP={currentXP}
          nextLevel={nextLevel}
          xpNeeded={xpNeeded}
          progressPercentage={progressPercentage}
          fontClass="font-sans font-semibold"
          textClass="text-custom_gray_2"
        />
      )}
    </div>
  );
};

export default UserProgressBar;
