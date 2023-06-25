import { ReduxEvents } from "../../reducers/events";
import { ReactComponent as Close } from "../../assets/Close.svg";
import { useDispatch } from "react-redux";
import ProvablyFairIcon from "../../assets/ProvablyFair.svg";
import React from "react";

const ProvablyFair = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="flex--column autoheight modal--content w-[100vw] md:w-[837px]"
      style={{ height: `calc(100vh - 144px)`, justifyContent: "start" }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="footer flex flex-row items-center justify-between gap-5 rounded-t-[12px] border-b-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4">
        <div className="mx-auto flex items-center gap-2 pl-[30px]">
          <img src={ProvablyFairIcon} alt="provably-svg-icon" />
          <span className="text-2xl font-bold">Provably Fair</span>
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
        className={`noscroll flex flex-col overflow-y-auto px-[32px] text-[14px] font-semibold leading-5 text-[#848B8D] sm:text-[16px] md:h-[325px] md:max-h-[500px]`}
      >
        <div className="mb-4">
          To keep things fair and fun, we use a provably fair method to determine each item unboxed. This is a method of
          generating a random result using three separate elements, and it’s how we can prove the randomness of each
          game played.
        </div>
        <div className="mb-4">
          If you played a physical game with dice or a pack of cards, you could guarantee the randomness by checking for
          six unique sides on the die, or 52 unique cards in the deck. Things work a bit differently online, but the
          concept is still kind of the same.
        </div>
        <div className="mb-4">
          Ultimately it is still a game of luck, and we’ll be super honest: the more valuable the item is, the less
          chance you have of unboxing it. But this is all about giving you the power to check for fairness and keeping
          things fun.
        </div>
        <div className="mb-4 text-xl font-bold text-white">Generation</div>
        <div className="mb-4">
          Each item you could potentially unbox is assigned a roll number - and there are 100,000,000 potential roll
          numbers to land on. Each roll is determined by a combination of three individual elements:
        </div>
        <div className="mb-4">
          Client Seed: This is a passphrase that comes from you and your browser. You’ll be able to see it before you
          unbox an item, and you can even change it before you play, if you feel like that’s going to help you.. You can
          also check other players’ seeds to see their outcomes.{" "}
        </div>
        <div className="mb-4">
          Server Seed: This is a really, really long number that comes from us. Before you play, we’ll show you an
          encrypted version, or hash, so that we can guarantee that it’s a predetermined result without actually
          allowing you to work out the outcome beforehand. It’s about keeping it fair for everyone, right?
        </div>
        <div className="mb-4">
          Once you unbox an item, you’ll reveal the unhashed Server Seed, which you can then check against past games to
          verify the outcomes using that seed.
        </div>
        <div className="mb-4">
          Play Count: This one’s pretty simple - it’s the number of games you’ve played. This number means that even if
          you had the same Client Seed and Server Seed from a previous game, the outcome in your next game would still
          be different, since the Play Count would have increased by one.
        </div>
        <div className="mb-4 text-xl font-bold text-white">Probability</div>
        <div className="mb-4">
          Since each item, or outcome, is assigned to a roll number, the probability of a particular outcome will never
          change - even if you played 100,000,000 times. There’s no pattern or method used to determine when the big
          ticket items will be won - it’s sheer randomness.
        </div>
        <div className="mb-4">
          To see the probability of each individual item within a box, click ‘Toggle Rates’ at the top to see the chance
          displayed as a percentage.
        </div>
        <div className="mb-4">
          For more info, please see the{" "}
          <span className="cursor-pointer text-[#F03033] underline">Provably Fair info section.</span>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[77px] h-[136px] w-full bg-gradient-to-b from-transparent to-[#151719]"></div>

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

export { ProvablyFair };
