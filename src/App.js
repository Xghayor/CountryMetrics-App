import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Countries from './Components/Countries';
import CountryStats from './Components/CountryStats';

const NotFound = () => {
  return (
    <div>
      <h1>404-Not Found</h1>
      <p>The page you are looking for does not exist</p>
    </div>
  )
}



const App = () => {
 
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:searchTerm" element={<CountryStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
