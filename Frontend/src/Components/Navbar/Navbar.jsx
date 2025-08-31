import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ImMenu2 } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    
  ];

  const linkClass = (path) =>
    `text-sm sm:text-base transition-colors duration-300 ${
      location.pathname === path
        ? "text-[#00F1FF] font-semibold"
        : "hover:text-[#FFAB3C]"
    }`;

  return (
    <nav className="bg-[#0B1F33] text-white px-4 py-3 flex items-center justify-between fixed w-full z-50 shadow-md">
  
      <Link to="/" className="text-lg sm:text-2xl font-bold">
        NK PR
      </Link>

      
      <ul className="hidden md:flex space-x-4 sm:space-x-6">
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.path} className={linkClass(link.path)}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <ImMenu2 size={24} />
      </button>

     
      {isOpen && (
        <ul className="absolute top-14 right-2 w-[90vw] bg-[#0B1F33] flex flex-col items-center space-y-3 py-4 rounded-lg border border-[#00F1FF] shadow-lg md:hidden">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                to={link.path}
                className={linkClass(link.path)}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
