import { motion } from 'framer-motion';
import { Wallet } from './Wallet';
import { WithdrawNft } from './WithdrawNft';
import { DepositNft } from './DepositNft';
import { LogOut } from './LogOut';
import { AddCoins } from './AddCoins';
import { ProvablyFair } from './ProvablyFair';
import { CreatedLootbox } from './CreatedLootbox';
import { WithdrawCoins } from './WithdrawCoins';
import { UserProfile } from './UserProfile';
import { NftPicker } from './NftPicker';
import { LootboxWin } from './LootboxWin';
import '../../styles/macro/Modal.scss';
import { ReduxEvents } from '../../reducers/events';
import { useDispatch } from 'react-redux';
import React from 'react';

const Modals: {
  [key: string]: any;
} = {
  Wallet,
  DepositNft,
  WithdrawNft,
  AddCoins,
  WithdrawCoins,
  LogOut,
  ProvablyFair,
  UserProfile,
  CreatedLootbox,
  NftPicker,
  LootboxWin,
};

interface ModalProps {
  modal: string;
}

const Modal = (props: ModalProps) => {
  const dispatch = useDispatch();
  const Modal = Modals[props.modal];

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch({ type: ReduxEvents.CloseModal });
  };

  return (
    <>
      <motion.div
        className="modal--wrapper flex flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
      >
        <Modal />
      </motion.div>
    </>
  );
};

export { Modal };
