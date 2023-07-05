import { FC } from "react";
import CloseButton from "../../assets/Close.svg";
import ChatMessageRectangle from "../../assets/ChatMessageRectangle.svg";

interface Props {
    closeInfo: () => void;
}

export const LiveDropsInfo: FC<Props> = ({ closeInfo }) => {
    return (
        <div className="absolute z-[1] xs:top-8 2xl:top-[154px] 2xl:left-[57px] xs:left-3">
            <img className="relative top-[10px] xs:ml-[125px] 2xl:ml-16" src={ChatMessageRectangle} alt="Rectangle"></img>

            <div className=" flex flex-row items-start justify-between rounded-md border border-solid border-[#2C3034] bg-[#1E2023] p-3  xs:h-[221px] xs:w-[90vw]  2xl:h-[221px] 2xl:w-[251px]">
                <div className="flex flex-col items-start justify-between">
                    <span className="text-center text-xs font-bold text-[#DFDFDF] ">Live drops chances</span>
                    <ul className="ml-4 mt-4 list-disc flex flex-col gap-2 text-xs font-bold text-[#848B8D]">
                        <li className="text-[#F03033]">0,01% - 1%</li>
                        <li className="text-[#614FD0]">1,01% - 5%</li>
                        <li className="text-[#307DF0]">5,01% - 20%</li>
                        <li className="text-[#00FFF0]">20,01% - 40%</li>
                        <li className="text-[#8EC831]">40,01% - 60%</li>
                        <li className="text-[#E3CB4C]">60,01% - 80%</li>
                        <li className="text-[#888888]">80,01% - 99,99%</li>
                    </ul>
                </div>
                <div className="flex shrink-0 flex-col items-start justify-start">
                    <button className="rounded-md bg-[#2C3034] p-2 h-6 w-6" onClick={closeInfo}>
                        <img src={CloseButton} alt="Close"></img>
                    </button>
                </div>
            </div>
        </div>
    );
};
