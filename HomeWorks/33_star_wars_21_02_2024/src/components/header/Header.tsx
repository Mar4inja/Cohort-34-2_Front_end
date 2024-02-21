import React from "react";
import Navigation from "./Navigation";
import { MainProps } from "../main/Main";

const Header: React.FC<MainProps> = ({page, setPage}) => {
  return (
    <div>
      <header>
        <h1 className="text-center">Luke SkyWalker</h1>
      
      </header>
      <Navigation page={page} setPage={setPage}/>
    </div>
  );
};

export default Header;
