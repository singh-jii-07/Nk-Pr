import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ModiBhai from "../../assets/ModiBhai.jpg";
import Cm_assam from "../../assets/Cm_assam.jpg";
import Ravindar from "../../assets/Ravindar.jpg";
import Vdram from "../../assets/Vdram.jpg";
import BidyutBaran from "../../assets/BidyutBaran.jpg";
import Padamshree from "../../assets/Padamshree.jpg";
import AjayMahawar from "../../assets/AjayMahawar.jpg";
import ShriGanga from "../../assets/ShriGanga.jpg";
import ArjunMunda from "../../assets/ArjunMunda.jpg";
import AparnaSen from "../../assets/AparnaSen.jpg";
import RatnakarMishra from "../../assets/RatnakarMishra.jpg";
import ShantanuThakur from "../../assets/ShantanuThakur.jpg";
import ManaglPandey from "../../assets/ManaglPandey.jpg";
import SamratChaudhary from "../../assets/SamratChaudhary.jpg";
import ShivrajSinghChauhan from "../../assets/ShivrajSinghChauhan.jpg";
import ArunKumar from "../../assets/ArunKumar.jpg";
import RiturajKumar from "../../assets/RiturajKumar.jpg";
import GaneshSingh from "../../assets/GaneshSingh.jpg";

const FeaturedClients = () => {
  const clients = [
    { name: "Dr Ravindra Kumar Ray Our Guardian and Working State President BJP Jharkhand", image: Ravindar },
    { name: "Honorable PM Shri Narendra Modi During Bengal Election 2021", image: ModiBhai },
    { name: "Himanta Biswa Sarma (CM Assam)", image: Cm_assam },
    { name: "VD Ram MP Palamu Loksabha", image: Vdram },
    { name: "Shri Bidyut Baran Mahato MP, Jamshedpur Loksabha", image: BidyutBaran },
    { name: "Padamshree Ashok Bhagat Ji", image: Padamshree },
    { name: "Ajay Mahawar Chief WHIP BJP and MLA from Delhi's Ghonda Constituency", image: AjayMahawar },
    { name: "Shri Ganga Narayan Singh Governer Sikkim", image: ShriGanga },
    { name: "Arjun Munda EX CM Jharkhand and EX central Minister", image: ArjunMunda },
    { name: "Aparna Sen Gupta EX MLA Nirsa", image: AparnaSen },
    { name: "Shri Ratnakar Mishra MLA of Vindhyachal Constituency UP", image: RatnakarMishra },
    { name: "Shantanu Thakur MOS Port and Shipping Govt of India", image: ShantanuThakur },
    { name: "Managl Pandey Health Minister Bihar", image: ManaglPandey },
    { name: "Samrat Chaudhary Deputy CM Bihar", image: SamratChaudhary },
    { name: "Shivraj Singh Chauhan, Minister of Agriculture Reform Govt of India", image: ShivrajSinghChauhan },
    { name: "Dr Arun Kumar EX MP Jehanabad Bihar", image: ArunKumar },
    { name: "Rituraj Kumar", image: RiturajKumar },
    { name: "Ganesh Singh", image: GaneshSingh },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [clients.length]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Get visible cards
  const getVisibleClients = () => {
    if (isMobile) {
      return [{ ...clients[activeIndex], position: "active" }];
    }
    const left = (activeIndex - 1 + clients.length) % clients.length;
    const right = (activeIndex + 1) % clients.length;
    return [
      { ...clients[left], position: "left" },
      { ...clients[activeIndex], position: "active" },
      { ...clients[right], position: "right" },
    ];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#f5f9ff] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-14"
          data-aos="fade-up"
        >
          Featured <span className="text-[#5364FF]">Clients & Campaigns</span>
        </h2>

        {/* Carousel */}
        <div className="flex justify-center items-center gap-6" data-aos="fade-up">
          {getVisibleClients().map((client, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ease-in-out rounded-2xl shadow-lg overflow-hidden cursor-pointer
                ${
                  client.position === "active"
                    ? "w-[300px] sm:w-[360px] z-20 scale-105"
                    : "w-[240px] sm:w-[280px] opacity-60 hidden sm:block"
                }`}
              style={{
                background: "linear-gradient(145deg, #ffffff, #e6ecff)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <div className="relative h-[250px] sm:h-[300px]">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6 bg-white">
                <h3 className="text-sm sm:text-lg font-semibold text-gray-800 text-center line-clamp-3">
                  {client.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Circles */}
        <div
          className="flex justify-center items-center gap-4 flex-wrap mt-12"
          data-aos="fade-left"
        >
          {clients.map((client, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`cursor-pointer rounded-full p-[2px] transition-all duration-500 hover:scale-110 ${
                activeIndex === idx
                  ? "bg-gradient-to-r from-[#00F1FF] to-[#5364FF]"
                  : "bg-transparent"
              }`}
            >
              <div
                className={`rounded-full overflow-hidden border-2 ${
                  activeIndex === idx
                    ? "border-transparent"
                    : "border-gray-200 hover:border-[#FFAB3C]"
                }`}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClients;
