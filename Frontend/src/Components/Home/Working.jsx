import React from "react";
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
    subDescription:
      "Gathering valuable insights before starting any campaign.",
    description:
      "Conduct ground surveys, voter sentiment analysis, and constituency mapping.",
  },
  {
    icon: <FaClipboardList />,
    title: "Strategy & Planning",
    subDescription: "Crafting tailored strategies for maximum impact.",
    description:
      "Design customized PR and campaign plans based on data and political objectives.",
  },
  {
    icon: <FaBullhorn />,
    title: "Execution on Ground & Online",
    subDescription: "Implementing strategies both physically and digitally.",
    description:
      "Deploy nukkad teams, rallies, social media campaigns, and media coverage.",
  },
  {
    icon: <FaChartLine />,
    title: "Monitoring & Adjustments",
    subDescription: "Tracking progress and making real-time tweaks.",
    description:
      "Use research feedback and analytics to tweak strategies instantly.",
  },
  {
    icon: <FaFileAlt />,
    title: "Reporting & Results",
    subDescription: "Evaluating success and presenting outcomes.",
    description:
      "Present post-campaign reports with impact and reach statistics.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      {/* Section Title */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-purple-700">
          How We Work
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
          From research to execution — our step-by-step process for campaign
          success.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto space-y-12">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b pb-6 last:border-b-0"
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-purple-600 text-white text-2xl shadow-lg">
              {step.icon}
            </div>

            {/* Step Number */}
            <div className="flex-shrink-0 text-3xl font-bold text-purple-300">
              {String(idx + 1).padStart(2, "0")}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-bold text-purple-800">
                {step.title}
              </h3>
              <p className="text-purple-500 text-sm mb-2">
                {step.subDescription}
              </p>
              <p className="text-gray-700">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
