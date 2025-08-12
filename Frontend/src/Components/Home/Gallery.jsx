import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
   useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  const galleryItems = [
    { img: "https://imgs.search.brave.com/P3PGWPBTvw2r3voprcr41Hrc5wvCe543J7w0UV9l78k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmVz/cy5mYXJtL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzAzL3Bv/bGl0aWNhbC1wci0x/LnBuZw", title: "Event Management" },
    { img: "https://imgs.search.brave.com/P3PGWPBTvw2r3voprcr41Hrc5wvCe543J7w0UV9l78k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmVz/cy5mYXJtL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzAzL3Bv/bGl0aWNhbC1wci0x/LnBuZw", title: "Press Coverage" },
    { img: "https://imgs.search.brave.com/P3PGWPBTvw2r3voprcr41Hrc5wvCe543J7w0UV9l78k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmVz/cy5mYXJtL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzAzL3Bv/bGl0aWNhbC1wci0x/LnBuZw", title: "Social Media Campaign" },
    { img: "https://imgs.search.brave.com/P3PGWPBTvw2r3voprcr41Hrc5wvCe543J7w0UV9l78k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmVz/cy5mYXJtL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzAzL3Bv/bGl0aWNhbC1wci0x/LnBuZw", title: "Brand Promotion" },
    { img: "https://imgs.search.brave.com/P3PGWPBTvw2r3voprcr41Hrc5wvCe543J7w0UV9l78k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmVz/cy5mYXJtL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzAzL3Bv/bGl0aWNhbC1wci0x/LnBuZw", title: "Public Relations" },
    { img: "https://imgs.search.brave.com/P3PGWPBTvw2r3voprcr41Hrc5wvCe543J7w0UV9l78k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmVz/cy5mYXJtL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzAzL3Bv/bGl0aWNhbC1wci0x/LnBuZw", title: "Product Launch" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Work in <span className="text-yellow-500">Action</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A glimpse of the impactful moments we've created for our clients.
          </p>
        </div>

     
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6" data-aos="flip-left">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 break-inside-avoid"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
