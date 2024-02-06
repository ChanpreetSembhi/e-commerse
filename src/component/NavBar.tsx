import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/react.svg";
import { RiHeartLine, RiShoppingCart2Line, RiUserLine } from "@remixicon/react";

export default function NavBar() {
  return (
    <nav className="py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="home" className="flex items-center space-x-2">
          <img src={Logo} alt="logo" />
          <h5 className="text-2xl font-bold">E-commerce</h5>
        </Link>
        <div className="flex items-center space-x-6">
            <NavLink to="/" className={({isActive}) => isActive ? "text-indigo-500" : "text-gray-500"}>Shop</NavLink>
            <NavLink to="/" className={({isActive}) => isActive ? "text-indigo-500" : "text-gray-500"}>Men</NavLink>
            <NavLink to="/" className={({isActive}) => isActive ? "text-indigo-500" : "text-gray-500"}>Women</NavLink>
            <NavLink to="/" className={({isActive}) => isActive ? "text-indigo-500" : "text-gray-500"}>Combos</NavLink>
            <NavLink to="/error" className={({isActive}) => isActive ? "text-indigo-500" : "text-gray-500"}>Joggers</NavLink>
        </div>
        <div className="flex items-center space-x-3">
            <NavLink to="/" className={({isActive}) => `${isActive ? "bg-indigo-500 text-gray-50" : "bg-gray-200 text-gray-600"} flex items-center justify-center rounded-md p-2`}><RiHeartLine className="size-4" /></NavLink>
            <NavLink to="/" className={({isActive}) => `${isActive ? "bg-indigo-500 text-gray-50" : "bg-gray-200 text-gray-600"} flex items-center justify-center rounded-md p-2`}><RiUserLine className="size-4" /></NavLink>
            <NavLink to="/cart" className={({isActive}) => `${isActive ? "bg-indigo-500 text-gray-50" : "bg-gray-200 text-gray-600"} flex items-center justify-center rounded-md p-2`}><RiShoppingCart2Line className="size-4" /></NavLink>
        </div>
      </div>
    </nav>
  );
}
