import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaBullseye, FaEye, FaCheckCircle } from "react-icons/fa";
import AboutImage from "../../assets/aboutimage.png";

const AboutSection = () => {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative bg-white text-gray-800">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="text-[#00B4D8] font-bold uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">
            Who We Are
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            NKPR and Promotions is your trusted partner for political, brand, and
            corporate communication strategies that deliver real, measurable impact.
          </p>
        </div>

        {/* About Company - Text + Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold mb-4 text-[#00B4D8]">
              About the Company
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              With years of expertise in PR and promotional campaigns, 
              we specialize in building strategies that not only capture 
              attention but also build lasting trust with the audience.
              Our experience spans political campaigns, corporate branding, 
              and large-scale public relations initiatives.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#00B4D8] mt-1">✔</span>
                Over 50+ successful political campaigns managed
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00B4D8] mt-1">✔</span>
                Strong presence across 6 states in India
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00B4D8] mt-1">✔</span>
                Experienced in digital strategy, PR, and branding
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-lg max-w-lg mx-auto"
            data-aos="fade-left"
          >
            <img
              src={AboutImage}
              alt="About NKPR"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Mission */}
          <div
            className="p-10 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 relative group border border-gray-100"
            data-aos="fade-up"
          >
            <div className="absolute inset-0 rounded-2xl border-2 border-[#00B4D8]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#00B4D8]/10">
                <FaBullseye className="text-3xl text-[#00B4D8]" />
              </div>
              <h3 className="text-2xl font-bold text-[#00B4D8]">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To empower leaders, brands, and organizations with creative 
              strategies that influence opinions, build trust, and create 
              meaningful change.
            </p>
          </div>

          {/* Vision */}
          <div
            className="p-10 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 relative group border border-gray-100"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 rounded-2xl border-2 border-[#FF8800]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF8800]/10">
                <FaEye className="text-3xl text-[#FF8800]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FF8800]">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become India’s most trusted PR and political promotion 
              agency, delivering ethical, impactful, and innovative 
              communication strategies that stand the test of time.
            </p>
          </div>

          {/* Values */}
          <div
            className="p-10 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 relative group border border-gray-100"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="absolute inset-0 rounded-2xl border-2 border-[#28A745]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#28A745]/10">
                <FaCheckCircle className="text-3xl text-[#28A745]" />
              </div>
              <h3 className="text-2xl font-bold text-[#28A745]">Our Values</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Integrity, innovation, transparency, and commitment to 
              excellence are at the heart of everything we do for our 
              clients and communities.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
