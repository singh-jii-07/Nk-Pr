import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from '../../assets/Service-hero.avif'

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen ">
    
      <section
  id="services-banner"
  className="relative text-white py-20 overflow-hidden bg-center bg-cover bg-fixed flex items-center"
  style={{
    minHeight: "100vh",
    backgroundImage:`url(${hero})`
  }}
>
  <div className="absolute inset-0 bg-black/70" />

  <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
    <h1
      data-aos="fade-up"
      className="text-4xl sm:text-6xl font-extrabold leading-tight text-white"
    >
      Your Trusted Partner <br />
      <span className="text-[#5364FF]">in Political Campaigns & PR</span>
    </h1>

    <p
      data-aos="fade-up"
      data-aos-delay="150"
      className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-200"
    >
      We deliver end-to-end solutions — from campaign planning and social
      media to ground research, media handling, and political consulting —
      helping leaders connect with people and win trust.
    </p>

    <p
      data-aos="fade-up"
      data-aos-delay="250"
      className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start"
    >
      <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white">
        10+ Years
      </span>
      <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white">
        6 States
      </span>
      <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white">
        100+ Nukkad Team
      </span>
    </p>

    <div
      className="mt-10"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <a
        href="#services-list"
        className="inline-block rounded-full bg-[#5364FF] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#3f4ed1] transition"
      >
        Explore Our Services
      </a>
    </div>
  </div>
</section>
    </div>
  );
}