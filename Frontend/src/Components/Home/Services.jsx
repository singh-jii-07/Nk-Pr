import React, { useState } from "react";
import { FaBullhorn, FaShareAlt, FaNewspaper, FaUsers } from "react-icons/fa";

const Services = () => {
  const mainCardIndex = 0; 
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: "Political Campaigns",
      desc: "Proven election strategies with strong on-ground presence and powerful outreach.",
      icon: <FaBullhorn size={40} />,
      gradient: "bg-gradient-to-br from-[#5364FF] to-[#00F1FF]",
    },
    {
      title: "Social Media Management",
      desc: "Full management of all platforms with creative content and targeted growth.",
      icon: <FaShareAlt size={40} />,
      gradient: "bg-gradient-to-br from-[#5364FF] to-[#00F1FF]",
    },
    {
      title: "Media & PR Handling",
      desc: "Strong media connections and event coverage to build your brand presence.",
      icon: <FaNewspaper size={40} />,
      gradient: "bg-gradient-to-br from-[#00F1FF] to-[#5364FF]",
    },
    {
      title: "Ground Research & Survey",
      desc: "In-depth field surveys and analysis to shape effective campaign strategies.",
      icon: <FaUsers size={40} />,
      gradient: "bg-gradient-to-br from-[#00F1FF] to-[#5364FF]",
    },
  ];

  return (
    <section className="py-20 bg-[#F4F7FE] text-center">
      <h2 className="text-4xl font-bold mb-4">
        Our <span className="text-[#5364FF]">Services</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Strategic PR & promotional solutions to amplify your influence,
        connect with your audience, and achieve impactful results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {services.map((service, i) => {
          const isMain = i === mainCardIndex;
          const isHovered = hoveredCard === i;

          const shouldShowGradient =
            (isMain && hoveredCard === null) || isHovered;

          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                p-8 rounded-2xl shadow-lg border border-gray-200 
                transition-all duration-300 transform hover:scale-105 cursor-pointer
                ${shouldShowGradient ? `${service.gradient} text-white` : "bg-white text-[#0B1F33]"}
              `}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p
                className={`mb-6 ${
                  shouldShowGradient ? "text-white/90" : "text-gray-600"
                }`}
              >
                {service.desc}
              </p>
              <button
                className={`px-6 py-2 rounded-full font-medium transition border-2 ${
                  shouldShowGradient
                    ? "border-white hover:bg-white hover:text-[#0B1F33]"
                    : "border-[#5364FF] hover:bg-white hover:text-[#0B1F33]"
                }`}
              >
                View
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
