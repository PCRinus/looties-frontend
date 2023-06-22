import { ReduxEvents } from "../reducers/events";
import { WalletName } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import nacl from "tweetnacl";

export const useAuth = () => {
  const { publicKey, select, connect, disconnect, signMessage } = useWallet();
  const dispatch = useDispatch();

  const connectWallet = async (walletName: WalletName) => {
    await select(walletName);
    try {
      await connect();
    } catch (error) {
      console.log(`Unable to connect ${walletName} wallet: ${error} `);
    } finally {
      dispatch({ type: ReduxEvents.CloseModal });
    }
  };

  const disconnectWallet = async () => {
    await disconnect();
    dispatch({ type: ReduxEvents.SetJwt, payload: "" });
    dispatch({ type: ReduxEvents.UserLogout });
    dispatch({ type: ReduxEvents.CloseModal });
  };

  const authorizeWallet = async () => {
    if (!publicKey) {
      console.log("Wallet not connected");
    } else if (!signMessage) {
      console.log("Wallet does not support message signing!");
    } else {
      try {
        const message = `Authorize your wallet to play`;
        const data = new TextEncoder().encode(message);
        const signature = await signMessage(data);
        if (!nacl.sign.detached.verify(data, signature, publicKey.toBytes())) {
          console.log("Signature not valid");
        } else {
          console.log("Signature valid");
          const signatureString = signature.toString();
          const publicKeyString = publicKey.toString();
          axios
            .post(
              `${process.env.REACT_APP_API_URL}/auth/connect-wallet`,
              JSON.stringify({
                walletPublicKey: publicKeyString,
                signature: signatureString,
              }),
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((res) => {
              const jwt = res.data;
              dispatch({ type: ReduxEvents.SetJwt, payload: jwt });
            })
            .catch((err) => {
              console.log(err);
              disconnect();
            });
        }
      } catch (err) {
        console.log("Signing error: ", err);
        disconnect();
      }
    }
  };

  const loadUserData = (jwt: string) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${publicKey}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((res) => {
        const userData = res.data;
        dispatch({ type: ReduxEvents.SetUserData, payload: userData });
      })
      .catch((err) => console.log(err));
  };

  return { connectWallet, authorizeWallet, loadUserData, disconnectWallet };
};
