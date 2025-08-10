import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbar = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Media", path: "/media" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
     
      <div className="text-2xl font-bold">
        <Link to="/">Logo</Link>
      </div>

      
      <ul className="flex space-x-6">
        {navbar.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
