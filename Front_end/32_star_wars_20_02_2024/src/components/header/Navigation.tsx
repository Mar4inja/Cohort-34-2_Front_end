import React from "react";
import NavItem from "./NavItem";
import { navItems } from "../../utils/constants";

const Navigation = () => {
  return (
    <div>
      <nav style={{listStyle: 'none', position: 'fixed', top: '5px', left: '40px'}}>
        <ul style={{display: 'flex', padding: '0', }}>
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
