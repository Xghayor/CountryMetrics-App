import React from 'react';
import './styles/HeroSection.css';
import globeImage from './assets/globe.jpg';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src={globeImage} alt="Globe" />
      </div>
      <div className="hero-content">
      <h1 className="hero-title">Worldwide Insights</h1>
      </div>
    </div>
  );
};

export default HeroSection;
