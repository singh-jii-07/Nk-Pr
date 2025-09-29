import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBriefcase,
  FaUsers,
  FaMapMarkerAlt,
  FaAward,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

const experiences = [
  {
    year: "2019",
    title: "Jharkhand Vidhan Sabha Election",
    description:
      "Managed ground campaigns, social media PR & strategy to strengthen candidates’ presence.",
    icon: <FaBriefcase className="text-indigo-600 text-3xl" />,
  },
  {
    year: "2020",
    title: "Worked with PM’s Research Team",
    description:
      "Provided political research & PR support for national-level strategy building.",
    icon: <FaAward className="text-yellow-500 text-3xl" />,
  },
  {
    year: "2020",
    title: "Bihar Assembly Election",
    description:
      "Handled media management & on-ground voter outreach across constituencies.",
    icon: <FaUsers className="text-green-600 text-3xl" />,
  },
  {
    year: "2021",
    title: "UP Election (Against Swami Prasad Maurya)",
    description:
      "Strategized and executed campaign for one of the most challenging seats.",
    icon: <FaMapMarkerAlt className="text-red-500 text-3xl" />,
  },
  {
    year: "2022",
    title: "Punjab Assembly Elections",
    description:
      "Designed digital PR campaigns and managed volunteer coordination across districts.",
    icon: <FaHandshake className="text-blue-600 text-3xl" />,
  },
  {
    year: "2024",
    title: "General Election Campaigns",
    description:
      "Led state-wide strategies, voter sentiment analysis & data-driven political outreach.",
    icon: <FaChartLine className="text-purple-600 text-3xl" />,
  },
   {
    year: "2025",
    title: "Bihar Assembly Election",
    description:
      "Conducted on-ground research across all 246 seat constituencies, gathering insights and voter data to strengthen campaign strategy.",
    icon: <FaUsers className="text-red-600 text-3xl" />,
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-16">
          Our Experience
        </h2>

        
        <div className="relative">
         
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-300 rounded"></div>

          <div className="space-y-16 relative">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex items-center justify-between w-full ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                data-aos="fade-up"
              >
               
                <div className="w-5/12 bg-white shadow-lg rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {exp.icon}
                    <span className="text-sm text-gray-500 font-medium">
                      {exp.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600">{exp.description}</p>
                </div>

               
                <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow absolute left-1/2 transform -translate-x-1/2"></div>

           
                <div className="w-5/12 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
