import React, { useEffect } from "react";
import Header from "./components/macro/Header";
import WebFont from "webfontloader";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { AnimatePresence } from "framer-motion";
import { Modal } from "./components/modals/Modal";
import { useSelector } from "react-redux";

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
      <Header />
      <AnimatePresence>{modal && <Modal modal={modal} />}</AnimatePresence>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
