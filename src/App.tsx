import React, { useEffect } from "react";
import Header from "./components/macro/Header";
import WebFont from "webfontloader";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LootboxesPage } from "./pages/LootboxesPage";
import { AnimatePresence } from "framer-motion";
import { Modal } from "./components/modals/Modal";
import { useSelector } from "react-redux";
import { Footer } from "./components/macro/Footer";
import { MobileSidebar } from "./components/macro/MobileSideBar";
import OpenBox from "./pages/OpenBox";
import Homepage from "./pages/Homepage";
import { GameResponsiblyPage } from "./pages/GameResponsiblyPage";
import { useAuth } from "./hooks/useAuth";
import { useWallet } from "@solana/wallet-adapter-react";
import Profile from "./pages/Profile";
import { TermsPage } from "./pages/TermsPage";
import { FairnessPage } from "./pages/FairnessPage";
import { ErrorPage } from "./pages/ErrorPage";
import { SupportPage } from "./pages/SupportPage";
import { BannedPage } from "./pages/BannedPage";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./components/micro/ProtectedRoute";

const App: React.FC = () => {
  const modal = useSelector((state: any) => state.modals.currentModal);
  const user = useSelector((state: any) => state.user);
  const { publicKey, connected, disconnecting } = useWallet();
  const { authenticateUser, disconnectWallet } = useAuth();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Bai Jamjuree:400,500,600,700"],
      },
    });
  }, []);

  useEffect(() => {
    if (!connected) {
      disconnectWallet();
    } else {
      authenticateUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey, connected]);

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
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute user={user} redirectPath="/">
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/terms-of-service" element={<TermsPage />} />
          <Route path="/fairness" element={<FairnessPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/banned" element={<BannedPage />} />
        </Routes>
        <MobileSidebar />
        <Footer />
        <Toaster position="bottom-center" reverseOrder={false} />
      </Router>
    </>
  );
};

export default App;
