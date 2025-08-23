import React from 'react'
import { FaChartPie, FaBullhorn, FaCalendarAlt, FaUserTie, FaUsers, FaChartLine } from 'react-icons/fa'

const Compaign = () => {
  const features = [
    { 
      icon: <FaChartPie />, 
      title: "SWOT & Voter Segmentation", 
      desc: "In-depth analysis of strengths, weaknesses, opportunities, and threats to identify voter groups and tailor outreach effectively." 
    },
    { 
      icon: <FaBullhorn />, 
      title: "Message & Manifesto Positioning", 
      desc: "Crafting sharp political messaging and positioning manifestos to connect emotionally with the public and build credibility." 
    },
    { 
      icon: <FaCalendarAlt />, 
      title: "Booth-level Planning & Calendar", 
      desc: "Systematic scheduling and booth-level strategies to ensure disciplined execution and maximum voter coverage." 
    },
    { 
      icon: <FaUserTie />, 
      title: "Candidate & Opponent Profiling", 
      desc: "Thorough research on candidate image and opponents’ weaknesses to design winning strategies at every stage." 
    },
    { 
      icon: <FaUsers />, 
      title: "Grassroots & Nukkad Coordination", 
      desc: "Mobilizing strong nukkad teams and grassroots networks to establish personal connections with voters in every locality." 
    },
    { 
      icon: <FaChartLine />, 
      title: "Real-time Reports & Feedback", 
      desc: "Delivering real-time data insights, surveys, and on-ground feedback to adapt quickly during the campaign." 
    },
  ];

  return (
    <section id="campaign-planning" className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        
    
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="uppercase tracking-wide text-sm font-semibold text-[#5364FF]" 
            data-aos="fade-up"
          >
            Our Expertise
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900"
          >
            Campaign Planning
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-lg text-gray-700"
          >
            We craft winning election strategies powered by research, insights, and disciplined execution. 
            With <span className="text-[#5364FF] font-semibold">5+ years</span> of experience across 6 states, 
            NK PR has led campaigns that built trust and delivered results even in the toughest constituencies.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-3 text-sm text-gray-600"
          >
            50+ Member Nukkad Team | PM Research Team Expertise | Trusted by Leaders in Bihar, Jharkhand & UP
          </p>
        </div>

        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={400 + i * 100}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-[#5364FF]/50 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#5364FF]/10 text-2xl text-[#5364FF] mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Compaign
