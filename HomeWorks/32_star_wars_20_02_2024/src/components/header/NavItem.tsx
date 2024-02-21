import React from "react";

const NavItem: React.FC<{ item: string }> = ({ item }) => {
    
  return <li>{item}</li>;
};

export default NavItem;
