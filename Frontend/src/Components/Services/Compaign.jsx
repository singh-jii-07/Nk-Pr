import React from 'react'
import { FaChartPie, FaBullhorn, FaCalendarAlt, FaUserTie, FaUsers, FaChartLine } from 'react-icons/fa'

const Compaign = () => {
  return (
    <section id="campaign-planning" className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Upper Part */}
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

        {/* Lower Part: Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <FaChartPie />, title: "SWOT & Voter Segmentation" },
            { icon: <FaBullhorn />, title: "Message & Manifesto Positioning" },
            { icon: <FaCalendarAlt />, title: "Booth-level Planning & Calendar" },
            { icon: <FaUserTie />, title: "Candidate & Opponent Profiling" },
            { icon: <FaUsers />, title: "Grassroots & Nukkad Coordination" },
            { icon: <FaChartLine />, title: "Real-time Reports & Feedback" },
          ].map((item, i) => (
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
                Tailored strategies ensuring precision and impact in every stage of the campaign.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Compaign
