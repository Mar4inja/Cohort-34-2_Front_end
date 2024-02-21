import React from "react";
import NavItem from "./NavItem";
import { navItems } from "../../utils/constants";

const Navigation = () => {
  return (
   
      <nav className='fixed-top mt-2 ms-4'>
        <ul>
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
      </nav>
 
  );
};

export default Navigation;
