import React from "react";
import { Link, Outlet } from "react-router-dom";

interface IProps {
  item: string;
  changePage: (newValue: string) => void;

}
const NavItem: React.FC<IProps> = ({ item, changePage }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="btn btn-danger mx-1 opacity-25" to="/">Home</Link>
        </li>
        <li>
          <Link className="btn btn-danger mx-1 opacity-25" to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link className="btn btn-danger mx-1 opacity-25" to="/aboutMe">About Me</Link>
        </li>
        <li>
          <Link className="btn btn-danger mx-1 opacity-25" to="/starWars">Star Wars</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItem;