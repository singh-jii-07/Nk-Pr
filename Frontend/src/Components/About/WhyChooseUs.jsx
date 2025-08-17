import React from "react";
import {
  FaBullhorn,
  FaUsers,
  FaChartLine,
  FaSearch,
  FaHandshake,
  FaLightbulb,
  FaGlobeAsia,
  FaAward,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaBullhorn className="w-10 h-10 text-[#FFAB3C]" />,
    title: "Proven Track Record",
    desc: "10+ years managing high-stakes campaigns across 6 states with measurable, winning outcomes.",
  },
  {
    icon: <FaUsers className="w-10 h-10 text-[#00F1FF]" />,
    title: "Trusted by Leaders",
    desc: "Proudly worked with MPs, MLAs, and the PM’s research team, earning long-term confidence.",
  },
  {
    icon: <FaLightbulb className="w-10 h-10 text-[#5364FF]" />,
    title: "Creative & Young Team",
    desc: "A vibrant, modern team delivering fresh PR strategies tailored for today’s digital-first audience.",
  },
  {
    icon: <FaSearch className="w-10 h-10 text-[#F56400]" />,
    title: "Data-Driven Research",
    desc: "Ground research and accurate data insights to design sharp, targeted campaign strategies.",
  },
  {
    icon: <FaChartLine className="w-10 h-10 text-[#16610E]" />,
    title: "360° PR Solutions",
    desc: "From social media to nukkad campaigns, we handle every dimension of political PR.",
  },
  {
    icon: <FaHandshake className="w-10 h-10 text-[#FF0000]" />,
    title: "Commitment & Integrity",
    desc: "Honest communication and a results-driven approach that clients can fully rely on.",
  },
  {
    icon: <FaGlobeAsia className="w-10 h-10 text-[#0071AA]" />,
    title: "Wide Presence",
    desc: "Strong presence across Bihar, Jharkhand, UP, and beyond, connecting with diverse communities.",
  },
  {
    icon: <FaAward className="w-10 h-10 text-[#FFAB3C]" />,
    title: "Proven Excellence",
    desc: "Handled the toughest constituencies, delivering recognition and success through innovation.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f0f4ff]" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-6xl font-bold text-[#5364FF] mb-4">
          Why Choose <span className="text-[#FFAB3C]">Us</span>
        </h2>

        
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          We’re not just another PR agency — we’re your partners in building influence, 
          winning trust, and creating impact. Our mix of experience, innovation, and 
          grassroots connection makes us stand apart.
        </p>

        
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#FFAB3C] 
                         hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
