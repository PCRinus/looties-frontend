import React, { useEffect, useState } from "react";
import Header from "./components/macro/Header";
import WebFont from "webfontloader";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LootBox } from "./pages/LootBox";
import { AnimatePresence } from "framer-motion";
import { Modal } from "./components/modals/Modal";
import { useSelector } from "react-redux";
import { Footer } from "./components/macro/Footer";
import { MobileSidebar } from "./components/macro/MobileSideBar";
import OpenBox from "./pages/OpenBox";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  const modal = useSelector((state: any) => state.modals.currentModal);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const toggleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

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
          <Route path="/" element={<Profile />} />
        </Routes>
        <MobileSidebar isOpen={openSidebar} />
        <Footer openSidebar={openSidebar} toggleOpenSidebar={toggleOpenSidebar} />
      </Router>
    </>
  );
};

export default App;
