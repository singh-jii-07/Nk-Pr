import React from "react";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#0B1F33] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10">

       
        <div>
          <img
            src={Logo} 
            alt="NK PR Logo"
            className="h-14 mb-4"
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            We are the fastest-growing PR agency in Bihar & Jharkhand with over a decade of expertise
            in political campaigns, media handling, and social media strategy.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-[#00F1FF] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-[#FFAB3C] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#FFAB3C] transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[#FFAB3C] transition">Services</Link></li>
            <li><Link to="/media" className="hover:text-[#FFAB3C] transition">Media</Link></li>
            <li><Link to="/contact" className="hover:text-[#FFAB3C] transition">Contact</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-[#00F1FF] mb-4">Get In Touch</h3>
          <p className="text-gray-300 text-sm">📧 nkprindia@gmail.com</p>
          <p className="text-gray-300 text-sm">📞 +917903632554</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="p-2 bg-[#0071AA] rounded-full hover:bg-[#FFAB3C] hover:text-black transition"><FaLinkedinIn /></a>
            <a href="#" className="p-2 bg-[#0071AA] rounded-full hover:bg-[#FFAB3C] hover:text-black transition"><FaInstagram /></a>
            <a href="#" className="p-2 bg-[#0071AA] rounded-full hover:bg-[#FFAB3C] hover:text-black transition"><FaYoutube /></a>
            <a href="#" className="p-2 bg-[#0071AA] rounded-full hover:bg-[#FFAB3C] hover:text-black transition"><FaFacebookF /></a>
          </div>
        </div>

      </div>

    
      <div className="bg-[#071525] text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} NK PR & Promotions — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
