import React from "react";
import NavItem from "./NavItem";
import { navItems } from "../../utils/constants";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
