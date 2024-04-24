import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Headernav.css'; 

export const HeaderNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <div>
        <NavLink to="/about">
        <img className='logo' src={logo} href="" alt='logo' />
        </NavLink>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><NavLink to="/about" activeClassName="active" onClick={toggleMenu}>About me</NavLink></li>
          <li><NavLink to="/portfolio" activeClassName="active" onClick={toggleMenu}>Portfolio</NavLink></li>
          <li><NavLink to="/curriculum" activeClassName="active" onClick={toggleMenu}>Curriculum</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active" onClick={toggleMenu}>Contact</NavLink></li>
        </ul>
      </nav>
      <div className={`toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};
