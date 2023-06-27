import {Chat} from "../components/macro/Chat";
import LiveDropSidebar from "../components/micro/LiveDropSidebar";
import React from "react";
import Users from "../assets/Users.svg";
import RedCoins from "../assets/RedCoins.svg";
import RedDollar from "../assets/RedDollar.svg";
import InfoIcon from "../assets/InfoIcon.svg";
import Discord from "../assets/Discord.svg";
import RedTwitter from "../assets/RedTwitter.svg";
import Copy from "../assets/Copy.svg";
import toast from 'react-hot-toast';
import axios from "axios";
import { useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';

export const AffiliatesPage = () => {
    const [referralInput, setReferralInput] = useState<string>('');
    const [yourReferralInput, setYourReferralInput] = useState<string>('');
    const [referralCode, setReferralCode] = useState<string>('LOOTIES');
    const [totalWagered, setTotalWagered] = useState<number>(0);
    const [availableCommission, setavailableCommission] = useState(0);
    const [referralEarnings, setreferralEarnings] = useState(0);
    const [redeemedCount, setredeemedCount] = useState(0);
    const user = useSelector((state: any) => state.user);
    const auth = useSelector((state: any) => state.auth);

    useEffect(() => {
        const fetchAffiliateStats = async () => {
            if(user.id) {
                try {
                    const response = await axios.get(
                        `${process.env.REACT_APP_API_URL}/affiliates/${user.id}/stats`
                    );
                    const {totalWagered, availableCommission, referralEarnings, redeemedCount} = response?.data;
                    setTotalWagered(parseFloat(totalWagered));
                    setavailableCommission(parseFloat(availableCommission));
                    setreferralEarnings(parseFloat(referralEarnings));
                    setredeemedCount(parseFloat(redeemedCount));

                } catch (error) {
                    console.log("Error while fetching affiliate stats:", error);
                    toast.error("Failed to fetch affiliate stats");
                }
            }

        };
        fetchAffiliateStats();
    }, [user.id]);

    const handleReferralChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setReferralInput(value);
    };
    const handleYourReferralChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setYourReferralInput(value);
    };

    const getReferralCode = useCallback(() => {
        if(user.id) {
            axios
                .get(`${process.env.REACT_APP_API_URL}/affiliates/${user.id}/stats`, {
                    headers: {
                        Authorization: `Bearer ${auth.jwt}`,
                    },
                })
                .then(
                    (response) => {
                        const {referralCode} = response?.data;
                        setReferralCode(referralCode);
                    },
                    (error) => {
                        if (error.response?.data.message) {
                            toast(error.response?.data.message);
                        }
                    }
                );
        }
    }, [setReferralCode, user.id, auth.jwt]);

    const getStats = useCallback(() => {
        if(user.id) {
            axios
                .get(`${process.env.REACT_APP_API_URL}/affiliates/${user.id}/stats`, {
                    headers: {
                        Authorization: `Bearer ${auth.jwt}`,
                    },
                })
                .then(
                    (response) => {


                        const {totalWagered, availableCommission, referralEarnings, redeemedCount} = response?.data;
                        setTotalWagered(parseFloat(totalWagered));
                        setavailableCommission(parseFloat(availableCommission));
                        setreferralEarnings(parseFloat(referralEarnings));
                        setredeemedCount(parseFloat(redeemedCount));

                    },
                    (error) => {
                        if (error.response?.data.message) {
                            toast(error.response?.data.message);
                        }
                    }
                );
        }
    }, [setredeemedCount, setTotalWagered, setavailableCommission, user.id, auth.jwt]);
    const copyToClipboard = () => {
        const affiliateCode = `https://looties.app.land/${referralCode || 'LOOTIES'}`;
        navigator.clipboard.writeText(affiliateCode)
            .then(() => {
                return toast.success('Code copied to clipboard!');
            })
            .catch((error) => {
                return toast.error('Failed to copy the code!');
            });
    };

    useEffect(() => {
        getStats();
        getReferralCode();
    }, [getStats, getReferralCode]);

    const setCode = () => {
        if (referralInput.length > 255 || referralInput.includes(' ')) {
            toast.error('Referral code is invalid');
            return;
        }
        if(user.id) {

        axios
            .post(
                `${process.env.REACT_APP_API_URL}/affiliates/${user.id}/update-referral-code`,
                {
                    "updatedReferralCode": referralInput
                },
                {
                    headers: {
                        Authorization: `Bearer ${auth.jwt}`,
                    },
                },
            )
            .then(
                (response) => {
                    toast.success(response.data + ' is your new referral code');
                    getReferralCode();
                },
                (error) => {
                    if (error.response?.data.message) {
                        toast.error(error.response?.data.message);
                    }
                }
            );
        }

    };
    const redeemCode = () => {
        if (yourReferralInput.length > 255) {
            toast.error('Referral code is too long');
            return;
        }
        if(user.id) {

        axios
            .post(
                `${process.env.REACT_APP_API_URL}/affiliates/${user.id}/redeem-referral-code`,
                {
                    "referralCode": yourReferralInput
                },
                     {
                         headers: {
                             Authorization: `Bearer ${auth.jwt}`,
                         },
        },
            )
            .then(
                (response) => {
                    toast.success('Referral code redeemed successfully!');
                    getStats();
                },
                (error) => {
                    if (error.response?.data.message) {
                        toast.error(error.response?.data.message);
                    }
                }
            );
        }

    };
    const claimAll = () => {
        if(user.id) {
            axios
                .post(
                    `${process.env.REACT_APP_API_URL}/affiliates/${user.id}/claim-available-commission`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${auth.jwt}`,
                        },
                    }
                )
                .then(
                    (response) => {
                        toast.success('Claimed successfully!');
                        getStats();
                    },
                    (error) => {
                        if (error.response?.data.message) {
                            toast.error('No available commission to claim!');
                        }
                    }
                );
        }
    };

    const handleTwitterShare = () => {
        const affiliateLink = `https://looties.app/affiliates/${referralCode}`;
        const tweetText = `Play Now on Looties! Use my promo code for increased game rewards!`;
        const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(affiliateLink)}&text=${encodeURIComponent(tweetText)}`;
        window.open(shareUrl);
    };

    const handleDiscordShare = () => {
        const affiliateLink = `https://looties.app/affiliates/${referralCode}`;
        const message = `Play Now on Looties! Use my promo code for increased game rewards! ${affiliateLink}`;
        const shareUrl = `https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=0&response_type=code&redirect_uri=${encodeURIComponent(affiliateLink)}&state=${encodeURIComponent(message)}`;
        // TO-DO: Add Discord Bot and replace your_client_id with the bot's client id
        window.open(shareUrl);
    };

    return (
        <div
            className="flex w-screen flex-row items-center justify-center xs:h-[calc(100vh-80px-64px)] 2xl:h-[calc(100vh-120px)]">
            <LiveDropSidebar/>
            <div className="h-full max-h-full w-full overflow-y-scroll bg-[#151719] xs:p-6 2xl:p-[52px]">
                <div
                    className="autoheight w-full"
                >
                    <div className="footer flex flex-row items-center justify-between gap-5 rounded-t-[12px] border-b-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4">
                        <div className="mx-auto flex items-center gap-2 pl-[30px]">
                            <span className="text-2xl text-[#DFDFDF] font-bold">Affiliates</span>
                        </div>
                    </div>
                    <div
                        className={`flex relative flex-col px-[32px] text-[14px] bg-[#1a1d20] font-semibold leading-5 text-[#848B8D] sm:text-[16px]`}
                    >
                        <div className="rounded-xl bg-gradient-to-b from-red-700 to-gray-900 pl-1 pr-1 pt-1 text-white mt-8">
                            <div
                                className="flex w-full md:flex-row flex-col items-center justify-center rounded-xl  "
                                style={{background: "linear-gradient(360deg, #272727 0%, rgba(21, 23, 25, 0) 100%), #191D20"}}
                            >
                                <div
                                    className="flex md:basis-[55%] basis-[100%] gap-3 md:ml-[52px] ml-0 p-8 md:p-0 w-full flex-col md:items-start items-center justify-center rounded-t-[12px] border-solid border-[#2C3034] bg-[#1E2124] xs:h-16 2xl:h-20 ">
                                    <h1 className="font-bold text-[#F03033] text-center md:text-start xs:text-xl 2xl:text-2xl"> Earn up to 5% from your
                                        friends
                                    </h1>
                                    <h1 className="font-medium text-white text-center md:text-start xs:text-xs"> Earn 5% Of house from Looties that have your code active. Looties
                                        using your code will receive a 5% increase in Rakeback for 24 hours.
                                    </h1>
                                </div>
                                <div className="flex md:basis-[45%] basis-[100%] items-center justify-center">
                                    <img src={RedCoins} alt="red-coins-svg-icon" className="h-full w-auto" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-3 justify-start mt-6">
                            <h1 className="text-[#DFDFDF] font-bold text-xl"> Redeem a code </h1>
                            <img src={InfoIcon} className="w-4 h-4" alt="info-icon-svg"></img>
                        </div>
                        <div className="flex flex-row items-center gap-3 justify-start mt-6">
                            <h1 className="text-[#848B8D] font-semibold text-xs"> Referral Code </h1>
                        </div>
                        <div className="flex flex-row items-center gap-3 justify-start mt-2">
                            <div className="p-[7px] flex basis-[50%] gap-2 w-full h-[48px] bg-[#1E2023] border border-[#2C3034] rounded-lg font-semibold text-custom_gray_2 justify-start md:justify-center items-center font-sans" >
                                <input
                                    type="text"
                                    placeholder="example code"
                                    className="p-[3px] outline-0 h-full w-full md:w-[142px] bg-[#1E2023] border border-[#1E2023] rounded font-semibold text-base text-custom_gray_2 flex-1 justify-center items-center font-sans"
                                    onChange={handleYourReferralChange}
                                />
                            </div>
                            <button className="basis-[50%] leading-4 px-[10px] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={redeemCode}>
                                Reedem Code
                            </button>
                        </div>
                        <h1 className="py-5 text-[#DFDFDF] font-bold text-xl"> Set up your referral code </h1>
                        <div className="flex md:flex-row flex-col md:items-center items-start gap-3 justify-start mt-2">
                            <div className="flex flex-col items-start justify-center gap-2 md:w-[275px] w-full">
                                <h1 className="text-[#848B8D] font-semibold text-xs">Set your referral code</h1>
                                <div className="w-full p-[7px] gap-2 h-[48px] bg-[#1E2023] border border-[#2C3034] rounded-lg font-semibold text-custom_gray_2 flex justify-start md:justify-center items-center font-sans" >
                                    <input
                                        type="text"
                                        className="p-[3px] outline-0 h-full w-full md:w-[142px] bg-[#1E2023] border border-[#1E2023] rounded font-semibold md:text-base text-sm text-custom_gray_2 flex-1 justify-center items-center font-sans"
                                        placeholder={referralCode} value={referralInput} onChange={handleReferralChange}
                                    />
                                    <button className="w-[77px] ml-auto h-full px-[8px] top-[56-px] bg-gradient-to-t from-red-700 to-red-500 border border-[#2C3034] rounded-xl flex justify-center items-center" onClick={setCode}>
                                        <span className="text-white font-semibold text-xs font-sans">
                                         Set code
                                         </span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-center gap-2 md:w-[404px] w-full">
                                <h1 className="text-[#848B8D] font-semibold text-xs">Copy and share your referral code</h1>
                                <div className="p-[7px] gap-2 w-full h-[48px] bg-[#1E2023] border border-[#2C3034] rounded-lg font-semibold text-custom_gray_2 flex justify-start md:justify-center items-center font-sans" >
                                    <h1 className="p-[3px] outline-0 h-full w-full md:w-[142px] bg-[#1E2023] border border-[#1E2023] rounded font-semibold md:text-base text-sm text-custom_gray_2 flex-1 justify-center items-center font-sans">
                                        https://looties.app/{referralCode.length > 7 ? `${referralCode.substring(0, 7)}...` : referralCode}
                                    </h1>

                                    <button className="flex justify-center items-center" onClick={copyToClipboard}>
                                        <img src={Copy} alt="copy-icon-svg" className="w-4 h-4"/>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col items-start min-w-[155px] justify-center gap-2">
                                <h1 className="text-[#848B8D] font-semibold text-xs">Share promocode in social</h1>
                                <div className="flex flex-row justify-center items-center gap-2" >
                                    <div>
                                        <button className="w-[48px] h-[48px] active_modal bg-custom_gray_1 border rounded-xl flex justify-center items-center" onClick={handleTwitterShare}>
                                            <img src={RedTwitter} alt="twitter-icon-svg" className="w-5 h-5" />
                                        </button>
                                    </div>
                                    {/*<div>*/}
                                    {/*    <button className="w-[48px] h-[48px] bg-custom_gray_1 border border-custom_gray_1 rounded-xl flex justify-center items-center" onClick={handleDiscordShare}>*/}
                                    {/*        <img src={Discord} alt="discord-icon-svg" className="w-5 h-5" />*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                    {/*TODO: Add discord share*/}
                                </div>
                            </div>
                        </div>
                        <h1 className="py-5 text-[#DFDFDF] font-bold text-xl"> Statistics </h1>
                        <div className="grid grid-cols-2 gap-4 md:mb-10 mb-5">
                            <div className="flex md:gap-4 gap-2 basis-[50%] border border-[#2C3034] md:py-8 md:px-9 py-6 px-4 rounded-xl">
                                <div className="flex flex-row">
                                    <div className="flex flex-row items-center justify-center">
                                        <img src={Users} alt="users-svg-icon" className="md:w-[48px] w-[24px] min-w-[24px] h-auto" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-[#848B8D] text-xs sm:text-sm md:text-base font-semibold"> Total referrals </h1>
                                    <h1 className="text-white text-xs sm:text-sm md:text-base font-semibold">{redeemedCount}</h1>
                                </div>
                            </div>
                            <div className="flex md:gap-4 gap-2 basis-[50%] border border-[#2C3034] md:py-8 md:px-9 py-6 px-4 rounded-xl">
                                <div className="flex flex-row">
                                    <div className="flex flex-row items-center justify-center">
                                        <img src={RedDollar} alt="red-dollar-svg-icon" className="md:w-[48px] w-[24px] min-w-[24px] h-auto" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-[#848B8D] text-xs sm:text-sm md:text-base font-semibold"> Total wagered </h1>
                                    <h1 className="text-white text-xs sm:text-sm md:text-base font-semibold">{totalWagered}</h1>
                                </div>
                            </div>
                            <div className="flex md:gap-4 gap-2 basis-[50%] border border-[#2C3034] md:py-8 md:px-9 py-6 px-4 rounded-xl">
                                <div className="flex flex-row">
                                    <div className="flex flex-row items-center justify-center">
                                        <img src={RedDollar} alt="red-dollar-svg-icon" className="md:w-[48px] w-[24px] min-w-[24px] h-auto" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-[#848B8D] text-xs sm:text-sm md:text-base font-semibold">Referral earnings</h1>
                                    <h1 className="text-white text-xs sm:text-sm md:text-base font-semibold break-all overflow-hidden">
                                        {referralEarnings}
                                    </h1>
                                </div>

                            </div>
                            <div className="flex md:gap-4 gap-2 basis-[50%] border border-[#2C3034] md:py-8 md:px-9 py-6 px-4 rounded-xl items-center">
                                <div className="flex flex-row">
                                    <div className="flex flex-row items-center justify-center">
                                        <img src={RedDollar} alt="red-dollar-svg-icon" className="md:w-[48px] w-[24px] min-w-[24px] h-auto" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-[#848B8D] text-xs sm:text-sm md:text-base font-semibold"> Available commission </h1>
                                    <h1 className="text-white text-xs sm:text-sm md:text-base font-semibold"> { availableCommission } </h1>
                                </div>
                                <button className="w-[57px] hidden md:flex h-[30px] justify-center items-center ml-auto p-[3px] bg-gradient-to-t from-red-700 to-red-500  border border-[#2C3034] rounded-md" onClick={claimAll}>
                            <span className="text-white justify-center items-center font-semibold text-xs font-sans">
                            Claim
                            </span>
                                </button>
                            </div>

                        </div>
                            <button className="w-full h-[44.5px] flex md:hidden  mb-10 justify-center items-center ml-auto p-[3px] bg-gradient-to-t from-red-700 to-red-500  border border-[#2C3034] rounded-md" onClick={claimAll}>
                            <span className="text-white justify-center items-center font-semibold text-xs font-sans">
                            Claim
                            </span>
                            </button>

                        <div className="pointer-events-none absolute left-0 bottom-0 h-[66px] w-full bg-gradient-to-b from-transparent to-[#151719]"></div>
                    </div>
                </div>
            </div>
            <Chat/>
        </div>
    );
};
