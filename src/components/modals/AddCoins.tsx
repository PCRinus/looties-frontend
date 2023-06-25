 import { ReduxEvents } from '../../reducers/events';
import { ReactComponent as Close } from '../../assets/Close.svg';
import RedArrowDown from "../../assets/RedArrowDown.svg";
import RedDollar from "../../assets/RedDollar.svg";
import Solana from "../../assets/Solana.svg";
import InfoRed from "../../assets/InfoRed.svg";
import Equals from "../../assets/Equals.svg";
import { useDispatch } from "react-redux";
import React, {useState} from "react";

    const AddCoins = () => {

        const dispatch = useDispatch();

        const [sol, setSol] = useState('');
        const [coins, setCoins] = useState('');

        const handleSolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
                setSol(value);
                setCoins(value ? (parseFloat(value) * 1.2).toFixed(3) : '');
        };

        const handleCoinsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
                setCoins(value);
                setSol(value ? (parseFloat(value) / 1.2).toFixed(3) : '');
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
            if (charCode === 46 && value && value.includes('.')) {
                event.preventDefault();
            } else if (value && value.includes('.') && value.split('.')[1].length >= 3) {
                event.preventDefault();
            }
        };

        const [selectedOption, setSelectedOption] = useState('Add coins');
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);

        const handleOptionChange = (option: string) => {
            setSelectedOption(option);
            setIsDropdownOpen(false);
        };

        const toggleDropdown = () => {
            setIsDropdownOpen(!isDropdownOpen);
        };

            if (selectedOption === 'Add coins') {
            } else if (selectedOption === 'Withdraw coins') {
                dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'WithdrawCoins' } })
            } else if (selectedOption === 'Withdraw NFT\'s') {
                dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'WithdrawNft' } })
            }


        return (
            <div className="flex--column w-[100vw] autoheight md:w-[712px] modal--content"   style={{ height: `calc(100vh - 144px)`, justifyContent: 'start' }} onClick={e => e.stopPropagation()}>
                <div className="hidden md:flex flex-wrap  justify-start items-center gap-4 mt-[32px] mx-[32px]">
                    <div className="">
                        <div>
                            <button className="active_modal w-auto px-[24px] h-12 top-[56-px] bg-custom_gray_1 border border-custom_gray_1 rounded-xl flex justify-center items-center">
                            <span className="text-[#F03033] font-semibold text-base font-sans">
                         Add coins
                        </span>
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <div >
                            <button className="w-auto px-[24px] h-12 top-[56-px] bg-custom_gray_1 border border-custom_gray_1 rounded-xl flex justify-center items-center" onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'WithdrawCoins' } })}>
                            <span className="text-custom_gray_2 font-semibold text-base font-sans">
                         Withdraw coins
                        </span>
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <button className="w-auto px-[24px] h-12 top-[56-px] bg-custom_gray_1 border border-custom_gray_1 rounded-xl flex justify-center items-center" onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'WithdrawNft' } })}>
                            <span className="text-custom_gray_2 font-semibold text-base font-sans">
                         Withdraw NFT'S
                        </span>
                            </button>
                        </div>

                    </div>

                    <div className="close close--unset ml-auto" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                        <Close />
                    </div>
                </div>

                <div className="flex md:hidden flex-wrap justify-start items-center gap-4 mt-[32px] mx-[32px]">
                    <div className="flex-1">
                        <div className="w-full">
                            <div className="relative">
                                <div className="relative inline-block cursor-pointer w-full">
                                    <div className="flex items-center gap-2 active_modal justify-center rounded-xl px-4 py-2 h-12" onClick={toggleDropdown}>
                                        <span className="text-[#F03033] font-semibold">{selectedOption}</span>
                                        <img
                                            src={RedArrowDown}
                                            alt="provably-svg-icon"
                                            className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                                        />
                                    </div>
                                    <ul
                                        className={`absolute top-full left-0 w-full border border-[#2C3034] bg-[#2C3034] rounded-xl mt-1 overflow-hidden transition-opacity duration-300 ease-in-out transform ${isDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
                                    >
                                        <li className="px-4 py-2 h-12 text-[#F03033] bg-[#2C3034] text-base font-sans flex items-center justify-center font-semibold cursor-pointer hover:bg-gray-500 hover:text-white" onClick={() => handleOptionChange('Add coins')}>
                                            Add coins
                                        </li>
                                        <li className="px-4 py-2 h-12 text-custom_gray_2 bg-[#2C3034] text-base border-t-2 border-[#373A3D] font-sans flex items-center justify-center font-semibold cursor-pointer hover:bg-gray-500 hover:text-white" onClick={() => handleOptionChange('Withdraw coins')}>
                                            Withdraw coins
                                        </li>
                                        <li className="px-4 py-2 h-12 text-custom_gray_2 bg-[#2C3034] text-base border-t-2 border-[#373A3D] font-sans flex items-center justify-center font-semibold cursor-pointer hover:bg-gray-500 hover:text-white" onClick={() => handleOptionChange('Withdraw NFT\'s')}>
                                            Withdraw NFT's
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="close close--unset ml-auto" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                        <Close />
                    </div>
                </div>

                <div className="flex flex-row justify-between items-center mx-[32px]">
                    <div className="font-semibold leading-5 text-sm sm:text-[16px] text-[#848B8D]">
                        Transactions are likely to be confirmed in {'<'}30s depending on the SOL network. Please
                        be patient and contact us if no funds arrived 30+ minutes after deposit.
                    </div>

                </div>
                <div className={`noscroll flex flex-col px-[32px] md:h-[225px] overflow-y-auto md:max-h-[500px]`}>
                    <div className="rounded-xl flex flex-col border border-[#2C3034] p-[24px] md:p-[32px]">
                        <div className="hidden md:flex flex-row justify-between items-center">
                            <span className="flex basis-[53.5%] text-xs font-semibold text-[#848B8D]">Spend</span>
                            <span className="flex basis-[46.5%] text-xs font-semibold text-[#848B8D]">Receive</span>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 justify-between items-center mt-[8px] mb-[12px]">
                                 <span className="w-full md:hidden block">
                                                            <span className="flex md:hidden basis-[46.5%] text-xs font-semibold text-[#848B8D]">Spend</span>
                            </span>
                            <div className="p-[7px] gap-2 w-full h-[48px] bg-[#1E2023] border border-[#2C3034] rounded-lg font-semibold text-custom_gray_2 flex justify-start md:justify-center items-center font-sans" >
                                <img className="w-5 h-5" src={Solana} alt="red-dollar" />
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    value={sol}
                                    className="p-[3px] outline-0 h-full w-full md:w-[142px] bg-[#1E2023] border border-[#1E2023] rounded font-semibold text-base text-custom_gray_2 flex-1 justify-center items-center font-sans"
                                    onChange={handleSolChange}
                                    onKeyPress={handleKeyPress}
                                />
                                <button className="w-[68px] ml-auto h-full px-[8px] top-[56-px] bg-[#2C3034] border border-[#2C3034] rounded-xl flex justify-center items-center">
                            <span className="text-[#F03033] font-semibold text-xs font-sans mr-2">
                            SOL
                            </span>
                                    <img src={RedArrowDown} alt="arrow-svg-icon" className={`w-[11px]`}/>
                                </button>
                            </div>
                            <span className="w-full md:hidden block">
                                                        <span className="block md:hidden text-[#F03033] text-xs font-bold ">1 SOL = ≈1.2 Coins</span>
                            </span>
                            <img src={Equals} alt="equals" className="w-[16px] h-[8px]" />

                            <span className="w-full md:hidden block">
                                                            <span className="flex md:hidden basis-[46.5%] text-xs font-semibold text-[#848B8D]">Receive</span>
                            </span>

                            <div className="p-[7px] gap-2 w-full h-[48px] bg-[#1E2023] border border-[#2C3034] rounded-lg font-semibold text-custom_gray_2 flex justify-start items-center font-sans" >
                                <img className="w-5 h-5 ml-1" src={RedDollar} alt="red-dollar" />
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    value={coins}
                                    className="p-[3px] outline-0 w-full h-full w-[142px] bg-[#1E2023] border border-[#1E2023] rounded font-semibold text-base text-custom_gray_2 flex justify-center items-center font-sans"
                                    onChange={handleCoinsChange}
                                    min="0"
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                        <span className="hidden md:block text-[#F03033] text-xs font-bold mb-[18px] ">1 SOL = ≈1.2 Coins</span>
                        <span className="text-[#848B8D] text-xs flex flex-row gap-2">
                        <img src={InfoRed} alt="arrow-svg-icon" className={`w-[16.25px]`}/>
                        The value of SOL may change between now and the time we receive your payment
                    </span>

                    </div>
                </div>
                <div className="flex flex-row footer bg-[#1A1D20] border-t-[1px] border-[#2C3034] justify-center items-center gap-5 px-8 py-4 rounded-b-[12px] mt-auto">
                    <button className="basis-[50%] h-[44.57px] px-[10px] bg-[#2C3034] rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                        Cancel
                    </button>
                    <button className="basis-[50%] leading-4 px-[10px] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'Wallet' } })}>
                        Confirm Deposit
                    </button>
                </div>
            </div>
        )
    };

    export { AddCoins }

