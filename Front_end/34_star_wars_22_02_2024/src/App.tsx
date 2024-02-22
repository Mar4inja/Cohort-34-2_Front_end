import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/main/Hero";
import DreamTeam from "./components/main/DreamTeam";
import FarGalaxy from "./components/main/FarGalaxy";
import Footer from "./components/Footer";
import Main from "./components/main/Main";
import { navItems } from "./utils/constants";

function App() {

  const[page, setPage] = useState<string>(navItems[0]);

  console.log(page);
  

  return (
    <div className="container-fluid">
      <Header changePage={setPage}/>
      <Main page={page}/>
      <Footer/>
    </div>
  );
}

export default App;
