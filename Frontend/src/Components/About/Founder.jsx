import React from "react";
import { Link } from "react-router-dom";
import FounderImage from "../../assets/Ceo.jpg"; 
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";

const Founder = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f0f4ff]" id="founder">
      <div className="max-w-7xl mx-auto px-6">
        
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-[#5364FF] tracking-tight">
            Leadership <span className="text-[#FFAB3C]">Vision</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary founder driving NKPR and Promotions with passion, 
            strategy, and innovation for impactful communication.
          </p>
        </div>

      
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
         
          <div className="flex justify-center md:justify-end">
            <div className="relative bg-white rounded-xl shadow-xl border-4 border-[#5364FF] p-2 hover:shadow-2xl hover:scale-105 transition-transform duration-500">
              
             
              <img
                src={FounderImage}
                alt="Founder NKPR"
                className="w-[350px] h-[350px] object-cover rounded-lg"
              />
              
              
              <div className="bg-[#5364FF] text-white text-center py-3 rounded-b-lg mt-2">
                <h3 className="text-lg font-bold tracking-wide">Nishant Singh</h3>
                <p className="text-sm opacity-90">Founder & CEO, NKPR Promotions</p>
              </div>
            </div>
          </div>

          
          <div>
            
            <blockquote className="italic text-xl text-gray-700 border-l-4 border-[#5364FF] pl-5 mb-6 leading-relaxed">
              "At NKPR and Promotions, we believe in the power of communication to 
              inspire change, build trust, and create lasting impact. Our mission 
              is to empower leaders, brands, and organizations through innovative 
              strategies that connect with people at every level."
            </blockquote>

            
            <p className="text-gray-600 leading-relaxed mb-4">
              With years of expertise in political PR, corporate branding, and 
              promotional campaigns, our founder has established NKPR as a trusted 
              name across multiple states in India. His vision is rooted in integrity, 
              creativity, and a results-driven approach that transforms ideas into 
              impactful outcomes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Under his leadership, NKPR and Promotions has managed 50+ successful 
              campaigns, collaborated with top leaders, and built strategies that 
              blend grassroots connection with modern innovation.
            </p>

            
      
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
