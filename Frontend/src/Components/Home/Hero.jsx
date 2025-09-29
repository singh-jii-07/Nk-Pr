import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from '../../assets/Home-hero.webp'

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white text-center px-4 sm:px-6 py-16"
      style={{
        backgroundImage:
         `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
     
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8"
        data-aos="fade-up"
      >
       
        <span
          className="inline-block px-4 py-2 text-lg sm:text-base font-black border bg-white/10 rounded-full  border-white/20 shadow-lg text-white"
          data-aos="zoom-in"
        >
          NK PR & PROMOTIONS
        </span>

    
        <h1
          className="mt-6 text-2xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          One Name for All Your Advertisement{" "}
          <span className="bg-gradient-to-r from-[#00F1FF] via-[#5364FF] to-[#FFAB3C] bg-clip-text text-transparent">
            & PR Needs
          </span>
        </h1>


        <p
          className="mt-4 text-sm sm:text-base text-gray-200 max-w-md sm:max-w-xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          We are the fastest-growing PR agency in Bihar & Jharkhand with 10+
          years of expertise in political campaigns, media handling, and social
          media strategy.
        </p>

    
        <div
          className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <a
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold rounded-full bg-[#5364FF] hover:bg-[#0071AA] shadow-md hover:shadow-lg hover:shadow-[#00F1FF]/50 transition"
          >
            Get Started
          </a>
          <a
            href="/services"
            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold rounded-full border border-[#00F1FF] text-[#00F1FF] hover:bg-[#00F1FF] hover:text-black shadow-md transition"
          >
            Learn More
          </a>
        </div>

       
        <div
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 px-2"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="p-4 bg-white/10 rounded-lg border border-white/20 shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#00F1FF]">
              100+
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Projects Delivered
            </p>
          </div>
          <div className="p-4 bg-white/10 rounded-lg border border-white/20 shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#FFAB3C]">
              10+
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Years of Excellence
            </p>
          </div>
          <div className="p-4 bg-white/10 rounded-lg border border-white/20 shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F56400]">
              50+
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
