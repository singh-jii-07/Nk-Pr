import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PressMentions = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const pressData = [
    {
      id: 1,
      title: "Bihar Assembly Campaign Coverage",
      image:
        "https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw",
      link: "#",
    },
    {
      id: 2,
      title: "Jharkhand Vidhansabha Election Media Highlight",
      image:
        "https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw",
      link: "#",
    },
    {
      id: 3,
      title: "Political Consulting Feature Story",
      image:
        "https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw",
      link: "#",
    },
    {
      id: 4,
      title: "National Media Interview with Founder",
      image:
        "https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw",
      link: "#",
    },
    {
      id: 5,
      title: "Digital Strategy Highlighted in National News",
      image:
        "https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw",
      link: "#",
    },
    {
      id: 6,
      title: "Ground Campaign Featured by Local Media",
      image:
        "https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw",
      link: "#",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-100 via-white to-gray-100"
      id="press-mentions"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2
          className="text-4xl md:text-5xl font-extrabold tracking-wide text-gray-900 uppercase"
          data-aos="fade-up"
        >
          Featured Press Mentions
        </h2>
        <div className="w-24 h-1 bg-[#5364FF] mx-auto my-6 rounded-full"></div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {pressData.map((press) => (
            <a
              key={press.id}
              href={press.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition transform hover:-translate-y-3"
              data-aos="fade-up"
            >
    
              <img
                src={press.image}
                alt={press.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

             
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-300 flex items-center justify-center px-4">
                <p className="text-white text-lg md:text-xl font-semibold text-center leading-snug opacity-100 group-hover:opacity-100">
                  {press.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressMentions;
