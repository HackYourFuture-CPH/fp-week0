import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="top-nav-content">
        <div className="top-nav">
          <span>Simply Spices</span>
          <ul>
            <li>Sign in</li>
            <li>Favorite</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div className="bottom-nav-content">
        <div className="bottom-nav">
          <ul className="navbar-ul">
            <li>Spices</li>
            <li>About us</li>
            <li>Contacts</li>
            <li>Search Spices</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
