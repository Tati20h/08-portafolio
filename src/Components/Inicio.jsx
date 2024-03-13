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
          <h1 className='heading'>Acerca de mi.</h1>

          <p >
            Soy <strong>Tatiana Hernández Avendaño,</strong> una apasionada <strong>profesional en gastronomía </strong> que decidio incursionar en el mundo de la
            <strong> Programacion Front-end </strong>fusionando el enfoque creativo y fascinación por construir experiencias únicas en el <strong> Diseño y Desarrollo Web.</strong>
          </p>
        </div>

      </section>

      <section className='lasts-works'>
        <div className='container'>
          <h3 className='subheading' >
            ¡Bienvenidos a mi rincon digital!
          </h3>
          <p>Mi trayectoria en la gastronomía me ha proporcionado habilidades únicas, como la creatividad, la atención al detalle y la capacidad de adaptación, que ahora aplico en el ámbito del desarrollo web.
            Estoy comprometida con el aprendizaje continuo y la mejora constante para estar al tanto de las últimas tendencias tecnicas y tecnologías en este emocionante campo.
          </p>
        </div>

        <div className='graf'>
          <h2 className='sub'> Soft Skills</h2>
          <Graf />
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
            Este espacio es el reflejo de mi viaje en el mundo del desarrollo, donde la innovación y la estética se encuentran.
          </p>
        </div>
      </section>

      <section className='homes'>
        <div className='containeres'>
          <h4 className='subheading'>
            <Link to="/portafolio">Proyectos Destacados:</Link>
          </h4>
          <h3 className='subh'>
            ¡Aquí tienes un asiento virtual reservado para el futuro digital que estamos construyendo!
          </h3>
        </div>

        <img className='animation' src={animation} alt="animation" />

        <div className='containeres'>
          <h3 className='subh'>
            ¡Gracias por visitar y explorar mi portafolio! Siéntete libre de navegar, inspirarte y descubrir lo que podemos lograr juntos.
          </h3>
          <h2 className='subheading'><Link to="/contacto">
            Contacta Conmigo.
          </Link>
          </h2>
        </div>
      </section>
    </div>
  )
}
