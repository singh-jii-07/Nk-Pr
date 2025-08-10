import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-white text-center px-6"
      style={{
        backgroundImage:
          "url('https://imgs.search.brave.com/ebKLxUBXqc4YgrhdDNzP7uvpd9lac0RAHhOmsyCjSI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcyLzRj/LzMwLzcyNGMzMGUw/OGUxYjJhNmZhYTZj/ZTM3ZmNkOWY0MDcx/LmpwZw')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

     
      <div className="relative z-10 max-w-4xl mx-48">
        
        <span className="inline-block px-5 py-2 rounded-full text-lg font-bold bg-[#0071AA] shadow-lg">
          NK PR & PROMOTIONS
        </span>

       
        <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          One Name for All Your Advertisement{" "}
          <span className="bg-gradient-to-r from-[#00F1FF] via-[#5364FF] to-[#FFAB3C] bg-clip-text text-transparent">
            & PR Needs
          </span>
        </h1>

        
        <p className="mt-4 text-lg text-gray-200">
          We are the fastest-growing PR agency in Bihar & Jharkhand with 10+
          years of expertise in political campaigns, media handling, and
          social media strategy.
        </p>

       
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg font-semibold bg-[#5364FF] hover:bg-[#0071AA] shadow-md hover:shadow-lg hover:shadow-[#00F1FF]/50 transition"
          >
            Get Started
          </a>
          <a
            href="/services"
            className="px-6 py-3 rounded-lg font-semibold border border-[#00F1FF] text-[#00F1FF] hover:bg-[#00F1FF] hover:text-black shadow-md transition"
          >
            Learn More
          </a>
        </div>

     
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-4 bg-white/10 rounded-lg border border-white/20 shadow-lg hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-[#00F1FF]">100+</h3>
            <p className="text-gray-300">Projects Delivered</p>
          </div>
          <div className="p-4 bg-white/10 rounded-lg border border-white/20 shadow-lg hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-[#FFAB3C]">10+</h3>
            <p className="text-gray-300">Years of Excellence</p>
          </div>
          <div className="p-4 bg-white/10 rounded-lg border border-white/20 shadow-lg hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-[#F56400]">50+</h3>
            <p className="text-gray-300">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
