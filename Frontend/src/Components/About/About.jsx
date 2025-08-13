import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBullhorn, FaUsers, FaChartLine, FaShareAlt } from "react-icons/fa";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stats = [
    { label: "Years in Political PR", value: "5+", color: "#00E0FF" },
    { label: "States Campaign Presence", value: "6", color: "#FFD700" },
    { label: "Campaigns Successfully Managed", value: "50+", color: "#00E0FF" },
    { label: "Media Collaborations", value: "100+", color: "#FFD700" },
  ];

  const services = [
    {
      icon: <FaBullhorn size={32} />,
      title: "Political Campaign Strategy",
      desc: "End-to-end planning & execution for impactful campaigns.",
    },
    {
      icon: <FaShareAlt size={32} />,
      title: "Social Media Management",
      desc: "Creative content, engagement & growth across platforms.",
    },
    {
      icon: <FaUsers size={32} />,
      title: "Ground Research & Surveys",
      desc: "Real-time field data to shape effective strategies.",
    },
    {
      icon: <FaChartLine size={32} />,
      title: "Media & PR Handling",
      desc: "Strong media ties for positive and wide coverage.",
    },
  ];

  const milestones = [
    { year: "2019", event: "Jharkhand Vidhan Sabha Election" },
    { year: "2020", event: "Bihar Assembly Election" },
    { year: "2021", event: "Worked with Sikkim Governor" },
    { year: "2022", event: "PR for Multiple MPs & Non-NDA Leaders" },
  ];

  return (
    <section className="bg-[#0B1F33] text-white">
      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One Name for All Your PR & Advertising Needs
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            At <span className="text-[#FFD700] font-semibold">NKPR and Promotions</span>, 
            we specialize in political PR, election campaigns, and brand image building. 
            With experience ranging from grassroots surveys to managing social media for top leaders, 
            we bring expertise, creativity, and results.
          </p>
          <p className="text-gray-400">
            Founded by a professional who worked with the Hon’ble Prime Minister’s research team, 
            we’ve been part of high-impact campaigns across Bihar, Jharkhand, and beyond.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6" data-aos="fade-left">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#112240] rounded-lg p-6 text-center shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-3xl font-bold" style={{ color: stat.color }}>
                {stat.value}
              </h3>
              <p className="text-gray-300 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="bg-white text-[#0B1F33] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
            Our Expertise
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 rounded-xl shadow-md text-center hover:shadow-lg hover:scale-105 transition"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="text-[#00E0FF] mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h4 className="font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Our Journey
        </h3>
        <div className="relative border-l border-[#00E0FF] pl-8 space-y-12">
          {milestones.map((mile, i) => (
            <div key={i} className="relative" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="absolute -left-4 top-1 w-6 h-6 bg-[#00E0FF] rounded-full"></div>
              <h4 className="text-xl font-semibold">{mile.year}</h4>
              <p className="text-gray-300">{mile.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#00E0FF] to-[#00FFD1] text-[#0B1F33] py-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Let’s Win Together</h3>
        <p className="mb-6">
          Partner with NKPR & Promotions to amplify your political influence.
        </p>
        <a
          href="#contact"
          className="px-8 py-3 rounded-full font-medium border border-[#0B1F33] hover:bg-[#0B1F33] hover:text-white transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
