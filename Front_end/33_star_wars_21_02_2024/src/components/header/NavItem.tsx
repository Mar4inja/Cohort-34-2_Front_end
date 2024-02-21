import React from "react";

const NavItem: React.FC<{ item: string }> = ({ item }) => {
  return <li className="nav-item btn btn-danger mx-1 ">{item}</li>;
};

export default NavItem;
