import React from 'react'
import animation from '../assets/img/universal.gif';

export const Servicios = () => {
  return (
    <div className='page'>

      <h1 className='heading'>Servicios</h1>

      <section className='services'>
        <article className='service'>
          <h2>
            Desarrollo Web
          </h2>
          <p>¡Explora mi portafolio para conocer más sobre mi trabajo! Estoy siempre abierto/a a nuevas oportunidades de colaboración. ¿Tienes un proyecto emocionante en mente? ¡Hablemos!</p>
          <p>
            <p>Mi misión es crear soluciones que no solo funcionen, sino que también inspiren y deleiten. Desde proyectos colaborativos hasta desafíos individuales, cada línea de mi código cuenta una historia de aprendizaje y crecimiento..</p>Í
          </p>

        </article>
        <article className='service'>
          <h2>
            Diseño web
          </h2>

          <p>
            Acompáñame en este viaje donde la tecnología se encuentra con la creatividad, y donde cada proyecto es una oportunidad para superar límites y explorar nuevas posibilidades.</p>Í


        </article>
        <article className='service'>
          <h2>
            Posicionamiento Web
          </h2>
          <p>
            <p> En cada línea de código, busco tejer historias digitales cautivadoras..</p>Í
          </p>

        </article>
        <div>
          <img className='animation' src={animation} alt="animation" />
        </div>

      </section>
    </div>
  )
}
