import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLightbulb, FaChartLine, FaHandshake, FaUsersCog } from "react-icons/fa";

const PoliticalConsulting = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    {
      icon: <FaLightbulb className="w-8 h-8 text-[#FFAB3C]" />,
      title: "Strategic Advice",
      desc: "Guiding leaders with expert advice backed by ground insights and voter research.",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-[#5364FF]" />,
      title: "Campaign Planning",
      desc: "Designing effective, data-driven political campaigns tailored for each constituency.",
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-[#16610E]" />,
      title: "Leadership Support",
      desc: "Helping leaders build strong connections with people through effective messaging.",
    },
    {
      icon: <FaUsersCog className="w-8 h-8 text-[#FF0000]" />,
      title: "Winning Strategies",
      desc: "Developing customized winning roadmaps that ensure long-term political success.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#5364FF]/5 via-white to-[#FFAB3C]/10 py-20 px-6 overflow-hidden">

      <div className="absolute top-10 left-10 w-32 h-32 bg-[#5364FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FFAB3C]/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        
        <h2
          className="text-4xl font-bold text-gray-800 mb-4 relative inline-block"
          data-aos="fade-down"
        >
          Political Consulting
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#5364FF] rounded-full"></span>
        </h2>

        <p
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
        >
          Our consulting services empower leaders with actionable strategies, 
          research-based planning, and expert guidance for winning campaigns.
        </p>

        
        <div className="relative space-y-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start text-left bg-white shadow-lg rounded-2xl p-6 border-l-4 border-transparent hover:border-[#5364FF] transition hover:shadow-2xl relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              
              <div className="absolute inset-0 bg-gradient-to-r from-[#5364FF]/5 to-[#FFAB3C]/5 opacity-0 hover:opacity-100 transition"></div>

             
              <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4 md:mb-0 md:mr-6 shadow-inner group-hover:scale-110 transition z-10">
                {step.icon}
              </div>

              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoliticalConsulting;
