import React, { useEffect } from "react";
import Header from "./components/macro/Header";
import WebFont from "webfontloader";
import GradientBorderBoxBlue from "./components/micro/GradientBorderBoxBlue";
import GradientBorderBoxRed from "./components/micro/GradientBorderBoxRed";
import GradientBorderBoxPurple from "./components/micro/GradientBorderBoxPurple";
import { UserBoxBlue, UserBoxPurple, UserBoxRed } from "./components/micro/UserBox";
import UserList from "./components/micro/UserList";
import LiveDropSidebar from "./components/micro/LiveDropSidebar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Homepage } from "./components/pages/Homepage";
import OpenBox from "./components/pages/OpenBox";

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
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<OpenBox />}></Route>
        </Routes>
      </Router>
      <div className="h-full  bg-custom_gray_1"></div>
    </>
  );
};

export default App;
