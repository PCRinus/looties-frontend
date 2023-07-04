import { ReduxEvents } from "../../reducers/events";
import { ReactComponent as Close } from "../../assets/Close.svg";
import { useDispatch } from "react-redux";
import React from "react";
import RedTwitter from "../../assets/RedTwitter.svg";
import Discord from "../../assets/Discord.svg";
import Copy from "../../assets/Copy.svg";
import toast from "react-hot-toast";


const CreatedLootbox = () => {
    const dispatch = useDispatch();
    const randomGeneratedNumber = Math.floor(Math.random() * 100000000);

    const handleTwitterShare = () => {
        const affiliateLink = `https://looties.app/affiliates/${randomGeneratedNumber}`;
        const tweetText = `Play Now on Looties! Use my promo code for increased game rewards!`;
        const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(affiliateLink)}&text=${encodeURIComponent(tweetText)}`;
        window.open(shareUrl);
    };

    const handleDiscordShare = () => {
        const affiliateLink = `https://looties.app/affiliates/${randomGeneratedNumber}`;
        const message = `Play Now on Looties! Use my promo code for increased game rewards! ${affiliateLink}`;
        const shareUrl = `https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=0&response_type=code&redirect_uri=${encodeURIComponent(affiliateLink)}&state=${encodeURIComponent(message)}`;
        // TO-DO: Add Discord Bot and replace your_client_id with the bot's client id
        window.open(shareUrl);
    };

    const copyToClipboard = () => {
        const affiliateCode = `https://looties.app.land/${randomGeneratedNumber || 'LOOTIES'}`;
        navigator.clipboard.writeText(affiliateCode)
            .then(() => {
                return toast.success('Code copied to clipboard!');
            })
            .catch((error) => {
                return toast.error('Failed to copy the code!');
            });
    };

    return (
        <div
            className="flex--column autoheight modal--content w-[100vw] md:w-[837px]"
            style={{ height: `calc(100vh - 144px)`, justifyContent: "start" }}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="footer flex flex-row items-center justify-between gap-5 rounded-t-[12px] border-b-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4">
                <div className="mx-auto flex items-center gap-2 pl-[30px]">
                    <span className="text-2xl font-bold">Congratulations !</span>
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
                className={`noscroll h-[70%] flex flex-col overflow-y-auto justify-center px-[32px] items-center text-[14px] font-semibold leading-5 text-[#848B8D] sm:text-[16px] md:h-[325px] md:max-h-[500px]`}
            >
                <div className="mb-4 text-xl text-center font-bold text-[#F03033]">You just created your first lootbox !</div>
                <div className="mb-4 text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                </div>
                <div
                    className="p-[7px] gap-2 w-full lg:max-w-[278px] mb-9 mt-3 h-[48px] bg-[#1E2023] border border-[#2C3034] rounded-lg font-semibold text-custom_gray_2 flex justify-start md:justify-center items-center font-sans">
                    <h1 className="p-[3px] outline-0 h-full w-full lg:w-[142px] bg-[#1E2023] border border-[#1E2023] rounded font-semibold md:text-base text-sm text-white flex-1 justify-center items-center font-sans">
                        https://looties.app/{randomGeneratedNumber.toString().length > 5 ? `${randomGeneratedNumber.toString().substring(0, 5)}...` : randomGeneratedNumber.toString()}
                    </h1>
                    <button className="flex justify-center items-center mr-[8px]"
                            onClick={copyToClipboard}>
                        <img src={Copy} alt="copy-icon-svg" className="w-4 h-4"/>
                    </button>
                </div>
                <div className="flex flex-col items-center min-w-[155px] justify-center gap-4">
                    <h1 className="text-[#848B8D] font-semibold text-xs">Share your lootbox in
                        social</h1>
                    <div className="flex flex-row justify-center items-center gap-2">
                        <div>
                            <button
                                className="w-[48px] h-[48px] active_modal bg-custom_gray_1 border rounded-xl flex justify-center items-center"
                                onClick={handleTwitterShare}>
                                <img src={RedTwitter} alt="twitter-icon-svg" className="w-5 h-5"/>
                            </button>
                        </div>
                        <div>
                            <button
                                className="w-[48px] h-[48px] bg-custom_gray_1 border border-custom_gray_1 rounded-xl flex justify-center items-center"
                                onClick={handleDiscordShare}>
                                <img src={Discord} alt="discord-icon-svg" className="w-5 h-5"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-[77px] h-[77px] w-full bg-gradient-to-b from-transparent to-[#151719]"></div>

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

export { CreatedLootbox };
