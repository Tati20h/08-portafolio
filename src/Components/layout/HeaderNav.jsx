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
            <NavLink to="/inicio" className={({ isActive }) => isActive ? "active" : ""}>Inicio </NavLink>
          </li>
          <li>
            <NavLink to="/portafolio" className={({ isActive }) => isActive ? "active" : ""}>Portafolio </NavLink>
          </li>
          <li>
            <NavLink to="/curriculum" className={({ isActive }) => isActive ? "active" : ""}>Curriculum </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
          </li>
        </ul>

      </nav>

    </header>
  )
}
