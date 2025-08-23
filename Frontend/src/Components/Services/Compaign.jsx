import React from 'react'

const Compaign = () => {
  return (
    <div>
      
      
<section
  id="campaign-planning"
  className="relative py-20 bg-gray-50"
>
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2
        data-aos="fade-up"
        className="text-3xl sm:text-4xl font-extrabold text-gray-900"
      >
        Campaign Planning
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="150"
        className="mt-4 text-lg text-gray-700"
      >
        We craft winning election strategies powered by research, insights, and disciplined execution. 
        With <span className="text-[#5364FF] font-semibold">5+ years</span> of experience across 6 states, 
        NK PR has led campaigns that built trust and delivered results even in the toughest constituencies.
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="250"
        className="mt-3 text-sm text-gray-600"
      >
        50+ Member Nukkad Team | PM Research Team Expertise | Trusted by Leaders in Bihar, Jharkhand & UP
      </p>
    </div>


    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { icon: '📊', title: "SWOT & Voter Segmentation" },
        { icon: '🗣️', title: "Message & Manifesto Positioning" },
        { icon: '🗓️', title: "Booth-level Planning & Calendar" },
        { icon: '👥', title: "Candidate & Opponent Profiling" },
        { icon: '🤝', title: "Grassroots & Nukkad Coordination" },
        { icon: '📈', title: "Real-time Reports & Feedback" },
      ].map((item, i) => (
        <div
          key={i}
          data-aos="fade-up"
          data-aos-delay={100 * i}
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
        >
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#5364FF]/10 text-2xl mb-4">
            {item.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  )
}

export default Compaign
