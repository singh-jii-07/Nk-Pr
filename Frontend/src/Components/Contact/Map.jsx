import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const MapSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] ">
      <div className="grid md:grid-cols-3 h-full ">
        
    
<div
  className="bg-gradient-to-br from-[#6A11CB] via-[#2575FC] to-[#FF416C] text-white flex flex-col justify-center p-10 md:p-16 space-y-6"
  data-aos="fade-right"
>
  <h2 className="text-3xl md:text-4xl font-bold">NKPR India</h2>
  <p className="text-lg opacity-90">
    Visit our office or connect online — we are always ready to support your campaign journey.
  </p>

  <ul className="space-y-4 text-lg">
    <li className="flex items-center gap-3">
      <FaMapMarkerAlt className="text-[#FFAB3C] text-xl" />
      <span>Ranchi, Jharkhand</span>
    </li>
    <li className="flex items-center gap-3">
      <FaPhoneAlt className="text-[#FFAB3C] text-xl" />
      <span>+91 98765 43210</span>
    </li>
    <li className="flex items-center gap-3">
      <FaEnvelope className="text-[#FFAB3C] text-xl" />
      <span>nkprindia@gmail.com</span>
    </li>
  </ul>
</div>


    
        <div
          className="md:col-span-2 w-full h-screen"
          data-aos="fade-left"
        >
          <iframe
            title="NKPR Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.365748710256!2d85.3096!3d23.3441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d2e1b1a6e8a9f%3A0x3c56d2b8b1b7f21a!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1693913132945!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
