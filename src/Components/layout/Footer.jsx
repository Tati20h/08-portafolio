import React from 'react'
import '../../styles/Footer.css';
import { SiLinkedin } from "react-icons/si";
import { RxGithubLogo } from "react-icons/rx";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        Portfolio &copy;Tatiana Hernández Avendaño - 2024
      </div>
      <nav>
        <ul className="footer-icons">
          <li>
            <a
              className="icon"
              href="https://www.linkedin.com/in/tatiana-hernandez29/"
              target="_blank" ß
              rel="noopener noreferrer"
            >
              <SiLinkedin size={28} />
            </a>
          </li>
         

          <li>
            <a
              className="icon"
              href="https://github.com/Tati20h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxGithubLogo size={28} />
            </a>
          </li>
          <li>
            <a
              className="icon"
              href="https://wa.me/34651426289"  
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
            >
              <FaWhatsapp size={34} />
            </a>
          </li>
          <li className="icon phone">
            <FiPhoneCall size={24} />
            <span className="phone-text">+34 651 42 62 89</span>
          </li>
        </ul>
      </nav>

    </footer>
  )
}
