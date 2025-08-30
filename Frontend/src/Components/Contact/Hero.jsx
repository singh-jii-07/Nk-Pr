import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
    
      <div className="absolute inset-0 bg-black/50"></div>

    
      <div
        className="relative text-center text-white px-6"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
          Contact Us
        </h1>

        
        <div className="w-28 h-1 bg-[#5364FF] mx-auto mb-6 rounded-full"></div>

        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95 leading-relaxed">
          Let’s connect and discuss how{" "}
          <span className="text-[#FFAB3C] font-semibold">NK PR</span> can make
          your campaign a <span className="text-[#FF0000] font-semibold">success</span>.
        </p>
      </div>
    </section>
  );
};

export default Hero;
