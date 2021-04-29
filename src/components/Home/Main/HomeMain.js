import React from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import MobileServicing from "../MobileService/MobileServicing";
import NavBar from "../NavBar/NavBar";
import Review from "../Review/Review";
import Services from "../Services/Services";
import WhyUs from "../WhyUS/WhyUs";
import './HomeMain.css'

const HomeMain = () => {
  return (
    <div>
      <div className="home-contents">
        <Hero></Hero>
        <About></About>
        <Services></Services>
        <WhyUs></WhyUs>
        <Review></Review>
        <MobileServicing></MobileServicing>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeMain;
