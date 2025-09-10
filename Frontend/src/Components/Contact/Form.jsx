import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const servicesList = [
    "Political Consulting",
    "Ground Research",
    "Media Handling",
    "Social Media Management",
    "Branding",
    "Voter Mindset Analysis",
    "Campaign Strategy & Execution",
    "Other",
  ];

  const locationList = ["Delhi", "Ranchi", "Guwahati", "Patna"];

  const handleServiceClick = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("services", selectedServices.join(", "));
    formData.append("location", selectedLocation);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Message sent successfully!");
        e.target.reset();
        setSelectedServices([]);
        setSelectedLocation("");
      } else {
        toast.error("❌ Failed to send. Please try again!");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      
        <form
          onSubmit={sendEmail}
          className="bg-white shadow-xl rounded-3xl p-10 space-y-8 border border-gray-100 transition hover:shadow-2xl"
        >
          <input
            type="hidden"
            name="access_key"
            value="20d21e15-656a-466e-9f9f-11c6a9361fef"
          />

          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Drop Us A Message
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Share your details & requirements, our team will connect with you
            within 2 business days.
          </p>

          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 border-2 rounded-xl focus:border-[#5364FF] outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 border-2 rounded-xl focus:border-[#FFAB3C] outline-none transition"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Number"
            className="w-full p-4 border-2 rounded-xl focus:border-[#5364FF] outline-none transition"
          />

          
          <label className="block font-semibold text-gray-700">
            Which services are you interested in?
          </label>
          <div className="flex flex-wrap gap-3">
            {servicesList.map((service, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => handleServiceClick(service)}
                className={`px-4 py-2 border-2 rounded-full shadow-sm transition text-sm font-medium ${
                  selectedServices.includes(service)
                    ? "bg-[#5364FF] text-white border-[#5364FF] scale-105"
                    : "bg-white text-gray-700 hover:bg-[#5364FF] hover:text-white"
                }`}
              >
                {service}
              </button>
            ))}
          </div>

        
          <label className="block font-semibold text-gray-700 mt-6">
            Closest Office
          </label>
          <div className="flex flex-wrap gap-3">
            {locationList.map((loc, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => handleLocationClick(loc)}
                className={`px-4 py-2 border-2 rounded-full shadow-sm transition text-sm font-medium ${
                  selectedLocation === loc
                    ? "bg-[#00F1FF] text-white border-[#00F1FF] scale-105"
                    : "bg-white text-gray-700 hover:bg-[#00F1FF] hover:text-white"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>

          
          <textarea
            name="message"
            placeholder="Write your message here..."
            required
            className="w-full p-4 border-2 rounded-xl h-32 focus:border-[#FFAB3C] outline-none transition"
          ></textarea>

          
          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full bg-gradient-to-r from-[#5364FF] to-[#00F1FF] text-white py-4 rounded-xl font-semibold text-lg shadow-lg transition transform hover:scale-105 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

        
        <div className="space-y-6">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Teamwork"
            className="rounded-2xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80"
            alt="Campaign"
            className="rounded-2xl shadow-lg hover:scale-105 transition"
          />

          <div className="bg-gradient-to-r from-[#5364FF] to-[#00F1FF] text-white shadow-lg rounded-2xl p-6">
            <h3 className="font-bold text-xl">Ranchi, Jharkhand</h3>
            <p className="mt-2">📞 +91 98765 43210</p>
            <p>📧 nkprindia@gmail.com</p>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={4000} />
    </section>
  );
};

export default ContactSection;
