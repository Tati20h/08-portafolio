import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { RxGithubLogo } from "react-icons/rx";

export const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        Portfolio &copy;Tatiana Hernández Avendaño - 2024
      </div>
      <nav  >
        <ul  >
          <a className='icon' href="https://www.linkedin.com/in/tatiana-hernandez29/">
            < SiLinkedin size={34} color="black" />
          </a>
          <a className='icon' href="https://github.com/Tati20h">
            <RxGithubLogo size={34} color="black" />
          </a>
        </ul>

      </nav>

    </footer>
  )
}
