import React from 'react'
import { Link } from "react-router-dom";
import perfil from '../assets/img/perfil.png';
import Graf from './Mui/Graf';
import Barras from './Mui/Barras';
import animation from '../assets/img/men_animation.gif';


export const Inicio = () => {
  return (
    <div className='page'>
      <section className='home'>
        <div>
          <img className='perfil' src={perfil} alt="animation" />
        </div>

        <div className='abouts'>
          <h1 className='heading'>About me.</h1>

          <p >
            I am <strong>Lucy Hernández Avendaño,</strong> a passionate  <strong>professional in gastronomy </strong> who decided to venture into the world of
            <strong> Front-end Programming </strong>merging the creative approach and fascination for building unique experiences in <strong> Web Design and Development.".</strong>
          </p>
        </div>

      </section>

      <section className='lasts-works'>
        <div className='container'>
          <h3 className='subheading' >
            Welcome to my digital corner!
          </h3>
          <p>My trajectory in gastronomy has provided me with unique skills such as creativity, attention to detail, and adaptability, which I now apply in the field of web development.
            I am committed to continuous learning and constant improvement to stay abreast of the latest technical trends and technologies in this exciting field.
          </p>
        </div>

        <div className='graf'>
          <h2 className='sub'> Soft Skills</h2>
          <Graf className='barras' />
        </div>

      </section>

      <section className='lasts-works'>
        <div className='grafi'>
          <h2 className='sub'>
            Technicals Skills
          </h2>
          <Barras />
        </div>
        <div className='container'>
          <h3 className='subhead '>
            Coder.</h3>
          <h2 className='subh'>
            In front-end development, simplicity breeds elegance with clean code. Less is more when it comes to design and usability.</h2>
          <p>
            This space reflects my journey in the world of development, where innovation and aesthetics converge.
          </p>
        </div>
      </section>

      <section className='homes'>
        <div className='containers'>
          <h4 className='subheading'>
            <Link to="/portfolio">See my featured projects</Link>
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
