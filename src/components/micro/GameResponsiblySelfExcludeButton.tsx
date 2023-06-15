import { FC } from "react";

interface Props {
  handleSelfExclude: () => void;
}

export const GameResponsiblySelfExcludeButton: FC<Props> = ({ handleSelfExclude }) => {
  return (
    <div className="mt-6 rounded-xl bg-[#BC2628]" style={{ boxShadow: "0px 4px 4px" }}>
      <div
        className="rounded-xl"
        style={{ background: "linear-gradient(180deg, #F03033 0%, rgba(229, 56, 59, 0) 100%)" }}
      >
        <button className="px-6 py-4 text-base font-bold text-white" onClick={handleSelfExclude}>
          Self exclude
        </button>
      </div>
    </div>
  );
};
