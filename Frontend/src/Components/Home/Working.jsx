import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaSearch,
  FaClipboardList,
  FaBullhorn,
  FaChartLine,
  FaFileAlt,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Research & Analysis",
    subDescription: "Gathering valuable insights before starting any campaign.",
    description:
      "Conduct ground surveys, voter sentiment analysis, and constituency mapping.",
    color: "#00F1FF",
  },
  {
    icon: <FaClipboardList />,
    title: "Strategy & Planning",
    subDescription: "Crafting tailored strategies for maximum impact.",
    description:
      "Design customized PR and campaign plans based on data and political objectives.",
    color: "#5364FF",
  },
  {
    icon: <FaBullhorn />,
    title: "Execution on Ground & Online",
    subDescription: "Implementing strategies both physically and digitally.",
    description:
      "Deploy nukkad teams, rallies, social media campaigns, and media coverage.",
    color: "#FFAB3C",
  },
  {
    icon: <FaChartLine />,
    title: "Monitoring & Adjustments",
    subDescription: "Tracking progress and making real-time tweaks.",
    description:
      "Use research feedback and analytics to tweak strategies instantly.",
    color: "#F56400",
  },
  {
    icon: <FaFileAlt />,
    title: "Reporting & Results",
    subDescription: "Evaluating success and presenting outcomes.",
    description:
      "Present post-campaign reports with impact and reach statistics.",
    color: "#0071AA",
  },
];

export default function HowWeWork() {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  return (
    <section className="w-full py-20 px-4 md:px-12 bg-white">
   
      <div className="w-full text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          How We <span className="text-[#5364FF]"> Work</span> 
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
          From research to execution — our step-by-step process for campaign success.
        </p>
      </div>

     
      <div className="space-y-20 max-w-7xl mx-auto"data-aos="zoom-in-down">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start md:items-center border-b pb-12 group transition duration-300"
          >
           
            <div className="text-5xl font-extrabold text-gray-200 group-hover:text-[#5364FF] transition">
              0{idx + 1}
            </div>

           
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-xl font-bold mb-1 text-gray-600">{step.title}</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 leading-relaxed">
                <li className="text-black">{step.subDescription}</li>
              </ul>
            </div>

         
            <div className="col-span-1 md:col-span-1 text-sm text-gray-700 leading-relaxed">
              {step.description}
            </div>

  
            <div
              className="w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl shadow-lg mx-auto md:ml-24"
              style={{ backgroundColor: step.color }}
            >
              {step.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
