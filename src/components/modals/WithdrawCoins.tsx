import { ReduxEvents } from "../../reducers/events";
import { ReactComponent as Close } from "../../assets/Close.svg";
import RedArrowDown from "../../assets/RedArrowDown.svg";
import { useDispatch, useSelector } from "react-redux";
import RedDollar from "../../assets/RedDollar.svg";
import Solana from "../../assets/Solana.svg";
import InfoRed from "../../assets/InfoRed.svg";
import Equals from "../../assets/Equals.svg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface IWithdrawalData {
  tokenToSolExchangeRate: string;
  solanaWithdrawalFee: string;
}

const WithdrawCoins = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state: any) => state.auth);
  const user = useSelector((state: any) => state.user);
  const [sol, setSol] = useState("");
  const [coins, setCoins] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [withdrawalData, setWithdrawalData] = useState<IWithdrawalData>();

  useEffect(() => {
    const fetchWithdrawalData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/withdrawal/data`, {
          headers: { Authorization: `Bearer ${auth.jwt}` },
        });
        setWithdrawalData(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching withdrawal data: ", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWithdrawalData();
  }, [auth.jwt]);

  const handleSolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSol(value);
    setCoins(value ? (parseFloat(value) * parseFloat(withdrawalData!.tokenToSolExchangeRate)).toFixed(3) : "");
  };

  const handleCoinsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCoins(value);
    setSol(value ? (parseFloat(value) / parseFloat(withdrawalData!.tokenToSolExchangeRate)).toFixed(3) : "");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.charCode || event.keyCode;
    if (
      charCode !== 8 &&
      charCode !== 0 &&
      (charCode < 48 || charCode > 57) &&
      charCode !== 46 // Allow decimal point
    ) {
      event.preventDefault();
    }

    // Restrict decimal places to a maximum of 3
    const { value } = event.target as HTMLInputElement;
    if (charCode === 46 && value && value.includes(".")) {
      event.preventDefault();
    } else if (value && value.includes(".") && value.split(".")[1].length >= 3) {
      event.preventDefault();
    }
  };

  const [selectedOption, setSelectedOption] = useState("Withdraw coins");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleWithdraw = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/withdrawal/${user.id}`,
        JSON.stringify({
          amount: coins,
        }),
        {
          headers: { Authorization: `Bearer ${auth.jwt}`, "Content-Type": "application/json" },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  if (selectedOption === "Withdraw coins") {
  } else if (selectedOption === "Add coins") {
    dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "AddCoins" } });
  } else if (selectedOption === "Withdraw NFT's") {
    dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "WithdrawNft" } });
  }

  if (error) {
    dispatch({ type: ReduxEvents.CloseModal });
    toast.error("Error fetching withdrawal data");
  } else if (loading) {
    //TODO: maybe add a loading spinner until withdrawal data is fetched
    return <></>;
  } else
    return (
      <div
        className="flex--column autoheight modal--content w-[100vw] md:w-[712px]"
        style={{ height: `calc(100vh - 144px)`, justifyContent: "start" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-[32px] mt-[32px] hidden  flex-wrap items-center justify-start gap-4 md:flex">
          <div className="">
            <div>
              <button
                className="top-[56-px] flex h-12 w-auto items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1 px-[24px]"
                onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "AddCoins" } })}
              >
                <span className="font-sans text-base font-semibold text-custom_gray_2">Add coins</span>
              </button>
            </div>
          </div>
          <div className="">
            <div>
              <button className="active_modal top-[56-px] flex h-12 w-auto items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1 px-[24px]">
                <span className="font-sans text-base font-semibold text-[#F03033]">Withdraw coins</span>
              </button>
            </div>
          </div>
          <div className="">
            <div>
              <button
                className="top-[56-px] flex h-12 w-auto items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1 px-[24px]"
                onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "WithdrawNft" } })}
              >
                <span className="font-sans text-base font-semibold text-custom_gray_2">Withdraw NFT'S</span>
              </button>
            </div>
          </div>

          <div
            className="close close--unset ml-auto"
            onClick={() => {
              dispatch({ type: ReduxEvents.CloseModal });
            }}
          >
            <Close />
          </div>
        </div>

        <div className="mx-[32px] mt-[32px] flex flex-wrap items-center justify-start gap-4 md:hidden">
          <div className="flex-1">
            <div className="relative flex w-full flex-row">
              <div className="relative w-full">
                <div className="relative inline-block w-full cursor-pointer">
                  <div
                    className="active_modal flex h-12 items-center justify-center gap-2 rounded-xl px-4 py-2"
                    onClick={toggleDropdown}
                  >
                    <span className="font-semibold text-[#F03033]">{selectedOption}</span>
                    <img
                      src={RedArrowDown}
                      alt="provably-svg-icon"
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180 transform" : ""
                      }`}
                    />
                  </div>
                  <ul
                    className={`absolute left-0 top-full mt-1 w-full transform overflow-hidden rounded-xl border border-[#2C3034] bg-[#2C3034] transition-opacity duration-300 ease-in-out ${
                      isDropdownOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    }`}
                  >
                    <li
                      className="flex h-12 cursor-pointer items-center justify-center bg-[#2C3034] px-4 py-2 font-sans text-base font-semibold text-custom_gray_2 hover:bg-gray-500 hover:text-white"
                      onClick={() => handleOptionChange("Add coins")}
                    >
                      Add coins
                    </li>
                    <li
                      className="flex h-12 cursor-pointer items-center justify-center border-t-2 border-[#373A3D] bg-[#2C3034] px-4 py-2 font-sans text-base font-semibold text-[#F03033] hover:bg-gray-500 hover:text-white"
                      onClick={() => handleOptionChange("Withdraw coins")}
                    >
                      Withdraw coins
                    </li>
                    <li
                      className="flex h-12 cursor-pointer items-center justify-center border-t-2 border-[#373A3D] bg-[#2C3034] px-4 py-2 font-sans text-base font-semibold text-custom_gray_2 hover:bg-gray-500 hover:text-white"
                      onClick={() => handleOptionChange("Withdraw NFT's")}
                    >
                      Withdraw NFT's
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="close close--unset ml-auto"
            onClick={() => {
              dispatch({ type: ReduxEvents.CloseModal });
            }}
          >
            <Close />
          </div>
        </div>

        <div className="mx-[32px] flex flex-row items-center justify-between">
          <div className="text-sm font-semibold leading-5 text-[#848B8D] sm:text-[16px]">
            Transactions are likely to be confirmed in {"<"}30s depending on the SOL network. Please be patient and
            contact us if no funds arrived 30+ minutes after deposit.
          </div>
        </div>
        <div className={`noscroll flex flex-col overflow-y-auto px-[32px] md:h-[275px] md:max-h-[500px]`}>
          <div className="flex flex-col rounded-xl border border-[#2C3034] p-[24px] md:p-[32px]">
            <div className="hidden flex-row items-center justify-between md:flex">
              <span className="flex basis-[53.5%] text-xs font-semibold text-[#848B8D]">Spend</span>
              <span className="flex basis-[46.5%] text-xs font-semibold text-[#848B8D]">Receive</span>
            </div>
            <div className="mb-[12px] mt-[8px] flex  flex-col items-center justify-between gap-3 md:flex-row">
              <span className="block w-full md:hidden">
                <span className="flex basis-[46.5%] text-xs font-semibold text-[#848B8D] md:hidden">Spend</span>
              </span>
              <div className="flex h-[48px] w-full items-center justify-start gap-2 rounded-lg border border-[#2C3034] bg-[#1E2023] p-[7px] font-sans font-semibold text-custom_gray_2">
                <img className="ml-1 h-5 w-5" src={RedDollar} alt="red-dollar" />
                <input
                  type="number"
                  placeholder="0.00"
                  value={coins}
                  className="flex h-full w-[142px] w-full items-center justify-center rounded border border-[#1E2023] bg-[#1E2023] p-[3px] font-sans text-base font-semibold text-custom_gray_2 outline-0"
                  onChange={handleCoinsChange}
                  min="0"
                  onKeyPress={handleKeyPress}
                />
              </div>
              <span className="block w-full md:hidden">
                <span className="block text-xs font-bold text-[#F03033] md:hidden ">
                  1 SOL = ≈{withdrawalData!.tokenToSolExchangeRate} Coins
                </span>
              </span>
              <img src={Equals} alt="equals" className="h-[8px] w-[16px]" />
              <span className="block w-full md:hidden">
                <span className="flex basis-[46.5%] text-xs font-semibold text-[#848B8D] md:hidden">Receive</span>
              </span>

              <div className="flex h-[48px] w-full items-center justify-center gap-2 rounded-lg border border-[#2C3034] bg-[#1E2023] p-[7px] font-sans font-semibold text-custom_gray_2">
                <img className="h-5 w-5" src={Solana} alt="red-dollar" />
                <input
                  type="number"
                  placeholder="0.00"
                  value={sol}
                  className="h-full w-full flex-1 items-center justify-center rounded border border-[#1E2023] bg-[#1E2023] p-[3px] font-sans text-base font-semibold text-custom_gray_2 outline-0 md:w-[142px]"
                  onChange={handleSolChange}
                  onKeyPress={handleKeyPress}
                />
                <button className="top-[56-px] ml-auto flex h-full w-[68px] items-center justify-center rounded-xl border border-[#2C3034] bg-[#2C3034] px-[8px]">
                  <span className="mr-2 font-sans text-xs font-semibold text-[#F03033]">SOL</span>
                  <img src={RedArrowDown} alt="arrow-svg-icon" className={`w-[11px]`} />
                </button>
              </div>
            </div>
            <div className="mb-[18px] flex flex-row items-center justify-between text-xs font-bold text-[#F03033]">
              <span className="hidden basis-[53.5%] text-xs font-semibold md:flex ">1 SOL = ≈1.2 Coins</span>
              <span className="flex basis-[46.5%] text-xs font-semibold ">
                Estimated network fee is{" "}
                {isNaN(parseFloat(sol))
                  ? "0.00"
                  : (parseFloat(sol) * parseFloat(withdrawalData!.solanaWithdrawalFee)).toFixed(2)}{" "}
                SOL
              </span>
            </div>
            <span className="mb-[18px] flex flex-row gap-2 text-xs text-[#848B8D]">
              <img src={InfoRed} alt="arrow-svg-icon" className={`w-[16.25px]`} />
              Note that this action is irreversible. Please make sure that recipient data is 100% correct. Ang network
              fees will be deducted from your cashout amount.
            </span>
            <span className="flex flex-row gap-2 text-xs text-[#848B8D]">
              <img src={InfoRed} alt="arrow-svg-icon" className={`w-[16.25px]`} />
              You cannot withdraw or transfer your on-site balance to another Clash account. You must withdraw your
              balance to gour own personal Crypto Wallet Address.
            </span>
          </div>
        </div>
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
            onClick={handleWithdraw}
          >
            Confirm Withdraw
          </button>
        </div>
      </div>
    );
};

export { WithdrawCoins };
