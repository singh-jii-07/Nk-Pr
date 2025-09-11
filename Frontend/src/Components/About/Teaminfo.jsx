import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import image from "../../assets/Founder.jpg";

const teamMembers = [
  {
    name: "Amit Sharma",
    role: "Campaign Strategist",
    img: image,
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Priya Verma",
    role: "Digital PR Head",
    img: image,
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Ravi Kumar",
    role: "Field Operations",
    img: image,
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Sneha Patel",
    role: "Creative Designer",
    img: image,
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
];

const Teaminfo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-[#5364FF]">Meet Our Team</h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            A passionate team of strategists, creators, and innovators working
            together to deliver impactful results for every campaign.
          </p>
        </div>

   
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 150} 
            >
              
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
              />

             
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-[#5364FF] font-medium mb-4">
                  {member.role}
                </p>

              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teaminfo;
