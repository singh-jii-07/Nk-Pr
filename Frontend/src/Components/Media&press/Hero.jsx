import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="media-banner"
      className="relative w-full h-[75vh] flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80')", // replace with real image
      }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

    
      <div
        className="relative text-center px-6"
        data-aos="fade-up"
      >

        <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-widest text-white drop-shadow-2xl">
          Media & Press
        </h1>


        <div className="w-24 h-1 bg-white mx-auto my-6 rounded-full"></div>

    
        <p className="text-lg md:text-2xl max-w-3xl mx-auto font-light text-gray-200 drop-shadow-lg leading-relaxed">
          From political campaigns to powerful stories — our journey is
          highlighted across <span className="font-semibold text-white">media</span> and events.
        </p>
      </div>
    </section>
  );
};

export default Hero;
