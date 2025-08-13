import React ,{ useEffect }from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        
        
        <div className="flex-1 text-center lg:text-left"data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-[#00F1FF] via-[#5364FF] to-[#FFAB3C] bg-clip-text text-transparent">
              NK PR & Promotions
            </span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We are a team of young and creative minds capable of changing the outcome of any election
            through our expertise in social media and PR management. As the fastest-growing and most
            trusted PR agency in Bihar & Jharkhand, we have 10+ years of experience managing political
            campaigns, including some of the toughest seats in UP. Our presence spans across 6 states,
            backed by an efficient research team and a dedicated 50-member nukkad team.
          </p>
          <a
            href="/about"
            className="inline-block px-6 py-3 rounded-full font-semibold bg-[#5364FF] text-white hover:bg-[#0071AA] transition shadow-md"
          >
            Read More
          </a>
        </div>

        
        <div className="flex-1 grid grid-cols-2 gap-6" data-aos="fade-left">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#00F1FF] hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-[#00F1FF]">6+</h3>
            <p className="text-gray-600">States Presence</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#FFAB3C] hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-[#FFAB3C]">10+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#F56400] hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-[#F56400]">100+</h3>
            <p className="text-gray-600">Team Members</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#5364FF] hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-[#5364FF]">100+</h3>
            <p className="text-gray-600">Campaigns Managed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
