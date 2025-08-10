import React from 'react';
import Hero from '../Components/Home/Hero';
import About from '../Components/Home/About';
import Services from '../Components/Home/Services';
import FeaturedCampaigns from '../Components/Home/FeaturedCampaigns';
import CallToAction from '../Components/Home/CallToAction';
const Home = () => {
return(
  
<div>
  <Hero/> 
  <About/>
  <Services/>
  <FeaturedCampaigns/>
  <CallToAction/>
</div>
  
)
};

export default Home;
