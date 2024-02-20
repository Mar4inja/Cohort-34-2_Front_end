import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div>
      <header style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.2em" }}>Luke SkyWalker</h1>
      </header>
      <Navigation />
    </div>
  );
};

export default Header;
