import React, { useEffect, useState } from "react";
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

const App: React.FC = () => {
  const modal = useSelector((state: any) => state.modals.currentModal);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Bai Jamjuree:400,500,600,700"],
      },
    });
  }, []);

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
