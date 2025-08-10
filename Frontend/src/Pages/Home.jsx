import React from 'react'

const Home = () => {
  return (
  <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        
    
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            One Name for All Your Advertisement & PR Needs
          </h1>
          <p className="text-gray-700 mb-6 max-w-lg">
            We are the fastest-growing PR agency in Bihar & Jharkhand with 5+ years of expertise 
            in political campaigns, media handling, and social media strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="/services" className="bg-red-700 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition">
              Our Services
            </a>
            <a href="/contact" className="border border-red-700 text-red-700 px-6 py-3 rounded-lg hover:bg-red-700 hover:text-white transition">
              Contact Us
            </a>
          </div>
        </div>

        
        <div className="flex-1 flex justify-center">
          <img
            src="https://imgs.search.brave.com/yQ1m1mOw_EwALErsHbZwu0Nrt1aWwsqAVW2XBpLHVMY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzA5LzEwLzg0/LzM2MF9GXzEyMDkx/MDg0NTJfZkdkbXFt/bXY3SVRvMDNhcEFy/UFVBMzZ4aFduTm1D/T1MuanBn"
            alt="NK PR Campaign"
            className="w-full max-w-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

      </div>
    </section>
  )
}

export default Home
