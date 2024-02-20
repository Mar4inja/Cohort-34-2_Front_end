import React from "react";

const NavItem: React.FC<{ item: string }> = ({ item }) => {
    
  return <li style={{ margin: "0 5px" }}>{item}</li>;
};

export default NavItem;
