import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ImMenu2 } from "react-icons/im";
import Logo from '../../assets/NEW LOGO 1-01.png'

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
      className={`fixed z-50 transition-all duration-500 left-0 ${
        scrolled
          ? "top-4 w-full sm:left-1/2 sm:-translate-x-1/2 sm:w-[90%] md:w-[80%] bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 px-3 sm:px-6 py-3"
          : "top-0 w-full bg-transparent px-3 sm:px-6 py-5"
      } flex items-center justify-between`}
      style={{ maxWidth: "100vw" }}
    >
      <Link
        to="/"
        className={`text-lg sm:text-2xl font-bold tracking-wide ${
          scrolled ? "text-black" : "text-white"
        }`}
        style={{ whiteSpace: "nowrap" }}
      >
        <img src={Logo} alt="" className="h-16" />
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
        aria-label="Open menu"
      >
        <ImMenu2 size={26} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setIsOpen(false)}>
          <ul
            className="absolute top-16 right-2 left-2 mx-auto w-[96vw] max-w-xs bg-white/95 backdrop-blur-lg flex flex-col items-center space-y-3 py-6 rounded-xl border border-gray-200 shadow-xl"
            style={{ maxWidth: "96vw" }}
            onClick={e => e.stopPropagation()}
          >
            {links.map((link, i) => (
              <li key={i} className="w-full text-center">
                <Link
                  to={link.path}
                  className={`block py-2 ${
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
        </div>
      )}
    </nav>
  );
};

export default Navbar; 