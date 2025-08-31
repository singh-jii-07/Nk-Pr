import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function JoinUsBanner() {
    const navigate = useNavigate();

  return (
    <div className="w-full bg-black bg-opacity-95 relative overflow-hidden my-10">
      
      <div
        className="w-full flex justify-center items-center py-16 relative z-10"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/hexellence.png')",
          backgroundSize: "auto",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center max-w-xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#00f1ff] drop-shadow-lg">
            Join NKPR Today
          </h1>
          <p className="text-gray-300 mb-8 text-lg md:text-xl drop-shadow-sm">
            Become part of a community that crafts compelling stories, builds
            lasting relationships, and drives impactful brand engagement.
          </p>
         
<button
      className="bg-[#00f1ff] hover:bg-[#00c1e0] text-black font-bold px-8 py-3 rounded-full flex items-center mx-auto gap-3 shadow-lg transition-all duration-300"
      onClick={() => navigate("/contact")}
    >
      Join Us
      <FaArrowRight className="w-5 h-5" />
    </button>

         
        </div>
      </div>

      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black/90 pointer-events-none"></div>
    </div>
  );
}
