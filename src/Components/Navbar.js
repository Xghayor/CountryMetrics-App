import React from 'react';
import { FaSearch, FaMicrophone, FaCog } from 'react-icons/fa';
import { IoIosArrowBack }  from 'react-icons/io';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
       <div className="navbar-left">
      <button className="nav-btn">
      <IoIosArrowBack /> 
      </button>
    </div>
      <div className="navbar-center">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <FaSearch className="icon" />
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

