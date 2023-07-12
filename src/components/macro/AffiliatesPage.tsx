import { Chat } from "./Chat";
import React from "react";
import Users from "../../assets/Users.svg";
import RedCoins from "../../assets/RedCoins.svg";
import RedDollar from "../../assets/RedDollar.svg";
import InfoIcon from "../../assets/InfoIcon.svg";
import RedTwitter from "../../assets/RedTwitter.svg";
import Copy from "../../assets/Copy.svg";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import ProfileOptionsHeader from "../micro/ProfileOptionsHeader";
import InfoIconRed from "../../assets/InfoIconRed.svg";
import RedeemCodeInfoBubble from "../micro/RedeemCodeInfoBubble";

export const AffiliatesPage = () => {
  const [referralInput, setReferralInput] = useState<string>("");
  const [yourReferralInput, setYourReferralInput] = useState<string>("");
  const [referralCode, setReferralCode] = useState<string>("LOOTIES");
  const [totalWagered, setTotalWagered] = useState<number>(0);
  const [availableCommission, setavailableCommission] = useState(0);
  const [referralEarnings, setreferralEarnings] = useState(0);
  const [redeemedCount, setredeemedCount] = useState(0);
  const [isInfoVisible, setInfoVisible] = useState(false);
  const user = useSelector((state: any) => state.user);
  const auth = useSelector((state: any) => state.auth);

  useEffect(() => {
    const fetchAffiliateStats = async () => {
      if (user.id) {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/affiliates/${user.id}/stats`);
          const { totalWagered, availableCommission, referralEarnings, redeemedCount } = response?.data;
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
    if (user.id) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/affiliates/${user.id}/stats`, {
          headers: {
            Authorization: `Bearer ${auth.jwt}`,
          },
        })
        .then(
          (response) => {
            const { referralCode } = response?.data;
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
    if (user.id) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/affiliates/${user.id}/stats`, {
          headers: {
            Authorization: `Bearer ${auth.jwt}`,
          },
        })
        .then(
          (response) => {
            const { totalWagered, availableCommission, referralEarnings, redeemedCount } = response?.data;
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
    const affiliateCode = `https://looties.app.land/${referralCode || "LOOTIES"}`;
    navigator.clipboard
      .writeText(affiliateCode)
      .then(() => {
        return toast.success("Code copied to clipboard!");
      })
      .catch((error) => {
        return toast.error("Failed to copy the code!");
      });
  };

  useEffect(() => {
    getStats();
    getReferralCode();
  }, [getStats, getReferralCode]);

  const setCode = () => {
    if (referralInput.length > 255 || referralInput.includes(" ")) {
      toast.error("Referral code is invalid");
      return;
    }
    if (user.id) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/affiliates/${user.id}/update-referral-code`,
          {
            updatedReferralCode: referralInput,
          },
          {
            headers: {
              Authorization: `Bearer ${auth.jwt}`,
            },
          }
        )
        .then(
          (response) => {
            toast.success(response.data + " is your new referral code");
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
      toast.error("Referral code is too long");
      return;
    }
    if (user.id) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/affiliates/${user.id}/redeem-referral-code`,
          {
            referralCode: yourReferralInput,
          },
          {
            headers: {
              Authorization: `Bearer ${auth.jwt}`,
            },
          }
        )
        .then(
          (response) => {
            toast.success("Referral code redeemed successfully!");
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
    if (user.id) {
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
            toast.success("Claimed successfully!");
            getStats();
          },
          (error) => {
            if (error.response?.data.message) {
              toast.error("No available commission to claim!");
            }
          }
        );
    }
  };

  const handleTwitterShare = () => {
    const affiliateLink = `https://looties.app/affiliates/${referralCode}`;
    const tweetText = `Play Now on Looties! Use my promo code for increased game rewards!`;
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      affiliateLink
    )}&text=${encodeURIComponent(tweetText)}`;
    window.open(shareUrl);
  };

  const handleDiscordShare = () => {
    const affiliateLink = `https://looties.app/affiliates/${referralCode}`;
    const message = `Play Now on Looties! Use my promo code for increased game rewards! ${affiliateLink}`;
    const shareUrl = `https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=0&response_type=code&redirect_uri=${encodeURIComponent(
      affiliateLink
    )}&state=${encodeURIComponent(message)}`;
    // TO-DO: Add Discord Bot and replace your_client_id with the bot's client id
    window.open(shareUrl);
  };

  const handleInfoClick = () => {
    setInfoVisible(!isInfoVisible);
  };

  return (
    <div className="2xl:autoheight bottom-fade flex-auto rounded-xl bg-custom_black_2  xs:h-auto xs:min-h-full 2xl:min-h-0 2xl:w-full">
      <ProfileOptionsHeader title={"Affiliates"} />
      <div
        className={`relative flex flex-col bg-[#1a1d20] px-[32px] text-[14px] font-semibold leading-5 text-[#848B8D] sm:text-[16px]`}
      >
        <div className="mt-8 rounded-xl bg-gradient-to-b from-red-700 to-gray-900 pl-1 pr-1 pt-1 text-white">
          <div
            className="flex w-full flex-col items-center justify-center rounded-xl md:max-h-[176px] md:flex-row  "
            style={{ background: "linear-gradient(360deg, #272727 0%, rgba(21, 23, 25, 0) 100%), #191D20" }}
          >
            <div className="ml-0 flex w-full basis-[100%] flex-col items-center justify-center gap-3 rounded-t-[12px] border-solid border-[#2C3034] bg-transparent p-8 xs:h-16 md:ml-[52px] md:basis-[55%] md:items-start md:p-0 2xl:h-20 ">
              <h1 className="text-center font-bold text-[#F03033] xs:text-xl md:text-start 2xl:text-2xl">
                {" "}
                Earn up to 5% from your friends
              </h1>
              <h1 className="text-center font-medium text-white xs:text-xs md:text-start">
                {" "}
                Earn 5% Of house from Looties that have your code active. Looties using your code will receive a 5%
                increase in Rakeback for 24 hours.
              </h1>
            </div>
            <div className="flex basis-[100%] items-center justify-center md:basis-[45%]">
              <img src={RedCoins} alt="red-coins-svg-icon" className="h-full w-auto" />
            </div>
          </div>
        </div>
        <div className="relative mt-6 flex flex-row items-center justify-start gap-3">
          <h1 className="text-xl font-bold text-[#DFDFDF]"> Redeem a code </h1>
          <button onClick={handleInfoClick}>
            <img src={isInfoVisible ? InfoIconRed : InfoIcon} className="h-4 w-4" alt="info-icon-svg"></img>
          </button>
          {isInfoVisible && <RedeemCodeInfoBubble />}
        </div>
        <div className="mt-6 flex flex-row items-center justify-start gap-3">
          <h1 className="text-xs font-semibold text-[#848B8D]"> Referral Code </h1>
        </div>
        <div className="mt-2 flex flex-row items-center justify-start gap-3">
          <div className="flex h-[48px] w-full basis-[50%] items-center justify-start gap-2 rounded-lg border border-[#2C3034] bg-[#1E2023] p-[7px] font-sans font-semibold text-custom_gray_2 md:justify-center">
            <input
              type="text"
              placeholder="example code"
              className="h-full w-full flex-1 items-center justify-center rounded border border-[#1E2023] bg-[#1E2023] p-[3px] font-sans text-base font-semibold text-custom_gray_2 outline-0 md:w-[142px]"
              onChange={handleYourReferralChange}
            />
          </div>
          <button
            className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white"
            onClick={redeemCode}
          >
            Reedem Code
          </button>
        </div>
        <h1 className="py-5 text-xl font-bold text-[#DFDFDF]"> Set up your referral code </h1>
        <div className="mt-2 flex flex-col items-start justify-start gap-3 md:flex-wrap md:flex-row md:items-center">
          <div className="flex w-full flex-col items-start justify-center gap-2 md:w-[275px]">
            <h1 className="text-xs font-semibold text-[#848B8D]">Set your referral code</h1>
            <div className="flex h-[48px] w-full items-center justify-start gap-2 rounded-lg border border-[#2C3034] bg-[#1E2023] p-[7px] font-sans font-semibold text-custom_gray_2 md:justify-center">
              <input
                type="text"
                className="h-full w-full flex-1 items-center justify-center rounded border border-[#1E2023] bg-[#1E2023] p-[3px] font-sans text-sm font-semibold text-custom_gray_2 outline-0 md:w-[142px] md:text-base"
                placeholder={referralCode}
                value={referralInput}
                onChange={handleReferralChange}
              />
              <button
                className="top-[56-px] ml-auto flex h-full w-[77px] items-center justify-center rounded-xl border border-[#2C3034] bg-gradient-to-t from-red-700 to-red-500 px-[8px]"
                onClick={setCode}
              >
                <span className="font-sans text-xs font-semibold text-white">Set code</span>
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-2 md:w-[404px]">
            <h1 className="text-xs font-semibold text-[#848B8D]">Copy and share your referral code</h1>
            <div className="flex h-[48px] w-full items-center justify-start gap-2 rounded-lg border border-[#2C3034] bg-[#1E2023] p-[7px] font-sans font-semibold text-custom_gray_2 md:justify-center">
              <h1 className="h-full w-full flex-1 items-center justify-center rounded border border-[#1E2023] bg-[#1E2023] p-[3px] font-sans text-sm font-semibold text-custom_gray_2 outline-0 md:w-[142px] md:text-base">
                https://looties.app/{referralCode.length > 7 ? `${referralCode.substring(0, 7)}...` : referralCode}
              </h1>

              <button className="flex items-center justify-center" onClick={copyToClipboard}>
                <img src={Copy} alt="copy-icon-svg" className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="flex min-w-[155px] flex-col items-start justify-center gap-2">
            <h1 className="text-xs font-semibold text-[#848B8D]">Share promocode in social</h1>
            <div className="flex flex-row items-center justify-center gap-2">
              <div>
                <button
                  className="active_modal flex h-[48px] w-[48px] items-center justify-center rounded-xl border bg-custom_gray_1"
                  onClick={handleTwitterShare}
                >
                  <img src={RedTwitter} alt="twitter-icon-svg" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="py-5 text-xl font-bold text-[#DFDFDF]"> Statistics </h1>
        <div className="mb-5 grid grid-cols-2 gap-4 md:mb-10">
          <div className="flex basis-[50%] gap-2 rounded-xl border border-[#2C3034] px-4 py-6 md:gap-4 md:px-9 ">
            <div className="flex flex-row">
              <div className="flex flex-row items-center justify-center">
                <img src={Users} alt="users-svg-icon" className="h-auto w-[24px] min-w-[24px] md:w-[48px]" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xs font-semibold text-[#848B8D] sm:text-sm md:text-base"> Total referrals </h1>
              <h1 className="text-xs font-semibold text-white sm:text-sm md:text-base">{redeemedCount}</h1>
            </div>
          </div>
          <div className="flex basis-[50%] gap-2 rounded-xl border border-[#2C3034] px-4 py-6 md:gap-4 md:px-9 ">
            <div className="flex flex-row">
              <div className="flex flex-row items-center justify-center">
                <img src={RedDollar} alt="red-dollar-svg-icon" className="h-auto w-[24px] min-w-[24px] md:w-[48px]" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xs font-semibold text-[#848B8D] sm:text-sm md:text-base"> Total wagered </h1>
              <h1 className="text-xs font-semibold text-white sm:text-sm md:text-base">{totalWagered}</h1>
            </div>
          </div>
          <div className="flex basis-[50%] gap-2 rounded-xl border border-[#2C3034] px-4 py-6 md:gap-4 md:px-9 ">
            <div className="flex flex-row">
              <div className="flex flex-row items-center justify-center">
                <img src={RedDollar} alt="red-dollar-svg-icon" className="h-auto w-[24px] min-w-[24px] md:w-[48px]" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xs font-semibold text-[#848B8D] sm:text-sm md:text-base">Referral earnings</h1>
              <h1 className="overflow-hidden break-all text-xs font-semibold text-white sm:text-sm md:text-base">
                {referralEarnings}
              </h1>
            </div>
          </div>
          <div className="flex basis-[50%] items-center gap-2 rounded-xl border border-[#2C3034] px-4 py-6 md:gap-4 md:px-9 ">
            <div className="flex flex-row">
              <div className="flex flex-row items-center justify-center">
                <img src={RedDollar} alt="red-dollar-svg-icon" className="h-auto w-[24px] min-w-[24px] md:w-[48px]" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xs font-semibold text-[#848B8D] sm:text-sm md:text-base"> Available commission </h1>
              <h1 className="text-xs font-semibold text-white sm:text-sm md:text-base"> {availableCommission} </h1>
            </div>
            <button
              className="ml-auto hidden h-[30px] w-[57px] items-center justify-center rounded-md border border-[#2C3034] bg-gradient-to-t from-red-700  to-red-500 p-[3px] md:flex"
              onClick={claimAll}
            >
              <span className="items-center justify-center font-sans text-xs font-semibold text-white">Claim</span>
            </button>
          </div>
        </div>
        <button
          className="mb-10 ml-auto flex h-[44.5px]  w-full items-center justify-center rounded-md border border-[#2C3034] bg-gradient-to-t from-red-700  to-red-500 p-[3px] md:hidden"
          onClick={claimAll}
        >
          <span className="items-center justify-center font-sans text-xs font-semibold text-white">Claim</span>
        </button>
      </div>
      <div className=" h-10 w-full bg-custom_black_2"></div>
    </div>
  );
};
