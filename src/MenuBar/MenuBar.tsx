import React from "react";
import { Link, NavLink } from "react-router-dom";
//import logo from "../logo/react-logo.png";

const MenuBar: React.FC<{
  buttonArr: any;
}> = ({ buttonArr }) => {
  
  // const buttonContent = buttonArr.map((bt: any) => {
  //   return (

  //     <Link to = {bt.path}>{bt.label}</Link>
  //   );
  // });

  const buttonContent = buttonArr.map((bt: any) => {
      return (
  
        <NavLink className = {({isActive}) => isActive ?  'text-green-500' :'text-white'} to = {bt.path}>{bt.label}</NavLink>
      );
    });

  return (
    <div className="flex justify-between items-center bg-blue-500 p-4">
      <div className="flex space-x-4">
        <img />
        {buttonContent}
      </div>
      <button className="text-white">Log In</button>
    </div>
  );
};

export default MenuBar;







