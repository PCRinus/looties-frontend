import React from "react";
import LogoutWhite from "../assets/LogoutWhite.svg";

import { Link } from "react-router-dom";

export const BannedPage = () => {

    return (<div
        className="flex w-screen flex-row items-center justify-center xs:h-[calc(100vh-80px-64px)] 2xl:h-[calc(100vh-120px)]">
        <div
            className="flex flex-col gap-[16px] h-full max-h-full w-full overflow-y-scroll bg-[#151719] xs:p-6 2xl:p-[52px]">
            <div className="h-full max-h-full w-full gap-4 bg-[#151719] flex flex-col justify-center items-center">
                <div className="text-[40px] text-center font-bold text-[#F03033]">You are banned</div>
                <div className="flex flex-col gap-2 justify-center items-center text-center">
                    <div className="text-center text-white font-semibold text-[24px]">
                        You have been temporarily banned from Looties.App.
                    </div>
                    <div className="text-center text-white font-bold text-[20px]">
                        <span className="text-[#F03033]">Reason:</span> Self exclude
                    </div>
                    <div className="text-center text-white font-bold text-[20px]">
                        <span className="text-[#F03033]">Banned until:</span> 6/29/2023, 3:39:13 PM
                    </div>
                    <div className="text-center text-white font-bold text-[20px]">
                        <span className="text-[#F03033]">Account ID:</span>618288
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <Link to="/">
                        <button
                            className="w-[150px] gap-2 leading-4 px-[10px] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans">
                    <span className="font-bold">
                                    Log out
                                    </span>
                            <img src={LogoutWhite} className="invert-0" alt="Logout Icon"/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>);
};
