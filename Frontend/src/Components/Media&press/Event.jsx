import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EventHighlights = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const events = [
    { id: 1, image: "https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw" },
    { id: 2, image:"https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw" },
    { id: 3, image: "https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw" },
    { id: 4, image: "https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw" },
    { id: 5, image: "https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw" },
    { id: 6, image: "https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw" },
    { id: 7, image: "https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw" },
    { id: 8, image: "https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw" },
    { id: 9, image: "https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw" },
  ];

  return (
    <section className="py-20 bg-white" id="event-highlights">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 uppercase">
            Event Highlights
          </h2>
          <div className="w-24 h-1 bg-[#5364FF] mx-auto my-4 rounded-full"></div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-500 break-inside-avoid"
              data-aos="zoom-in"
            >
              <img
                src={event.image}
                alt="Event"
                className="w-full object-cover rounded-xl hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
