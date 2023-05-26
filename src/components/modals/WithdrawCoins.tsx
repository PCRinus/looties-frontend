import { ReduxEvents } from '../../reducers/events';
import { ReactComponent as Close } from '../../assets/Close.svg';
import RedArrowDown from "../../assets/RedArrowDown.svg";
import { useDispatch } from "react-redux";
import RedDollar from "../../assets/RedDollar.svg";
import Solana from "../../assets/Solana.svg";
import InfoRed from "../../assets/InfoRed.svg";
import Equals from "../../assets/Equals.svg";
import {useState} from "react";

const WithdrawCoins = () => {

    const [solValue, setSolValue] = useState(0);
    const [coinsValue, setCoinsValue] = useState(0);

    const regex = /^\d+(\.\d{0,2})?$/;

    const handleSolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        const sol = value >= 0 ? value : 0;
        if (regex.test(String(sol))) {
            setSolValue(sol);
            setCoinsValue(parseFloat((sol * 1.2).toFixed(2)));
        }
    };

    const handleCoinsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        const coins = value >= 0 ? value : 0;
        if (regex.test(String(coins))) {
            setCoinsValue(coins);
            setSolValue(parseFloat((coins / 1.2).toFixed(2)));
        }
    };

    const dispatch = useDispatch();

    return (
        <div className="flex--column w-[90vw] md:w-[60vw] lg:w-[712px] modal--content" onClick={e => e.stopPropagation()}>
            <div className="close" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                <Close />
            </div>
            <div className="flex flex-wrap justify-start items-center gap-4 mt-[32px] ml-[32px]">
                <div className="">
                    <div>
                        <button className="w-auto px-[24px] h-12 top-[56-px] bg-custom_gray_1 border border-custom_gray_1 rounded-xl flex justify-center items-center" onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'AddCoins' } })}>
                            <span className="text-custom_gray_2 font-semibold text-base font-sans">
                         Add coins
                        </span>
                        </button>
                    </div>
                </div>
                <div className="">
                    <div >
                        <button className="active_modal w-auto px-[24px] h-12 top-[56-px] bg-custom_gray_1 border border-custom_gray_1 rounded-xl flex justify-center items-center" >
                            <span className="text-[#F03033] font-semibold text-base font-sans">
                         Withdraw coins
                        </span>
                        </button>
                    </div>
                </div>
                <div className="mr-20">
                    <div>
                        <button className="w-auto px-[24px] h-12 top-[56-px] bg-custom_gray_1 border border-custom_gray_1 rounded-xl flex justify-center items-center" onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'WithdrawNft' } })}>
                            <span className="text-custom_gray_2 font-semibold text-base font-sans">
                         Withdraw NFT'S
                        </span>
                        </button>
                    </div>
                </div>

            </div>
            <div className="flex flex-row justify-between items-center mx-[32px]">
                <div className="font-bold text-[#848B8D]">
                    Transactions are likely to be confirmed in {'<'}30s depending on the SOL network. Please
                    be patient and contact us if no funds arrived 30+ minutes after deposit.
                </div>
            </div>
            <div className={`noscroll flex flex-col px-[32px] h-[275px] overflow-y-auto`} style={{ maxHeight: '500px' }}>
                <div className="rounded-xl flex flex-col border border-[#2C3034] p-[32px]">
                    <div className="flex flex-row justify-between items-center">
                        <span className="flex basis-[53.5%] text-xs font-semibold text-[#848B8D]">Spend</span>
                        <span className="flex basis-[46.5%] text-xs font-semibold text-[#848B8D]">Receive</span>
                    </div>
                    <div className="flex flex-col lg:flex-row  gap-3 justify-between items-center mt-[8px] mb-[12px]">
                        <div className="p-[7px] gap-2 w-full h-[48px] bg-[#1E2023] border border-[#2C3034] rounded-lg font-semibold text-custom_gray_2 flex justify-start items-center font-sans" >
                            <img className="w-5 h-5 ml-1" src={RedDollar} alt="red-dollar" />
                            <input type="number" step=".01"  min="0" placeholder="0.00"  value={coinsValue} onChange={handleCoinsChange} className="p-[3px] w-full outline-0 h-full w-[142px] bg-[#1E2023] border border-[#1E2023] rounded font-semibold text-base text-custom_gray_2 flex justify-center items-center font-sans" />
                        </div>
                        <img src={Equals} alt="equals" className="w-[16px] h-[8px]" />
                        <div className="p-[7px] gap-2 w-full h-[48px] bg-[#1E2023] border border-[#2C3034] rounded-lg font-semibold text-custom_gray_2 flex justify-center items-center font-sans" >
                            <img className="w-5 h-5" src={Solana} alt="red-dollar" />
                            <input type="number" step=".01"  min="0.00" placeholder="0.00" value={solValue} onChange={handleSolChange} className="p-[3px] outline-0 h-full w-[142px] bg-[#1E2023] border border-[#1E2023] rounded font-semibold text-base text-custom_gray_2 flex justify-center items-center font-sans" />
                            <button className="w-[68px] h-full px-[8px] top-[56-px] bg-[#2C3034] border border-[#2C3034] rounded-xl flex justify-center items-center">
                            <span className="text-custom_gray_2 font-semibold text-xs font-sans mr-2">
                            SOL
                            </span>
                                <img src={RedArrowDown} alt="arrow-svg-icon" className={`w-[11px]`}/>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center text-[#F03033] text-xs font-bold mb-[18px]">
                        <span className="flex basis-[53.5%] text-xs font-semibold ">1 SOL = ≈1.2 Coins</span>
                        <span className="flex basis-[46.5%] text-xs font-semibold ">Estimated network fee is ${(solValue/100).toFixed(2)}</span>
                    </div>
                    <span className="text-[#848B8D] text-xs flex flex-row gap-2 mb-[18px]">
                        <img src={InfoRed} alt="arrow-svg-icon" className={`w-[16.25px]`}/>
                      Note that this action is irreversible. Please make sure that recipient data is 100% correct. Ang network fees will be deducted from your cashout amount.
                    </span>
                    <span className="text-[#848B8D] text-xs flex flex-row gap-2">
                        <img src={InfoRed} alt="arrow-svg-icon" className={`w-[16.25px]`}/>
                       You cannot withdraw or transfer your on-site balance to another Clash account. You must withdraw your balance to gour own personal Crypto Wallet Address.
                    </span>

                </div>
            </div>
            <div className="flex flex-row footer bg-[#1A1D20] border-t-[1px] border-[#2C3034] justify-center items-center gap-5 px-8 py-4 rounded-b-[12px]">
                <button className="basis-[50%] h-[44.57px] bg-[#2C3034] rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                    Cancel
                </button>
                <button className="basis-[50%] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'Wallet' } })}>
                    Confirm Withdraw
                </button>
            </div>
        </div>
    )
};

export { WithdrawCoins }