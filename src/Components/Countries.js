import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Countries.css';
import sharedImage from './assets/France.png';
import { FaArrowRight } from 'react-icons/fa';

const Countries = () => {
  const countriesList = [
    'Mexico',
    'France',
    'Canada',
    'Germany',
    'China',
    'Qatar',
  ];

  return (
    <div className="container">
      <h4 className="grid-title">STATS BY COUNTRY</h4>
      <ul className="grid">
        {countriesList.map((countryName, index) => (
          <li className={`grid-item ${index % 2 === 0 ? 'light-blue' : 'dark-blue'}`} key={index}>
            <div className="grid-item-box">
              <img src={sharedImage} alt="Shared Flag" className="country-image" />
              <Link to={`/country/${countryName}`} className="view-button">
                <FaArrowRight />
              </Link>
              <div className="country-name">{countryName}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
