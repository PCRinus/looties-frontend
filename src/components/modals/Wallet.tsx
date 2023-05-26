import React, { useState } from 'react';
import { ReduxEvents } from '../../reducers/events';
import { ReactComponent as Close } from '../../assets/Close.svg';
import LootiesLogo from "../../assets/Looties_wordmark 1.svg";
import MetaMask from "../../assets/MetaMask.svg";
import Solflare from "../../assets/Solflare.svg";
import RedArrowDown from "../../assets/RedArrowDown.svg";
import Phantom from "../../assets/Phantom.svg";
import Ledger from "../../assets/Ledger.svg";
import { useDispatch } from "react-redux";

const Wallet = () => {

    const dispatch = useDispatch();

    const [seeMore, setSeeMore] = useState<boolean>(false);

    return (
        <div className="flex--column modal--content wallet" onClick={e => e.stopPropagation()}>
            <div className="close" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                <Close />
            </div>
            <div className={`flex--column body ${seeMore ? 'h-[483px]' : 'h-[355px]'}`}>
                <div className="type flex flex-col justify-center items-center mt-6">
                        <img
                            className="logo-img w-[160.94px] h-[36px] left-[73px] top-[34px]"
                            src={LootiesLogo}
                            alt="logo"
                        />
                    <span className='text-xs font-sans font-semibold'>
                            Log Into Your Account
                        </span>
                </div>
                <div className="flex flex-col gap-4 text justify-center items-center">
                    <button className="w-[270px] sm:w-[345px] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'Wallet' } })}>
                        <img className="mr-2 " src={MetaMask} alt="metamask-svg-icon" />
                        Continue with MetaMask
                    </button>
                    <button className="w-[270px] sm:w-[345px] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'Wallet' } })}>
                        <img className="mr-2 " src={Solflare} alt="solflare-svg-icon" />
                        Continue with Solflare
                    </button>
                          {seeMore
                               ?
                              <>
                              <button className="w-[270px] sm:w-[345px] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'Wallet' } })}>
                        <img className="mr-2 " src={Ledger} alt="ledger-svg-icon" />
                        Continue with Ledger
                    </button>
                    <button className="w-[270px] sm:w-[345px] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'Wallet' } })}>
                        <img className="mr-2 " src={Phantom} alt="phantom-svg-icon" />
                        Continue with Phantom
                    </button>
                              </>
                              : <></>
                          }
                    <div className="flex flex-row gap-2 cursor-pointer" onClick={()=> setSeeMore(!seeMore)}>
                        <span className='text-base font-sans text-[#848B8D]'>
                            {seeMore ? 'Less options' : 'More options'}
                        </span>
                        <img src={RedArrowDown} alt="arrow-svg-icon" className={`${seeMore ? 'rotate-180' : ''}`}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export { Wallet }