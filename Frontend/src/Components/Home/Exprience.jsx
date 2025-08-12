import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const stats = [
  { icon: "📈", value: 10, suffix: "+", label: "Years in Political PR", color: "#5364FF" },
  { icon: "🗺️", value: 6, label: "States Campaign Presence", color: "#00F1FF" },
  { icon: "🎯", value: 100, suffix: "+", label: "Campaigns Successfully Managed", color: "#FFAB3C" },
  { icon: "📅", value: 500, suffix: "+", label: "Events Organised on Ground", color: "#F56400" },
];


function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

export default function AchievementsExperience() {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Our Achievements <span className="text-[#5364FF]">& Experience</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          Proven strategies. Measurable impact. Unmatched results in political PR & campaign management.
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"data-aos="flip-down">
          {stats.map((s, i) => {
            const count = useCountUp(s.value);
            return (
              <div
                key={i}
                className="rounded-2xl p-6 flex flex-col items-center bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                style={{
                  borderTop: `4px solid ${s.color}`,
                }}
              >
                <div
                  className="w-16 h-16 flex items-center justify-center text-3xl rounded-full mb-4"
                  style={{
                    backgroundColor: `${s.color}15`,
                    color: s.color,
                  }}
                >
                  {s.icon}
                </div>
                <div
                  className="text-4xl font-extrabold tracking-tight"
                  style={{
                    color: s.color,
                  }}
                >
                  {count}
                  {s.suffix || ""}
                </div>
                <div className="text-sm text-gray-600 mt-2">{s.label}</div>
              </div>
            );
          })}
        </div>

    
        <div className="max-w-4xl mx-auto text-center space-y-10">
          
          <p className="text-lg text-gray-700 leading-relaxed">
            From grassroots campaigns to nationwide movements, our strategies have shaped victories across multiple states.
            We combine data-driven insights with ground-level expertise to deliver unmatched results for our clients.
          </p>

       
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
              {[
                { year: 2018, text: "Entered the political PR industry with 3 successful campaigns." },
                { year: 2020, text: "Expanded presence to 6 states, winning key elections." },
                { year: 2024, text: "Over 500+ on-ground events executed with measurable impact." },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{item.year}</h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          
          <blockquote className="p-6 rounded-xl italic text-sm bg-white shadow-md border border-gray-100">
            "Their innovative strategies and dedication turned our vision into a historic win."
            <br />
            <span className="text-gray-800 font-semibold">— Senior Campaign Manager</span>
          </blockquote>

        
          <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Our Next Milestone</h3>
            <p className="text-gray-600">
              Reaching <span className="font-semibold text-gray-800">Over india</span> with transformative political strategies by 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
