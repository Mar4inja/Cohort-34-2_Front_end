import React from "react";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import StarWars from "../pages/StarWars";
import Contacts from "../pages/Contacts";
import { Route, Routes } from "react-router-dom";

interface IProps {
  page: string;
}

const Main: React.FC<IProps> = ({ page }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/aboutMe" element={<AboutMe />} />
      <Route path="/starWars" element={<StarWars />} />
      
    </Routes>
  );
};

export default Main;

  // switch (page) {
  //   case navItems[0]:
  //     return <Home />;
  //   case navItems[1]:
  //     return <AboutMe />;
  //   case navItems[2]:
  //     return <StarWars />;
  //   default:
  //     return <Contacts />;
  // }


