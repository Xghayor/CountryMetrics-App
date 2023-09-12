import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './styles/Countries.css';
import sharedImage from './assets/France.png';

const countriesList = [
  { id: 1, name: 'United States' },
  { id: 2, name: 'France' },
  { id: 3, name: 'Canada' },
  { id: 4, name: 'Germany' },
  { id: 5, name: 'China' },
  { id: 6, name: 'Qatar' },
];

const Countries = () => (
  <div className="container">
    <h4 className="grid-title">STATS BY COUNTRY</h4>
    <ul className="grid">
      {countriesList.map((country) => (
        <li
          className={`grid-item ${country.id % 2 === 0 ? 'light-blue' : 'dark-blue'}`}
          key={country.id}
        >
          <div className="grid-item-box">
            <img src={sharedImage} alt="Shared Flag" className="country-image" />
            <Link to={`/country/${country.name}`} className="view-button">
              <FaArrowRight />
            </Link>
            <div className="country-name">{country.name}</div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Countries;
