import React from "react";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/NEW LOGO W-01.png";

const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#0B1F33] via-[#071525] to-[#0B1F33] text-white relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-10 w-52 h-52 bg-[#5364FF]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00F1FF]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10">
        {/* Logo & About */}
        <div className="text-center md:text-left">
          <img src={Logo} alt="NK PR Logo" className="h-12 sm:h-14 mx-auto md:mx-0 mb-4" />
          <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            We are the fastest-growing PR agency in Bihar & Jharkhand with over a decade of expertise
            in political campaigns, media handling, and social media strategy.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-[#00F1FF] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="group relative inline-block text-gray-300 hover:text-[#FFAB3C] transition"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAB3C] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-[#00F1FF] mb-4">Get In Touch</h3>
          <p className="text-gray-300 text-sm">📧 nkprindia@gmail.com</p>
          <p className="text-gray-300 text-sm">📞 +91 7903632554</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-5">
            {[{ icon: <FaLinkedinIn />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaYoutube />, link: "#" },
              { icon: <FaFacebookF />, link: "#" }].map((s, i) => (
              <a
                key={i}
                href={s.link}
                className="p-3 rounded-full border border-white/20 bg-white/5 text-white 
                           hover:bg-[#5364FF] hover:border-[#5364FF] hover:scale-110 
                           transition-all duration-300 shadow-md"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative bg-[#071525]/90 text-center py-4 text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#00F1FF] font-semibold">NK PR & Promotions</span> — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
