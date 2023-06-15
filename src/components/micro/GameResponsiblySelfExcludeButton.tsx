import { FC } from "react";

interface Props {
  handleSelfExclude: () => void;
}

export const GameResponsiblySelfExcludeButton: FC<Props> = ({ handleSelfExclude }) => {
  return (
    <div
      className="rounded-xl bg-[#BC2628] xs:mt-0 xs:w-full xs:text-center 2xl:mt-6 2xl:w-auto"
      style={{ boxShadow: "0px 4px 4px" }}
    >
      <div
        className="rounded-xl"
        style={{ background: "linear-gradient(180deg, #F03033 0%, rgba(229, 56, 59, 0) 100%)" }}
      >
        <button className="px-6 text-base font-bold text-white xs:py-2 2xl:py-4" onClick={handleSelfExclude}>
          Self exclude
        </button>
      </div>
    </div>
  );
};
