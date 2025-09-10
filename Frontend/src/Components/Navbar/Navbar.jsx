import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ImMenu2 } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      className={`fixed z-50 transition-all duration-500
        left-1/2 -translate-x-1/2 flex items-center justify-between
        ${scrolled
          ? "top-3 bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 py-3 px-4"
          : "top-0 bg-transparent py-5 px-4"
        }
        w-[95%] sm:w-[90%] md:w-[80%] lg:w-[75%]
      `}
    >
      {/* Logo */}
      <Link
        to="/"
        className={`text-lg sm:text-2xl font-bold tracking-wide ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        NK PR
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-6 lg:space-x-8">
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.path} className={linkClass(link.path)}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${scrolled ? "text-black" : "text-white"} md:hidden`}
      >
        <ImMenu2 size={26} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-full bg-white/95 backdrop-blur-lg z-[100] flex flex-col md:hidden">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-6 text-3xl font-bold text-gray-700"
          >
            ✕
          </button>

          {/* Links */}
          <ul className="flex flex-col items-center justify-center flex-1 space-y-10 overflow-y-auto">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? "text-[#00F1FF] font-semibold"
                      : "text-black hover:text-[#00F1FF]"
                  } text-xl`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
