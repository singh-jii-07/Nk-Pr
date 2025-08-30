import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaNewspaper, FaTv, FaBullhorn, FaShieldAlt } from "react-icons/fa";
import image from '../../assets/image.png'
const MediaHandling = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <FaNewspaper className="w-8 h-8 text-[#5364FF]" />,
      title: "Press & PR Coverage",
      desc: "Get featured across leading newspapers, magazines, and regional outlets.",
    },
    {
      icon: <FaTv className="w-8 h-8 text-[#FF0000]" />,
      title: "Digital & TV Media",
      desc: "Manage TV debates, interviews, and digital campaigns for maximum reach.",
    },
    {
      icon: <FaBullhorn className="w-8 h-8 text-[#FFAB3C]" />,
      title: "Crisis Communication",
      desc: "Quick, effective responses that protect your public image during challenges.",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-[#16610E]" />,
      title: "Reputation Building",
      desc: "Craft a long-term brand image that earns trust and authority.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
    
        <div className="flex justify-center" data-aos="fade-right">
          <img
            src={image}
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </div>

    
        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Media Handling
          </h2>
          <p className="text-gray-600 mb-8">
            From press conferences to digital campaigns, we ensure your message 
            reaches the right audience with maximum impact. Our media team handles 
            everything from reputation building to crisis management.
          </p>

          
          <div className="space-y-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl shadow hover:shadow-lg transition bg-gray-50"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaHandling;
