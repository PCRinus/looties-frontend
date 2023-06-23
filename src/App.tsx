import React, { useEffect } from "react";
import Header from "./components/macro/Header";
import WebFont from "webfontloader";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LootboxesPage } from "./pages/LootboxesPage";
import { AnimatePresence } from "framer-motion";
import { Modal } from "./components/modals/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./components/macro/Footer";
import { MobileSidebar } from "./components/macro/MobileSideBar";
import OpenBox from "./pages/OpenBox";
import Homepage from "./pages/Homepage";
import { GameResponsiblyPage } from "./pages/GameResponsiblyPage";
import { useAuth } from "./hooks/useAuth";
import { useWallet } from "@solana/wallet-adapter-react";
import { ReduxEvents } from "./reducers/events";

const App: React.FC = () => {
  const modal = useSelector((state: any) => state.modals.currentModal);
  const auth = useSelector((state: any) => state.auth);
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const { publicKey, connected, disconnecting } = useWallet();
  const { authorizeWallet, loadUserData, loadProfileData } = useAuth();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Bai Jamjuree:400,500,600,700"],
      },
    });
  }, []);

  useEffect(() => {
    if (publicKey && connected && disconnecting === false) {
      dispatch({ type: ReduxEvents.SetNeedsAuth, payload: true });
    }
  }, [publicKey, connected, disconnecting, dispatch]);

  useEffect(() => {
    if (auth.needsAuth) {
      dispatch({ type: ReduxEvents.SetNeedsAuth, payload: false });
      authorizeWallet();
    }
  }, [auth.needsAuth, authorizeWallet, dispatch]);

  useEffect(() => {
    if (auth.jwt && !user.id) {
      loadUserData(auth.jwt);
    }
    if (auth.jwt && user.id && !user.profile) {
      loadProfileData(auth.jwt, user.id);
    }
  }, [auth.jwt, user.id, user.profile, loadUserData, loadProfileData]);

  return (
    <>
      <AnimatePresence>{modal && <Modal modal={modal} />}</AnimatePresence>
      <Router>
        <Header />
        <Routes>
          <Route path="/game-responsibly" element={<GameResponsiblyPage />} />
          <Route path="/lootboxes" element={<LootboxesPage />} />
          <Route path="/openbox" element={<OpenBox />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <MobileSidebar />
        <Footer />
      </Router>
    </>
  );
};

export default App;
