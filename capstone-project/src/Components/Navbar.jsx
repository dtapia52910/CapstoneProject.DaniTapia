
import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css"; 

function Navbar({ isLoggedIn }) {
  return (
    <nav>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Products</Link>
        </li>
        {!isLoggedIn && (
          <li className="navbar-item">
            <Link to="/login">Login</Link>
          </li>
        )}
        <li className="navbar-item">
          <Link to="/cart">My Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
