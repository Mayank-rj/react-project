import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink exact="true" className={(navData) => (navData.isActive ? "current" : 'none')} to="/">Home</NavLink>
        <NavLink exact="true" className={(navData) => (navData.isActive ? "current" : 'none')} to="/details">Details</NavLink>
      </nav>
    </>
  )
}
