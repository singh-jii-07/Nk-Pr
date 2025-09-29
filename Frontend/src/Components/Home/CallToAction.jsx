import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import hero from '../../assets/Calltoaction.png'

export default function JoinUsBanner() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden py-28 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />

      {/* Floating gradient circles for depth */}
      <div className="absolute top-10 left-1/4 w-36 h-36 bg-[#00f1ff]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-1/3 w-48 h-48 bg-[#00c1e0]/20 rounded-full blur-3xl animate-pulse delay-300"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#ff00f1]/10 rounded-full blur-2xl animate-pulse delay-500"></div>

      {/* Central radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-[#00f1ff]/5 rounded-full blur-[300px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00f1ff] to-[#00c1e0] drop-shadow-[0_0_15px_rgba(0,241,255,0.6)] mb-6 animate-fadeInUp">
          Join NKPR Today
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed animate-fadeInUp delay-150">
          We are the fastest-growing PR agency in Bihar & Jharkhand with 10+ years
          of expertise in political campaigns, media handling, and social media strategy.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="flex items-center gap-4 bg-gradient-to-r from-[#00f1ff] to-[#00c1e0] hover:scale-105 transform transition-all duration-300 text-black font-semibold px-14 py-4 rounded-full shadow-2xl shadow-[#00f1ff]/40 hover:shadow-[#00c1e0]/50"
        >
          Join Us <FaArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Optional subtle bottom wave */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
}
