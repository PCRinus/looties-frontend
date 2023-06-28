import { useState } from "react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label className="relative mr-5 inline-flex cursor-pointer items-center">
          <input type="checkbox" className="peer sr-only" checked={enabled} readOnly />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className={`peer h-4 w-[38px] rounded-full bg-custom_gray_1 after:absolute  after:left-[2px] after:top-[2px] after:h-3 after:w-3 after:rounded-full after:border after:border-black after:transition-all after:content-[''] peer-checked:bg-custom_red_1 peer-checked:after:translate-x-[22px] peer-checked:after:border-white peer-focus:ring-green-300 ${
              enabled ? "after:bg-white" : "after:border-black after:bg-black "
            }`}
          ></div>
        </label>
      </div>
    </div>
  );
}
