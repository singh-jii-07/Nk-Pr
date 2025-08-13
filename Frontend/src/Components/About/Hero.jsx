import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";


const AboutBanner = () => {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="relative text-white py-10 overflow-hidden bg-center bg-cover bg-fixed"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522205408450-add114ad53fe?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40"></div>

    
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6 py-8">
        
      
        <div data-aos="fade-right">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Empowering Leaders, <br />
            <span className="text-[#00E0FF]">Shaping the Future</span>
          </h1>
          <p className="text-lg text-gray-200 mb-10 max-w-lg leading-relaxed">
            At <span className="font-semibold text-[#FFD700]">NKPR and Promotions</span>, we provide
            strategic political insights, professional PR expertise, and impactful digital campaigns
            to help leaders connect with their audience and create meaningful change.
          </p>
          <a
            href="#team"
            className="inline-block px-8 py-3 rounded-full font-medium border border-[#00E0FF] text-[#00E0FF] hover:bg-[#00E0FF] hover:text-white transition-all duration-300"
          >
            Discover Our Journey
          </a>
        </div>

        
       
      </div>
    </section>
  );
};

export default AboutBanner;
