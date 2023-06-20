import { ReduxEvents } from "../../reducers/events";
import { ReactComponent as Close } from "../../assets/Close.svg";
import { useDispatch } from "react-redux";
import ProvablyFairIcon from "../../assets/ProvablyFair.svg";

const UserProfile = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="flex--column autoheight modal--content w-[100vw] md:w-[837px]"
      style={{ height: `calc(100vh - 144px)`, justifyContent: "start" }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="footer flex flex-row items-center justify-between gap-5 rounded-t-[12px] border-b-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4">
        <div className="mx-auto flex items-center gap-2 pl-[30px]">
          <span className="text-2xl font-bold">Twiiss1 profile</span>
        </div>
        <div
          className="close close--unset"
          onClick={() => {
            dispatch({ type: ReduxEvents.CloseModal });
          }}
        >
          <Close />
        </div>
      </div>
      <div
        className={`flex flex-col overflow-y-auto px-[32px] text-[14px] font-semibold leading-5 text-[#848B8D] sm:text-[16px] md:h-[325px] md:max-h-[500px]`}
      ></div>

      <div className="footer mt-auto flex flex-row items-center justify-center gap-5 rounded-b-[12px] border-t-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4">
        <button
          className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-[#2C3034] px-[10px] font-sans font-semibold text-white"
          onClick={() => {
            dispatch({ type: ReduxEvents.CloseModal });
          }}
        >
          Cancel
        </button>
        <button
          className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white"
          onClick={() => {
            dispatch({ type: ReduxEvents.CloseModal });
          }}
        >
          I got it
        </button>
      </div>
    </div>
  );
};

export { UserProfile };
