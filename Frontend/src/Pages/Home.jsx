import React from 'react';
import Hero from '../Components/Home/Hero';
import About from '../Components/Home/About';
import Services from '../Components/Home/Services';
import FeaturedCampaigns from '../Components/Home/FeaturedCampaigns';
import CallToAction from '../Components/Home/CallToAction';
import AchievementsExperience from '../Components/Home/Exprience'
import HowWeWor from '../Components/Home/Working'
// import Gallery from '../Components/Home/Gallery';
import { FocusCardsDemo } from '../Components/Home/FocusCards';
const Home = () => {
return(
  
<div>
  <Hero/> 
  <About/>
  <Services/>
  <FeaturedCampaigns/>
  <AchievementsExperience/>
  <HowWeWor/>
  {/* <Gallery/> */}
  <FocusCardsDemo/>
  <CallToAction/>
</div>
  
)
};

export default Home;
