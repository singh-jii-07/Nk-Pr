import { useState } from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [status, setStatus] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

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

  const locationList = ["Delhi", "Ranchi", "Bangalore", "Patna"];


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

  const sendEmail = (e) => {
    e.preventDefault();

    
    const formData = new FormData(e.target);
    formData.append("services", selectedServices.join(", "));
    formData.append("location", selectedLocation);

    emailjs
      .send("service_0qas39a", "template_wxds4ma", Object.fromEntries(formData), "20S0s7npaKxX62oCi")
      .then(
        () => setStatus("Message sent successfully!"),
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message. Try again.");
        }
      );

    e.target.reset();
    setSelectedServices([]);
    setSelectedLocation("");
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
    
        <form
          onSubmit={sendEmail}
          className="bg-white shadow-xl rounded-3xl p-10 space-y-8 border border-gray-100"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Drop Us A Message</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Share your details & requirements, our team will connect with you within 2 business days.
          </p>

        
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-4 border-2 rounded-xl focus:border-[#5364FF] outline-none transition"/>
          <input type="text" name="organization" placeholder="Your Organization Name" className="w-full p-4 border-2 rounded-xl focus:border-[#00F1FF] outline-none transition"/>
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-4 border-2 rounded-xl focus:border-[#FFAB3C] outline-none transition"/>
          <input type="text" name="phone" placeholder="Your Number" className="w-full p-4 border-2 rounded-xl focus:border-[#5364FF] outline-none transition"/>
          <input type="url" name="website" placeholder="Website / Social Media Link" className="w-full p-4 border-2 rounded-xl focus:border-[#00F1FF] outline-none transition"/>

        
          <label className="block font-semibold text-gray-700">Which services are you interested in?</label>
          <div className="flex flex-wrap gap-3">
            {servicesList.map((service, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => handleServiceClick(service)}
                className={`px-4 py-2 border-2 rounded-full shadow-sm transition ${
                  selectedServices.includes(service)
                    ? "bg-[#5364FF] text-white border-[#5364FF]"
                    : "bg-white text-gray-700 hover:bg-[#5364FF] hover:text-white"
                }`}
              >
                {service}
              </button>
            ))}
          </div>

    
          <label className="block font-semibold text-gray-700 mt-6">Closest Office</label>
          <div className="flex flex-wrap gap-3">
            {locationList.map((loc, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => handleLocationClick(loc)}
                className={`px-4 py-2 border-2 rounded-full shadow-sm transition ${
                  selectedLocation === loc
                    ? "bg-[#00F1FF] text-white border-[#00F1FF]"
                    : "bg-white text-gray-700 hover:bg-[#00F1FF] hover:text-white"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>

        
          <textarea name="message" placeholder="Write your message here..." required className="w-full p-4 border-2 rounded-xl h-32 focus:border-[#FFAB3C] outline-none transition"></textarea>

    
          <button type="submit" className="mt-6 w-full bg-gradient-to-r from-[#5364FF] to-[#00F1FF] text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] transition">
            Submit
          </button>

          {status && <p className="text-center font-medium mt-4">{status}</p>}
        </form>


        <div className="space-y-6">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Teamwork" className="rounded-2xl shadow-lg hover:scale-105 transition"/>
          <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80" alt="Campaign" className="rounded-2xl shadow-lg hover:scale-105 transition"/>
          
          
          <div className="bg-gradient-to-r from-[#5364FF] to-[#00F1FF] text-white shadow-lg rounded-2xl p-6">
            <h3 className="font-bold text-xl">Ranchi, Jharkhand</h3>
            <p className="mt-2">+91 98765 43210</p>
            <p>nkprindia@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
