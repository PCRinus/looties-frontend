import { ReduxEvents } from '../../reducers/events';
import { ReactComponent as Close } from '../../assets/Close.svg';
import { useDispatch } from "react-redux";
import ProvablyFairIcon from "../../assets/ProvablyFair.svg";
import React from "react";


const ProvablyFair = () => {

    const dispatch = useDispatch();

    return (
        <div className="flex--column w-[100vw] autoheight md:w-[837px] modal--content"   style={{ height: `calc(100vh - 144px)`, justifyContent: 'start' }} onClick={e => e.stopPropagation()}>
            <div className="flex flex-row footer bg-[#1A1D20] border-b-[1px] border-[#2C3034] justify-between items-center gap-5 px-8 py-4 rounded-t-[12px]">
                <div className="flex items-center gap-2 mx-auto pl-[30px]">
                    <img src={ProvablyFairIcon} alt="provably-svg-icon" />
                    <span className="font-bold text-2xl">Provably Fair</span>
                </div>
                <div className="close close--unset" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                    <Close />
                </div>
            </div>
            <div className={`noscroll flex flex-col px-[32px] md:h-[325px] overflow-y-auto md:max-h-[500px] font-semibold text-[14px] leading-5 sm:text-[16px] text-[#848B8D]`}>
                    <div className="mb-4">
                        To keep things fair and fun, we use a provably fair method to determine each item unboxed. This is a method of generating a random result using three separate elements, and it’s how we can prove the randomness of each game played.
                    </div>
                    <div className="mb-4">
                        If you played a physical game with dice or a pack of cards, you could guarantee the randomness by checking for six unique sides on the die, or 52 unique cards in the deck. Things work a bit differently online, but the concept is still kind of the same.
                    </div>
                    <div className="mb-4">
                        Ultimately it is still a game of luck, and we’ll be super honest: the more valuable the item is, the less chance you have of unboxing it. But this is all about giving you the power to check for fairness and keeping things fun.
                    </div>
                    <div className="font-bold text-white text-xl mb-4">
                        Generation
                    </div>
                    <div className="mb-4">
                        Each item you could potentially unbox is assigned a roll number - and there are 100,000,000 potential roll numbers to land on. Each roll is determined by a combination of three individual elements:
                    </div>
                    <div className="mb-4">
                        Client Seed: This is a passphrase that comes from you and your browser. You’ll be able to see it before you unbox an item, and you can even change it before you play, if you feel like that’s going to help you.. You can also check other players’ seeds to see their outcomes.                    </div>
                   <div className="mb-4">
                       Server Seed: This is a really, really long number that comes from us. Before you play, we’ll show you an encrypted version, or hash, so that we can guarantee that it’s a predetermined result without actually allowing you to work out the outcome beforehand. It’s about keeping it fair for everyone, right?
                   </div>
                   <div className="mb-4">
                       Once you unbox an item, you’ll reveal the unhashed Server Seed, which you can then check against past games to verify the outcomes using that seed.
                   </div>
                   <div className="mb-4">
                       Play Count: This one’s pretty simple - it’s the number of games you’ve played. This number means that even if you had the same Client Seed and Server Seed from a previous game, the outcome in your next game would still be different, since the Play Count would have increased by one.
                   </div>
                   <div className="font-bold text-white text-xl mb-4">
                       Probability
                   </div>
                   <div className="mb-4">
                    Since each item, or outcome, is assigned to a roll number, the probability of a particular outcome will never change - even if you played 100,000,000 times. There’s no pattern or method used to determine when the big ticket items will be won - it’s sheer randomness.
                   </div>
                   <div className="mb-4">
                       To see the probability of each individual item within a box, click ‘Toggle Rates’ at the top to see the chance displayed as a percentage.
                   </div>
                   <div className="mb-4">
                       For more info, please see the <span className="text-[#F03033] cursor-pointer underline">Provably Fair info section.</span>
                   </div>
            </div>

            <div className="pointer-events-none absolute bottom-[77px] w-full h-[136px] bg-gradient-to-b from-transparent to-[#151719]"></div>

            <div className="flex flex-row footer bg-[#1A1D20] border-t-[1px] border-[#2C3034] justify-center items-center gap-5 px-8 py-4 rounded-b-[12px] mt-auto">
                <button className="basis-[50%] h-[44.57px] px-[10px] bg-[#2C3034] rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                    Cancel
                </button>
                <button className="basis-[50%] leading-4 px-[10px] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                    I got it
                </button>

            </div>
        </div>
    )
};

export { ProvablyFair }

