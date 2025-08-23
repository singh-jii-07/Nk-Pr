import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaRegComments, FaUserShield } from "react-icons/fa";

const SocialMediaManagement = () => {
  const features = [
    { icon: <FaFacebookF />, title: "Multi-platform Handling", desc: "Manage Facebook, Instagram, Twitter, YouTube, and WhatsApp with a unified digital-first strategy." },
    { icon: <FaInstagram />, title: "Creative Content", desc: "High-quality graphics, reels, and short videos designed to inspire and connect with your audience." },
    { icon: <FaTwitter />, title: "Targeted Messaging", desc: "Deliver sharp, audience-specific messages that amplify your influence and reach." },
    { icon: <FaUserShield />, title: "Reputation Management", desc: "Protect your image, counter misinformation, and maintain credibility across platforms." },
    { icon: <FaRegComments />, title: "Real-time Engagement", desc: "Monitor live conversations and engage instantly to strengthen voter trust." },
    { icon: <FaYoutube />, title: "Data-driven Insights", desc: "Leverage analytics to optimize strategies, track performance, and maximize impact." },
  ];

  return (
    <section id="social-media" className="relative py-24 bg-gradient-to-br from-[#eef3ff] via-white to-[#f7faff]">
      <div className="max-w-6xl mx-auto px-6">
        
        
       <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
  
  <span className="block uppercase tracking-wide text-sm font-semibold text-[#5364FF]">
    Digital Strategy
  </span>

  
  <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 relative inline-block">
    Social Media Management
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#5364FF] rounded-full"></span>
  </h2>

  
  <p className="mt-6 text-lg text-gray-700 leading-relaxed">
    More than posting — we create meaningful political stories that build strong digital reputations, 
    drive real-time engagement, and deliver measurable results across all major platforms.
  </p>
</div>


        
        <div className="space-y-10">
          {features.map((item, i) => (
            <div
              key={i}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={200 + i * 100}
              className={`flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition transform
              ${i % 2 !== 0 ? "sm:flex-row-reverse text-right" : "text-left"}`}
            >
              
              <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#5364FF] to-[#3f4ed1] text-white text-2xl shadow-lg">
                {item.icon}
              </div>

              
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaManagement;
