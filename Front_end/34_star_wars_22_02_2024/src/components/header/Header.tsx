import React, { ChangeEvent } from "react";
import Navigation from "./Navigation";

interface IProps {
  changePage: (newValue: string) => void;
}

const Header: React.FC<IProps> = ({ changePage }) => {
  return (
    <div>
      <header>
        <h1 className="text-center">Luke SkyWalker</h1>
      </header>
      <Navigation changePage={changePage}/>
    </div>
  );
};

export default Header;
