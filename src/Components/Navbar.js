import React, { useState } from 'react';
import { FaSearch, FaMicrophone, FaCog } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setInputValue } from '../Redux/Search/inputSlice';
import './styles/Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    dispatch(setInputValue(searchValue));
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <button className="nav-btn" type="button">
            <IoIosArrowBack />
          </button>
        </Link>
      </div>
      <div className="navbar-center">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter country name"
            value={searchValue}
            name="names"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Link to={`/country/${searchValue}`}>
            <button type="button" onClick={handleSearch} className="search-button">
              <FaSearch className="icon" />
            </button>
          </Link>
        </div>
        <div className="icons">
          <FaMicrophone className="icon" />
        </div>
      </div>
      <div className="navbar-right">
        <div className="icons">
          <FaCog className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
