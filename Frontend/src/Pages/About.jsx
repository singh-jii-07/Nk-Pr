import React from "react";
import AboutBanner from "../Components/About/Hero";
import AboutSection from "../Components/About/About";
import WhyChooseUs from "../Components/About/WhyChooseUs";
import Founder from "../Components/About/Founder";
import Teaminfo from "../Components/About/Teaminfo";
import Experience from '../Components/About/Experience'
import CallToAction from '../Components/Home/CallToAction';
const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutSection />
      <WhyChooseUs />
      <Founder />
      <Teaminfo />
      <Experience/>
       <CallToAction/>
    </div>
  );
};

export default About;
