import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { countryData } from '../Redux/Countries/countriesSlice';

const CountryStats = () => {
  const { searchTerm } = useParams();
  const { countries, loading, error } = useSelector((state) => state.countries); 
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(countryData(searchTerm));
  }, [dispatch, searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!countries) {
    return null;
  }

  return (
    <div>
      <h5>Country Statistics for {searchTerm}</h5>
      {countries.map((country, index) => (
        <div key={index}>
          <p>GDP: {country.gdp}</p>
          <p>Sex Ratio: {country.sex_ratio}</p>
          <p>Surface Area: {country.surface_area}</p>
          <p>Life Expectancy (Male): {country.life_expectancy_male}</p>
          <p>Unemployment Rate: {country.unemployment}</p>
          <p>Imports: {country.imports}</p>
          <p>Homicide Rate: {country.homicide_rate}</p>
          <p>Tourists: {country.tourists}</p>
          <p>Exports: {country.exports}</p>
          <p>Capital: {country.capital}</p>
          <p>Currency Code: {country.currency.code}</p>
          <p>Currency Name: {country.currency.name}</p>
          <p>Employment in Industry: {country.employment_industry}</p>
          <p>Population: {country.population}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryStats;
