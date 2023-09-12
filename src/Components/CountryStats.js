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
        {' '}
        {searchTerm}
      </h5>
      {countries.map((country) => (
        <div key={country.name} className="country-card">
          <p className="light-color">
            GDP:
            {country.gdp}
          </p>
          <p className="dark-color">
            Sex Ratio:
            {country.sex_ratio}
          </p>
          <p className="light-color">
            Surface Area:
            {country.surface_area}
          </p>
          <p className="dark-color">
            Life Expectancy (Male):
            {country.life_expectancy_male}
          </p>
          <p className="light-color">
            Unemployment Rate:
            {country.unemployment}
          </p>
          <p className="dark-color">
            Imports:
            {country.imports}
          </p>
          <p className="light-color">
            Homicide Rate:
            {country.homicide_rate}
          </p>
          <p className="dark-color">
            Tourists:
            {country.tourists}
          </p>
          <p className="light-color">
            Exports:
            {country.exports}
          </p>
          <p className="dark-color">
            Capital:
            {country.capital}
          </p>
          <p className="light-color">
            Currency Code:
            {country.currency.code}
          </p>
          <p className="dark-color">
            Currency Name:
            {country.currency.name}
          </p>
          <p className="light-color">
            Employment in Industry:
            {country.employment_industry}
          </p>
          <p className="dark-color">
            Population:
            {country.population}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountryStats;
