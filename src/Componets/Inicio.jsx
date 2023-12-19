import React from 'react'
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div>
      <h1>🧿 ¡Hola, comunidad de desarrolladores y amantes del código!👋</h1>
      <h3>
        💫¡Saludos desde cualquier rincon de mundo! 🌏 👋
        ¡Bienvenidos a mi rincón digital!</h3>

      <p>Soy Tatiana Hernández Avendaño , una apasionada desarrolladora web con un enfoque creativo y una fascinación por construir experiencias únicas en la web. </p>

      

      <section className='lasts-works'>
        <h2>
          Proyectos Destacados:
        </h2>
        <h3>
          Este espacio es el reflejo de mi viaje en el mundo del desarrollo, donde la innovación y la estética se encuentran.
          <br />
         
        </h3>

        <div className='works'>

        </div>


      </section>
      <p>
        ¡Gracias por visitar y explorar mi portafolio! Siéntete libre de navegar, inspirarte y descubrir lo que podemos lograr juntos.
        <br />
        ¡Aquí tienes un asiento virtual reservado para el futuro digital que estamos construyendo!
        Con entusiasmo y líneas de código. <Link to="/contacto"> Contacta Conmigo. </Link>
        <br />
        [Tu Nombre]
        <br />
      </p>
      <p> Desarrolladora Front-end 🚀 | JavaScript| React | HTML | CSS | | GitHub | Proyectos Colaborativos y Git | Frameworks Vanilla JS | Figma | Firebase Integradora | Bases de Datos y Autenticación | ¡Velocidad y Creatividad en Código! | Siempre Buscando Aprender y Crecer 🌱 | Desde Colombia con Sabor Gastronómico 🍽️ | Rompiendo Barreras sin Temor 💪🇨🇴
      </p>

    </div>
  )
}
