import React from 'react'
import { Link } from "react-router-dom";
import animation from '../Components/assets/img/men_animation.gif';

export const Inicio = () => {
  return (
    <div className='home'>
      <section className='inicio'>


        <div>
          <img className='animation' src={animation} alt="animation" />
        </div>

        <div>
          <h1>
            💫¡Bienvenidos a mi rincón digital!🌏 👋
            <br />
            Soy <strong>Tatiana Hernández Avendaño ,</strong> una apasionada <strong>Desarrolladora Web</strong> con un enfoque creativo y una fascinación por construir experiencias únicas en la <strong>web.</strong> </h1>
        </div>

      </section>
      <section className='lasts-works'>
        <h2 className='heading '>
          Proyectos Destacados:

          Este espacio es el reflejo de mi viaje en el mundo del desarrollo, donde la innovación y la estética se encuentran.
          <br />

        </h2>

        <div className='works'>

        </div>


      </section>
      <h2 >
        ¡Gracias por visitar y explorar mi portafolio! Siéntete libre de navegar, inspirarte y descubrir lo que podemos lograr juntos.<br /> <Link to="/contacto"> Contacta Conmigo. </Link>
        <br />
        ¡Aquí tienes un asiento virtual reservado para el futuro digital que estamos construyendo!
        Con entusiasmo y líneas de código.
        <br />

        <br />
      </h2>
      <p> Desarrolladora Front-end 🚀 | JavaScript| React | HTML | CSS | | GitHub | Proyectos Colaborativos y Git | Frameworks Vanilla JS | Figma | Firebase Integradora | Bases de Datos y Autenticación | ¡Velocidad y Creatividad en Código! | Siempre Buscando Aprender y Crecer 🌱 | Desde Colombia con Sabor Gastronómico 🍽️ | Rompiendo Barreras sin Temor 💪🇨🇴
      </p>

    </div>
  )
}
