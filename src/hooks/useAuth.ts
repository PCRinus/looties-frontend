import { ReduxEvents } from "../reducers/events";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import nacl from "tweetnacl";

export const useAuth = () => {
  const { publicKey, connect, disconnect, signMessage } = useWallet();
  const dispatch = useDispatch();

  const connectWallet = async () => {
    try {
      await connect();
    } catch (error) {
      console.log(`Unable to connect wallet: ${error} `);
      toast.error("Unable to connect wallet");
    } finally {
      dispatch({ type: ReduxEvents.CloseModal });
    }
  };

  const disconnectUser = async () => {
    await disconnect();
    dispatch({ type: ReduxEvents.SetJwt, payload: "" });
    dispatch({ type: ReduxEvents.UserLogout });
    dispatch({ type: ReduxEvents.CloseModal });
  };

  const authenticateUser = async () => {
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

          const { data: jwt } = await axios.post(
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
          );
          // get user data
          const { data: userData } = await axios.get(`${process.env.REACT_APP_API_URL}/user/${publicKey}`, {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });

          //get profile data
          const { data: profile } = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${userData.id}`, {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });

          // get token balance
          const { data: tokensBalance } = await axios.get(
            `${process.env.REACT_APP_API_URL}/items/${userData.id}/tokens-balance`,
            {
              headers: {
                Authorization: `Bearer ${jwt}`,
              },
            }
          );

          // Fetch settings data
          const settingsResponse = await axios.get(`${process.env.REACT_APP_API_URL}/user-settings/${userData.id}`, {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });

          dispatch({ type: ReduxEvents.SetJwt, payload: jwt });
          dispatch({ type: ReduxEvents.SetUserData, payload: userData });
          dispatch({ type: ReduxEvents.SetProfileData, payload: profile });
          dispatch({ type: ReduxEvents.UpdateUserSettings, payload: settingsResponse.data });
          dispatch({ type: ReduxEvents.SetTokensBalance, payload: tokensBalance });
        }
      } catch (err) {
        console.log("Signing error: ", err);
        toast.error("Signing error");
        disconnectUser();
      }
    }
  };

  return { connectWallet, authenticateUser, disconnectUser };
};
