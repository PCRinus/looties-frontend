import React from "react";

const TryItButton = () => {
  return (
    <button className="mr-4 flex items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:mr-3 xs:h-[32px] xs:w-[62px]  xs:rounded-lg 2xl:h-12 2xl:w-[98px]">
      <span className=" font-sans font-bold text-white xs:text-[12px] 2xl:text-[20px]">Try it</span>
    </button>
  );
};

export default TryItButton;
