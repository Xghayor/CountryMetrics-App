import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Countries from './Components/Countries';
import CountryStats from './Components/CountryStats';

const App = () => (
  <Router>
    <Navbar />
    <HeroSection />
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/country/:searchTerm" element={<CountryStats />} />
      <Route path="*" element={<h1>Error 404 : Not Found</h1>} />
    </Routes>
  </Router>
);

export default App;
