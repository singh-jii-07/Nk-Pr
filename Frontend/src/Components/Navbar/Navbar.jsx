import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImMenu2 } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbar = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Media", path: "/media" },
  ];

  return (
    <nav className="bg-[#5364FF] text-white px-6 py-4 flex items-center justify-between fixed w-full z-50 shadow-lg">
    
      <div className="text-2xl font-bold">
        <NavLink to="/">NK PR</NavLink>
      </div>

      
      <ul className="hidden md:flex space-x-6">
        {navbar.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                    ? "text-[#FFAB3C] font-semibold"
                    : "hover:text-[#00F1FF]"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
      >
      <ImMenu2  size={20}/>
      </button>

     
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[#5364FF] flex flex-col items-center space-y-4 py-4 md:hidden">
          {navbar.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-[#FFAB3C] font-semibold"
                      : "hover:text-[#00F1FF]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
