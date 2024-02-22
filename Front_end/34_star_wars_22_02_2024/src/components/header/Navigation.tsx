
import React from "react";
import NavItem from "./NavItem";
import { navItems } from "../../utils/constants";


interface IProps {
  changePage: (newValue: string) => void;
}
 
const Navigation: React.FC<IProps> = ({changePage}) => {
  return (
   
      <nav className='fixed-top mt-2 ms-4'>
        <ul>
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} changePage={changePage} />
          ))}
        </ul>
      </nav>
 
  );
};

export default Navigation;