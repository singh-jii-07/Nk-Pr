import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImMenu2 } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Media", path: "/media" },
  ];

  const linkClass = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive ? "text-[#00F1FF] font-semibold" : "hover:text-[#FFAB3C]"
    }`;

  return (
    <nav className="bg-[#0B1F33] text-white px-6 py-4 flex items-center justify-between fixed w-full z-50 shadow-[rgba(0,0,0,0.15)_0px_4px_10px]">
      
      <NavLink to="/" className="text-2xl font-bold">
        NK PR
      </NavLink>

  
      <ul className="hidden md:flex space-x-6">
        {links.map((link, i) => (
          <li key={i}>
            <NavLink to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

     
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <ImMenu2 size={20} />
      </button>

     
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[#0B1F33] flex flex-col items-center space-y-4 py-4 md:hidden shadow-[rgba(0,0,0,0.15)_0px_4px_10px]">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
