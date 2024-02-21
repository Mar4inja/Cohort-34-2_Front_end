import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/main/Hero";
import DreamTeam from "./components/main/DreamTeam";
import FarGalaxy from "./components/main/FarGalaxy";
import Footer from "./components/Footer";
import Main from "./components/main/Main";

function App() {

const [page, setPage] = useState('home');

  return (
    <div className="container-fluid">
      <Header/>
      <Main page={page} setPage={setPage}/>
      <Footer/>
    </div>
  );
}

export default App;
