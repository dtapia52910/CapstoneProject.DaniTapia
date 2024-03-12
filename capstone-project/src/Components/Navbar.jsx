import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Styles/Navbar.css';

function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav className={`navbar ${isLoggedIn ? 'logged-in' : ''}`}>
      <div className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Products</Link>
          </li>
          {!isLoggedIn && (
            <li className="navbar-item">
              <Link to="/login">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <>
              <li className="navbar-item">
                <Link to="/cart">My Cart</Link>
              </li>
              <li className="navbar-item">
                <button onClick={onLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired
};

export default Navbar;
