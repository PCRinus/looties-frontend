import React, { useEffect } from "react";
import Header from "./components/macro/Header";
import WebFont from "webfontloader";
import GradientBorderBoxBlue from "./components/micro/GradientBorderBoxBlue";
import GradientBorderBoxRed from "./components/micro/GradientBorderBoxRed";
import GradientBorderBoxPurple from "./components/micro/GradientBorderBoxPurple";
import {
  UserBoxBlue,
  UserBoxPurple,
  UserBoxRed,
} from "./components/micro/UserBox";

const App: React.FC = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Bai Jamjuree:400,500,600,700"],
      },
    });
  }, []);

  return (
    <div className="flex justify-normal items-start">
      <Header></Header>
      {/*
      <div className="test mt-52">
        <UserBoxRed />
        <UserBoxBlue />
        <UserBoxPurple />
      </div> */}
    </div>
  );
};

export default App;
