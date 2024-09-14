import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faUser, faSun } from '@fortawesome/free-solid-svg-icons';
import pic1 from './images/pic-1.jpg';

const Header = () => {
  return (
    <header className="header">
      <section className="flex">
        <Link to="/" className="logo">Educa.</Link>
        <form action="search.html" method="post" className="search-form">
          <input type="text" name="search_box" required placeholder="search courses..." maxLength="100" />
          <button type="submit" className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <div className="icons">
          <div id="menu-btn" className="icon">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div id="search-btn" className="icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div id="user-btn" className="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div id="toggle-btn" className="icon">
            <FontAwesomeIcon icon={faSun} />
          </div>
        </div>
        <div className="profile">
          <img src={pic1} className="image" alt="Profile" />
          <h3 className="name">Shaikh Anas</h3>
          <p className="role">Student</p>
          <Link to="/profile" className="btn">View Profile</Link>
          <div className="flex-btn">
            <Link to="/login" className="option-btn">Login</Link>
            <Link to="/register" className="option-btn">Register</Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
