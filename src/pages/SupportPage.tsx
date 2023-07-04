import {Chat} from "../components/macro/Chat";
import LiveDropSidebar from "../components/micro/LiveDropSidebar";
import React from "react";
import Copy from "../assets/Copy.svg";
import toast from "react-hot-toast";

export const SupportPage = () => {

    const copySupport = () => {
        const supportEmail = 'support@looties.app'
        navigator.clipboard.writeText(supportEmail)
            .then(() => {
                return toast.success('Email copied to clipboard!');
            })
            .catch((error) => {
                return toast.error('Failed to copy the code!');
            });
    };


    const copyMarketing = () => {
        const marketingEmail = 'marketing@looties.app'
        navigator.clipboard.writeText(marketingEmail)
            .then(() => {
                return toast.success('Email copied to clipboard!');
            })
            .catch((error) => {
                return toast.error('Failed to copy the code!');
            });
    };

    return (<div
        className="flex w-screen flex-row items-center justify-center xs:h-[calc(100vh-80px-64px)] 2xl:h-[calc(100vh-120px)]">
        <LiveDropSidebar/>
        <div
            className="flex flex-col gap-10 h-full max-h-full w-full overflow-y-scroll bg-[#151719] xs:p-6 2xl:p-[52px]">
            <div className="h-full max-h-full w-full gap-10 bg-[#151719] flex flex-col">
                <div
                    className="rounded-xl bg-gradient-to-b w-full from-red-700 to-[#151719] pl-1 pr-1 pt-1 text-white">
                    <div
                        className="autoheight w-full"
                    >
                        <div
                            className="footer flex flex-row items-center justify-between gap-5 rounded-t-[12px] border-b-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4">
                            <div className="mx-auto flex items-center gap-2 pl-[30px]">
                                <span className="text-2xl text-[#DFDFDF] font-bold">Support</span>
                            </div>
                        </div>
                        <div
                            className={`flex rounded-b-[12px] relative flex-col p-[24px] mb-10 md:p-[32px] text-[14px] font-semibold leading-5 text-[#848B8D] sm:text-[16px]`}
                            style={{ background: "linear-gradient(360deg, #272727 0%, rgba(21, 23, 25, 0.00) 100%), #191D20" }}
                        >
                            <div className="md:mb-8 mb-6 text-xl font-bold text-white">User info - Account ID: RC-618288</div>
                            <div className="flex flex-col lg:flex-row gap-4  w-full">
                                <div className="flex flex-col gap-4 w-full lg:w-[50%]">
                                        <h1 className="text-[#848B8D] font-semibold text-xs">If you have a request or concern directed at our support</h1>
                                        <div className="p-[7px] gap-2 w-full h-[48px] bg-[#1E2023] border border-[#2C3034] rounded-lg font-semibold text-custom_gray_2 flex justify-start md:justify-center items-center font-sans" >
                                            <h1 className="p-[3px] outline-0 h-full w-full md:w-[142px] bg-[#1E2023] border border-[#1E2023] rounded font-semibold md:text-base text-sm text-custom_gray_2 flex-1 justify-center items-center font-sans">
                                                support@looties.app
                                            </h1>
                                            <button className="flex justify-center items-center" onClick={copySupport}>
                                                <img src={Copy} alt="copy-icon-svg" className="w-4 h-4"/>
                                            </button>
                                        </div>
                                    <h1 className="text-[#F03033] font-bold text-xs">Average time respond: 2 hrs</h1>
                                </div>
                                <div className="flex flex-col gap-4 w-full lg:w-[50%]">
                                    <h1 className="text-[#848B8D] font-semibold text-xs">If you have marketing a request or concern directed at our support</h1>
                                    <div className="p-[7px] gap-2 w-full h-[48px] bg-[#1E2023] border border-[#2C3034] rounded-lg font-semibold text-custom_gray_2 flex justify-start md:justify-center items-center font-sans" >
                                        <h1 className="p-[3px] outline-0 h-full w-full md:w-[142px] bg-[#1E2023] border border-[#1E2023] rounded font-semibold md:text-base text-sm text-custom_gray_2 flex-1 justify-center items-center font-sans">
                                            marketing@looties.app
                                        </h1>

                                        <button className="flex justify-center items-center" onClick={copyMarketing}>
                                            <img src={Copy} alt="copy-icon-svg" className="w-4 h-4"/>
                                        </button>
                                    </div>
                                    <h1 className="text-[#F03033] font-bold text-xs">Average time respond: 2 hrs</h1>
                                </div>
                            </div>
                            <div className="md:my-8 my-[24px] text-xl font-bold text-white">Moderator applications</div>
                            <div className="flex flex-col gap-4 w-full">
                                <div>
                                    We are not looking for moderators unless otherwise declared. If you are interested in applying for a moderator position, you need to first be active and helpful in the chat for a considerable amount of time.
                                </div>
                            </div>
                            <div className="md:my-8 my-[24px] text-xl font-bold text-white">Sponsorship
                            </div>
                            <div className="flex flex-col gap-4 w-full">
                                <div>
                                    We Require at least 4000+ Youtube Subscribers and 4000+ average views per video for a sponsorship.
                                </div>
                                <div>
                                    We only whitelist people's referral code if they have a considerable social media or Youtube following.
                                </div>
                                <div>
                                    If you ask for a sponsorship/referral code and do not meet the above requirements, we will not respond to your email.                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Chat/>
    </div>);
};
