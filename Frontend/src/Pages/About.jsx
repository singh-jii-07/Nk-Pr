import React from "react";
import AboutBanner from "../Components/About/Hero";
import AboutSection from "../Components/About/About";
import WhyChooseUs from "../Components/About/WhyChooseUs";
import Founder from "../Components/About/Founder";
import Teaminfo from "../Components/About/Teaminfo";
import Experience from '../Components/About/Experience'
const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutSection />
      <WhyChooseUs />
      <Founder />
      <Teaminfo />
      <Experience/>
    </div>
  );
};

export default About;
