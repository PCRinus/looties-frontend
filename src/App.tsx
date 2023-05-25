import React, { useEffect } from "react";
import Header from "./components/macro/Header";
import WebFont from "webfontloader";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";

const App: React.FC = () => {
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
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
