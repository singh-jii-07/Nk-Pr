import React, { useState } from "react";

const FeaturedClients = () => {
  const clients = [
    {
      name: "Jharkhand Vidhan Sabha Election 2019",
      category: "Political Campaign",
      image: "https://imgs.search.brave.com/yG3ElRB9TztbDiaAnY-Ug5SVIUp3pb2FRTxJmrj65Uo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucm95b29yZGVy/cy5jb20vaW5zZWN1/cmUvZml0LzUwMC81/MDAvY2UvMC9wbGFp/bi9odHRwczovL3Zv/dGVzbWFydC5zMy5h/cC1zb3V0aC0xLmFt/YXpvbmF3cy5jb20v/Y2FuZGlkYXRlXzE3/Mzk1MC9wcm9jZXNz/ZWRfOTMzNjIyLmpw/Z0B3ZWJw",
      description:
        "Led the complete PR & advertising strategy for Jharkhand Vidhan Sabha Election 2019, covering social media, media coverage, and ground campaigning."
    },
    {
      name: "Bihar Assembly Election",
      category: "Political Campaign",
      image: "https://imgs.search.brave.com/wyCBW7daBnIFql0uJn5aHLYi-Ve5n-gXtClWB032k8U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zY29u/dGVudC1kZnc1LTMu/eHguZmJjZG4ubmV0/L3YvdDM5LjMwODA4/LTYvNDgxNTY2MzY4/XzEyMzY5MTExNTEx/MjY2NDNfMjgxNDY1/NjE3MzM0NjUxNDYw/N19uLmpwZz9zdHA9/ZHN0LWpwZ19zOTYw/eDk2MF90dDYmX25j/X2NhdD0xMDgmY2Ni/PTEtNyZfbmNfc2lk/PWNjNzFlNCZfbmNf/b2hjPUtHcmJwN0d0/cE1FUTdrTnZ3RTAy/NXRfJl9uY19vYz1B/ZG5COWd0V3Q0enNn/YmtOdGdIQ09iWks0/YWwzNWxYc0FQczdk/d2JTa3VSNlZ1eGsw/T2RzUkRXY09PZ3Rh/V3pVdzFFJl9uY196/dD0yMyZfbmNfaHQ9/c2NvbnRlbnQtZGZ3/NS0zLnh4Jl9uY19n/aWQ9MElyZktDalct/Z2ItNFo0eVdVR01s/USZvaD0wMF9BZlVJ/dGloal9XN1kweTkw/NFJjcFpOQVZCd0M4/eHdXN1IzY1pucGFM/VEFvd293Jm9lPTY4/OUE5RjI2",
      description:
        "Handled political PR, advertisement, and outreach for Bihar Assembly Election with impactful branding and mass communication strategies."
    },
    {
      name: "Governor of Sikkim",
      category: "Political PR",
      image: "https://imgs.search.brave.com/y57_Rt58bF2k4aKNkrkObaJoDaWsQxyYZPXim4ujDMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHY5aGluZGku/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzAyL0xha3No/bWFuLVByYXNhZC1B/Y2hhcnlhLVNpa2tp/bS1OZXctR292ZXJu/b3IuanBnP3c9MTI4/MA",
      description:
        "Managed official PR and media presence for the Governor of Sikkim, ensuring strong public and media relations."
    },
    {
      name: "Members of Parliament PR",
      category: "Political PR",
      image: "https://imgs.search.brave.com/CF8xkJhsHYYKYL7_UEXMAreP_sd3YrdGyirsPfMoiho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b3Rl/cnN2ZXJkaWN0LmNv/bS9pbWFnZXMvamhh/cmtoYW5kL3BvbGl0/aWNpYW5zL2JoYXJh/dGl5YS1qYW5hdGEt/cGFydHkvMTcwODUx/NDczOS5iaWR5dXQt/YmFyYW4tbWFoYXRv/LWJqcC53ZWJw",
      description:
        "Provided PR services for multiple MPs including Shri Vidhyut Baran Mahato, Shri VD Ram, Shri PN Singh, and Shri Sushil Singh."
    }
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-[#f5f9ff] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Featured <span className="text-[#5364FF]">Clients & Campaigns</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          
          {/* Main Card */}
          <div
            key={active}
            className="flex-1 rounded-2xl shadow-xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl"
            style={{
              background: "linear-gradient(145deg, #ffffff, #e6ecff)",
              border: "1px solid rgba(255,255,255,0.3)"
            }}
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={clients[active].image}
                alt={clients[active].name}
                className="w-full h-80 object-cover transition-transform duration-700 hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-[#5364FF] text-white text-sm px-3 py-1 rounded-full shadow-md">
                {clients[active].category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {clients[active].name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {clients[active].description}
              </p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-5 overflow-x-auto lg:overflow-visible">
            {clients.map((client, index) => (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`cursor-pointer rounded-full p-1 transition-all duration-500 hover:scale-110 ${
                  active === index
                    ? "bg-gradient-to-r from-[#00F1FF] to-[#5364FF] p-[3px]"
                    : "bg-transparent"
                }`}
              >
                <div
                  className={`rounded-full overflow-hidden border-4 ${
                    active === index
                      ? "border-transparent"
                      : "border-gray-200 hover:border-[#FFAB3C]"
                  }`}
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-20 h-20 object-cover rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClients;
