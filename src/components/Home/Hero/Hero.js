import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-cover">
        <h1>Professional Bicycle Repair </h1>
        <h5 className='hero-header-special'>&</h5>
        <h1> Custom Services</h1>
        <p>
          Welcome to Utrecht Bicycle Repair (UBR) 
        </p>
        <Link to='/book'><button className='hero-appointment-button'><FontAwesomeIcon icon={faBookOpen} /> Book An Appointment </button></Link>
      </div>
    </div>
  );
};

export default Hero;
