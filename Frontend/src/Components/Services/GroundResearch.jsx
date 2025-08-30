import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkedAlt, FaChartBar, FaClipboardCheck, FaUsers } from "react-icons/fa";

const GroundResearch = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <FaMapMarkedAlt className="w-10 h-10 text-[#FFAB3C]" />,
      title: "On-ground Surveys",
      desc: "Capturing real voter sentiment with field surveys across constituencies.",
    },
    {
      icon: <FaChartBar className="w-10 h-10 text-[#5364FF]" />,
      title: "Voter Analysis",
      desc: "Turning raw data into actionable insights about voter behavior.",
    },
    {
      icon: <FaClipboardCheck className="w-10 h-10 text-[#16610E]" />,
      title: "Strategy Reports",
      desc: "Delivering detailed reports that strengthen campaign planning.",
    },
    {
      icon: <FaUsers className="w-10 h-10 text-[#FF0000]" />,
      title: "Volunteer Feedback",
      desc: "Bringing authentic ground-level feedback directly from our team.",
    },
  ];

  return (
    <section>
    
      <div
        className="relative bg-fixed bg-center bg-cover h-[65vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://press.farm/wp-content/uploads/2023/03/political-pr-1.png')", 
          
        }}
      >
    
        <div className="absolute inset-0 bg-black/60"></div>

        
        <div
          className="relative text-center text-white px-6 max-w-3xl"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Ground Research
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Unlock the pulse of the people with surveys, insights, and 
            research-backed strategies that drive impactful campaigns.
          </p>
        </div>
      </div>

    
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14" data-aos="fade-down">
            <h3 className="text-3xl font-extrabold text-gray-800">
              What We Do
            </h3>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our team combines field expertise with cutting-edge analytics 
              to provide leaders with reliable, actionable insights.
            </p>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-3 border-t-4 border-transparent hover:border-[#5364FF]"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#5364FF]/10 via-transparent to-[#FFAB3C]/10 opacity-0 group-hover:opacity-100 rounded-2xl transition"></div>

        
                <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-100 mx-auto mb-6 shadow-inner group-hover:scale-110 transform transition">
                  {item.icon}
                </div>

            
                <h4 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroundResearch;
