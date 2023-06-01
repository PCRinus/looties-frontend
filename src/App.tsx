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
import { Chat } from "./components/macro/Chat";

const App: React.FC = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Bai Jamjuree:400,500,600,700"],
      },
    });
  }, []);

  return (
    <div>
      {/* <Header></Header> */}
      <div className="flex">
        {/* <LiveDropSidebar /> */}
        <Router>
          <Routes>
            <Route path="/" element={<OpenBox />}></Route>
          </Routes>
        </Router>
        {/* <Chat /> */}
      </div>
    </div>
  );
};

export default App;
