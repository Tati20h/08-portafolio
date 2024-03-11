import React from 'react'
import animation from '../assets/img/learn.gif';
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

export const Contacto = () => {
  return (
    <div className='page'>
      <section className='contac'>

        <h1 className='heading'>Contacto.</h1>
        <p>Ponte en contacto conmigo a través de las redes sociales o correo electrónico.</p>
        <ul className="social-icons">
          <li>
            <a className="icon-name" href="https://github.com/Tati20h">
              <FaGithub size={50} color="333" />
              <span className="icon-name1"> GitHub</span>
            </a>
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
        <form className='contact' action="mailto=ltatianahernandez@sanmateo.edu.co">
          
          <input 
          className='input'
          autoComplete='on' 
          type="text"
           placeholder='Nombre' />
          <input 
          className='input'
          type="text" 
          placeholder='Apellido' />
          <input 
          className='input'
          type="text" 
          placeholder='Email ' />
          <textarea 
          className='motiv'
          type="text" 
          placeholder='Motivo de contacto ' />
          <input
           type="submit" 
           value='Enviar' />

        </form>

      </section>
    </div>

  )
}
