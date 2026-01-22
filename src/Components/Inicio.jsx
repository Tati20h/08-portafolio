import React from 'react'
import { Link } from "react-router-dom";
import perfil from '../assets/img/perfil.png';
import Graf from './Mui/Graf';
import Barras from './Mui/Barras';
import animation from '../assets/img/men_animation.gif';
import { Gallery } from './layout/Gallery';


export const Inicio = () => {
  return (
    <div className='page'>
      <section className='home'>
        <div>
          <img className='perfil' src={perfil} alt="animation" />
        </div>


        <div className='abouts'>
          <h1 className='heading'>About.</h1>

          <p className='intro'>
            I am a <strong>Front-End Developer</strong> with experience building web applications using <strong>React, JavaScript, and TypeScript</strong>.
            I focus on creating functional, accessible, and user-centered interfaces.
          </p>

          <p>
            I have worked on <strong>real-world projects for companies</strong>, collaborating in agile environments (SCRUM) and using Git for version control.
            My background in <strong>manual testing and API testing</strong> allows me to develop with a strong quality mindset, identifying issues early and improving product reliability.
          </p>

          <p>
            I am motivated to build <strong>clean, maintainable, and well-tested</strong> web solutions and to continue growing as a Front-End Developer in collaborative tech teams.
          </p>

        </div>
      </section>

      <section className='lasts-works'>
        <div className='grafi'>
          <h2 className='subheading'>
            Technical Skills
          </h2>
          <p className='skills-description'>
            Technologies and tools I use to build scalable, maintainable, and user-focused web applications.
          </p>
          <Barras className='Barras' />
        </div>
        <div className='container'>
          <h3 className='subhead'>Coder.</h3>
          <h2 className='subh'>
            I believe that clean code and simple design create better user experiences.
          </h2>
          <p>
            I focus on writing readable, reusable components and building interfaces that balance aesthetics, performance, and usability.
          </p>

        </div>
      </section>

      <section className='hobbies'>
        <Gallery />
      </section>
      <section className='lasts-works'>
        <div className='container'>
          <h3 className='subheading' >
            Welcome to my digital corner!
          </h3>
          <p>
            My background in gastronomy strengthened skills such as creativity, attention to detail, and adaptability — qualities I now apply to problem-solving and UI development.
            This experience shapes the way I approach frontend work with discipline and precision.
          </p>

        </div>

        <div className='graf'>
          <h2 className='subheading'> Soft Skills</h2>
          <p className='skills-description'>
            Skills that define how I collaborate, communicate, and adapt within development teams.
          </p>
          <Graf className='Circle' />
        </div>

      </section>

      <section className='homes'>
        <div className='containers'>
          <h4 className='subheading'>
            <Link to="/portfolio">View my featured projects</Link>

          </h4>

        </div>

        <img className='animation' src={animation} alt="animation" />

        <div className='containers'>

          <h2 className='subheading'><Link to="/contact">
            Contact me
          </Link>
          </h2>
        </div>
      </section>
    </div>
  )
}
