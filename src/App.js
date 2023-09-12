import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Countries from './Components/Countries';
import CountryStats from './Components/CountryStats';

const App = () => {
 
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:searchTerm" element={<CountryStats />} />
      </Routes>
    </Router>
  );
};

export default App;
