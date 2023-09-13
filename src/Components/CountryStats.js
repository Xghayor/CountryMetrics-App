import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { countryData } from '../Redux/Countries/countriesSlice';
import './styles/CountryStats.css';

const CountryStats = () => {
  const { searchTerm } = useParams();
  const { countries, loading, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryData(searchTerm));
  }, [dispatch, searchTerm]);

  if (loading) {
    return <div className="loader" />;
  }

  if (error) {
    return (
      <div>
        Error: Not Found
        {error.message}
      </div>
    );
  }

  if (!countries) {
    return null;
  }

  return (
    <div className="country-statistics">
      <h5 className="stats-heading">
        Country Statistics for
        {' '}
        {searchTerm}
      </h5>
      {countries.map((country) => (
        <div key={country.name} className="country-card">
          <div className="info-row dark-color">
            <p className="label">GDP:</p>
            <p className="value">{country.gdp}</p>
          </div>
          <div className="info-row  light-color">
            <p className="label">Sex Ratio:</p>
            <p className="value">{country.sex_ratio}</p>
          </div>
          <div className="info-row dark-color">
            <p className="label">Surface Area:</p>
            <p className="value">{country.surface_area}</p>
          </div>
          <div className="info-row  light-color">
            <p className="label">Life Expectancy (Male):</p>
            <p className="value">{country.life_expectancy_male}</p>
          </div>
          <div className="info-row dark-color">
            <p className="label">Unemployment Rate:</p>
            <p className="value">{country.unemployment}</p>
          </div>
          <div className="info-row  light-color">
            <p className="label">Imports:</p>
            <p className="value">{country.imports}</p>
          </div>
          <div className="info-row dark-color">
            <p className="label">Homicide Rate:</p>
            <p className="value">{country.homicide_rate}</p>
          </div>
          <div className="info-row  light-color">
            <p className="label">Tourists:</p>
            <p className="value">{country.tourists}</p>
          </div>
          <div className="info-row dark-color">
            <p className="label">Exports:</p>
            <p className="value">{country.exports}</p>
          </div>
          <div className="info-row light-color">
            <p className="label">Capital:</p>
            <p className="value">{country.capital}</p>
          </div>
          <div className="info-row dark-color">
            <p className="label">Currency Code:</p>
            <p className="value">{country.currency.code}</p>
          </div>
          <div className="info-row light-color">
            <p className="label">Currency Name:</p>
            <p className="value">{country.currency.name}</p>
          </div>
          <div className="info-row dark-color">
            <p className="label">Employment in Industry:</p>
            <p className="value">{country.employment_industry}</p>
          </div>
          <div className="info-row light-color">
            <p className="label">Population:</p>
            <p className="value">{country.population}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryStats;
