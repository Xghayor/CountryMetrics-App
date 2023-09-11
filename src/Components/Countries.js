import React from 'react';
import './styles/Countries.css'; 

const Countries = () => {
  return (
    <div className="container">
      <h4 className='grid-title'>STATS BY COUNTRY</h4>
      <ul className="grid">
        {Array.from({ length: 6 }, (_, index) => (
          <li key={index} className={`grid-item ${index % 2 === 0 ? 'light-blue' : 'dark-blue'}`}>
            Item {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
