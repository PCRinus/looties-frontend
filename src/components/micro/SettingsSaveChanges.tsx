import React from "react";

const SettingsSaveChanges: React.FC = () => {
  return (
    <>
      <div className="flex h-20 items-center justify-center gap-4  rounded-b-xl border-t-2 border-custom_gray_1 bg-[#1A1D20] xs:mx-6 xs:w-auto  2xl:w-full">
        <button className=" h-12 flex-shrink-0 basis-[45%] rounded-xl bg-[#2C3034] font-sans text-base font-semibold text-custom_gray_2">
          Cancel
        </button>
        <button className=" h-12 flex-shrink-0 basis-[45%] rounded-xl bg-gradient-to-t from-red-700 to-red-500 font-sans text-base font-semibold text-white">
          Save changes
        </button>
      </div>
    </>
  );
};

export default SettingsSaveChanges;
