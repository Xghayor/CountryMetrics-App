import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Countries.css';
import sharedImage from './assets/France.png'

const Countries = () => {
  const countriesList = [
    'United States',
    'France',
    'Canada',
    'Germany',
    'China',
    'Qatar',
  ];

  return (
    <div className="container">
      <h4 className='grid-title'>STATS BY COUNTRY</h4>
      <ul className="grid">
        {countriesList.map((countryName, index) => (
          <li className={`grid-item ${index % 2 === 0 ? 'light-blue' : 'dark-blue'}`} key={index}>
          <img src={sharedImage} alt="Shared Flag" />
            {countryName}
            <Link to={`/country/${countryName}`}>
              <button type='button'>></button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
