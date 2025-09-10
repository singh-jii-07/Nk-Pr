import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ImMenu2 } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClass = (path) =>
    `relative text-sm sm:text-base font-medium transition duration-300 ${
      location.pathname === path
        ? "text-[#00F1FF] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#00F1FF]"
        : scrolled
        ? "text-black hover:text-[#FFAB3C]" 
        : "text-white hover:text-[#FFAB3C]"
    }`;

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 ${
        scrolled
          ? "top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 px-6 py-3"
          : "top-0 left-0 w-full bg-transparent px-6 py-5"
      } flex items-center justify-between`}
    >
    
      <Link
        to="/"
        className={`text-lg sm:text-2xl font-bold tracking-wide ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        NK PR
      </Link>

      
      <ul className="hidden md:flex space-x-6 lg:space-x-8">
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.path} className={linkClass(link.path)}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${scrolled ? "text-black" : "text-white"} md:hidden`}
      >
        <ImMenu2 size={26} />
      </button>

      
      {isOpen && (
        <ul className="absolute top-14 right-2 w-[90vw] bg-white/90 backdrop-blur-lg flex flex-col items-center space-y-3 py-5 rounded-xl border border-gray-200 shadow-xl md:hidden">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? "text-[#00F1FF] font-semibold"
                    : "text-black hover:text-[#00F1FF]"
                } text-lg`}
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