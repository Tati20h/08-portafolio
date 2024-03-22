import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo3.png';


export const HeaderNav = () => {
  return (
    <header className='header'>
      <div >
        <img className='logo' src={logo} alt='logo' />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/about me" className={({ isActive }) => isActive ? "active" : ""}>About me </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio </NavLink>
          </li>
          <li>
            <NavLink to="/curriculum" className={({ isActive }) => isActive ? "active" : ""}>Curriculum </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          </li>
        </ul>

      </nav>

    </header>
  )
}
