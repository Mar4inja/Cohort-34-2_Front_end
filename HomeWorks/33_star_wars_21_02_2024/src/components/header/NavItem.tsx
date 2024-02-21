import React from "react";

export interface NavItemProps {
  item: string;
  page: string;
  setPage: (page: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ item, page, setPage }) => {
  return <li className="nav-item btn btn-danger mx-1 "onClick={() => setPage(item)}>
  {item}</li>;
};

export default NavItem;
