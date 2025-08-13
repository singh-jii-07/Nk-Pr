import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const AboutBanner = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#5364FF] to-[#00F1FF] text-white py-24 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Left Content */}
        <div data-aos="fade-right">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Empowering Leaders, <br />
            <span className="text-white/80">Shaping the Future</span>
          </h1>
          <p className="text-lg text-white/90 mb-8">
            At <span className="font-semibold">Your Company Name</span>, we combine
            strategic political insights, PR expertise, and digital innovation
            to connect you with your audience and create real impact.
          </p>
          <a
            href="#team"
            className="bg-white text-[#0B1F33] px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Discover Our Journey
          </a>
        </div>

        {/* Right Image / Illustration */}
        <div className="flex justify-center md:justify-end" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342165abb?auto=format&fit=crop&w=800&q=80"
            alt="About us"
            className="rounded-2xl shadow-2xl border-4 border-white/20"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
