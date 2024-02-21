import React from "react";
import NavItem from "./NavItem";
import { navItems } from "../../utils/constants";
import { MainProps } from "../main/Main";

const Navigation: React.FC<MainProps> = ({page, setPage}) => {
  return (
   
      <nav className='fixed-top mt-2 ms-4'>
        <ul>
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} page={page} setPage={setPage} />
          ))}
        </ul>
      </nav>
 
  );
};

export default Navigation;
