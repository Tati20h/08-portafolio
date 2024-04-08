import React from 'react'
import animation from '../assets/img/learn.gif';
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";

export const Contacto = () => {
  return (
    <div className='page'>
      <section className='contac'>

        <h1 className='heading'>Contact.</h1>

        <p>I am always open to new opportunities for collaboration. Do you have an exciting project in mind?</p>
        <p><strong>Let's talk!.</strong></p>

        <ul className="social-icons">
          <li>
            <a className="icon-name" href="https://github.com/Tati20h">
              <FaGithub size={50} color="333" />
              <span className="icon-name1"> GitHub</span>
            </a>
          </li>
          <li className="icon-name">
            <FiPhoneCall className="icon-name" size={50} color="333" />
            <span className="icon-name1">+34 651 42 62 89</span>
          </li>
          <li>
            <a className="icon-name" href="https://www.linkedin.com/in/tatiana-hernandez29/">
              <SiLinkedin alt="Linkedin" size={50} color="#039BE5" />
              <span className="icon-name"> Linkedin</span>

            </a>
          </li>

        </ul>

      </section>

      <section className='cont'>
        <div>
          <img className='animation' src={animation} alt="animation" />
        </div>
        <form className='contact' action="mailto:ltatianahernandez@sanmateo.edu.co">

          <input
            className='input'
            autoComplete='on'
            type="text"
            placeholder='Name' />
          <input
            className='input'
            type="text"
            placeholder='Last Name' />
          <input
            className='input'
            type="text"
            placeholder='Email ' />
          <textarea
            className='motive'
            type="text"
            placeholder='Message ' />
          <input
            type="submit"
            value='Send Email' />

        </form>

      </section>

    </div>

  )
}
