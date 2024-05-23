import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <header className="container py-[20px] flex items-center justify-between">
      <div>
        <Link to="/">
        <img className="w-full" src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex gap-10 font-medium text-lg">
          <li className="text-black hover:text-[#FF3811] duration-300">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-black hover:text-[#FF3811] duration-300">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="text-black hover:text-[#FF3811] duration-300">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="text-black hover:text-[#FF3811] duration-300">
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className="text-black hover:text-[#FF3811] duration-300">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-7">
        <div className="flex gap-5">
          <MdOutlineShoppingBag size={25} className="hover:text-[#FF3811] duration-300"/>
          <IoIosSearch size={25} className="hover:text-[#FF3811] duration-300"/>
        </div>
        <button className="btn-stroke">Appointment</button>
      </div>
    </header>
  );
};

export default Header;
