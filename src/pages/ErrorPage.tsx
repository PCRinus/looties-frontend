import {Chat} from "../components/macro/Chat";
import LiveDropSidebar from "../components/micro/LiveDropSidebar";
import React from "react";
import ArrowLongRight from "../assets/ArrowLongRight.svg";
import { Link } from "react-router-dom";

export const ErrorPage = () => {

    return (<div
        className="flex w-screen flex-row items-center justify-center xs:h-[calc(100vh-80px-64px)] 2xl:h-[calc(100vh-120px)]">
        <LiveDropSidebar/>
        <div
            className="flex flex-col gap-[16px] h-full max-h-full w-full overflow-y-scroll bg-[#151719] xs:p-6 2xl:p-[52px]">
            <div className="h-full max-h-full w-full gap-4 bg-[#151719] flex flex-col justify-center items-center">
                <div className="text-xl text-center font-bold text-[#F03033]">Oh no... We lost this page</div>
                <div className="flex flex-col gap-2 justify-center items-center text-center">
                    <div className="text-center text-[#848B8D] font-semibold">
                        We searched everywhere but couldn't find what you're looking for.
                    </div>
                    <div className="text-center text-[#848B8D] font-semibold">
                        Let’s find a better place for you to go.
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <Link to="/">
                    <button
                        className="min-w-[204px] w-[200px] gap-2 leading-4 px-[10px] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans">
                    <span className="font-bold">
                                    Back to Home
                                    </span>
                        <img src={ArrowLongRight} alt="Support Chat"/>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
        <Chat/>
    </div>);
};
