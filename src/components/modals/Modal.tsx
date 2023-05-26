import { motion } from "framer-motion";
import { Wallet } from "./Wallet";
import { WithdrawNft } from "./WithdrawNft";
import { LogOut } from "./LogOut";
import { AddCoins } from "./AddCoins";
import { WithdrawCoins } from "./WithdrawCoins";
import "../../styles/macro/Modal.scss";
import { ReduxEvents } from "../../reducers/events";
import { useDispatch } from "react-redux";
import React from "react";

const Modals: {
  [key: string]: any;
} = {
  Wallet,
  WithdrawNft,
  AddCoins,
  WithdrawCoins,
  LogOut,
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
        className="flex flex-row modal--wrapper"
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
