import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Navbar = () => {
  const navbar = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Media", path: "/media" }
  ];

  return (
    <div style={{ display: "flex", alignItems: "center", padding: "10px", background: "#eee" }}>
      
      <div style={{ marginRight: "20px" }}>
        <h1>Logo</h1>
      </div>

   
      <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0, padding: 0 }}>
        {navbar.map((item, index) => (
          <li key={index}>
            <Link to={item.path} style={{ textDecoration: "none", color: "black" }}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
