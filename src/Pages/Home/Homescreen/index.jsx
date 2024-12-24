import React from "react";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";
import Navbar from "../Navbar";
import ConsultationCard from "../QuickLink";

export default function Home() {
  return (
    <>

      <HeroSection />
      <br /> <br />
      <AboutMe />

      <ConsultationCard /><br/><br/><br/>
      
      <Footer />
    </>
  );
}
