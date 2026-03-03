import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import "../../styles/Headernav.css";

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
      <nav role="navigation" className={`nav ${isMenuOpen ? 'open' : ''}`}>        <ul>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={toggleMenu}
            >
              About me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={toggleMenu}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/curriculum"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={toggleMenu}
            >
              Curriculum
            </NavLink>
          </li>



          {/*<li><NavLink to="/blog" activeClassName="active" onClick={toggleMenu}>Gastro-Blog</NavLink></li> */}
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
