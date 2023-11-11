import React from "react";
import backgroundImage from "../../assets/HeroSection-bg-image.jpg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <img src={backgroundImage} alt="background" className="hero-image" />
      <div className="hero-content">
        <h1 className="hero-heading">Travel Blog</h1>
        <h2 className="hero-subheading">Come check out these places!</h2>
      </div>
    </div>
  );
}
export default Hero;