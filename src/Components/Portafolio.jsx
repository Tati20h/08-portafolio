import React from 'react'
import { trabajos } from '../data/trabajos'
//import { Link } from 'react-router-dom';//

export const Portafolio = () => {
  return (
    <div className='page'>
      <section className='home'>
        <div className='containere'>
          <h1 className='heading'>Portafolio.</h1>
          <p>Mi enfoque se basa en comprender las necesidades del usuario y traducirlas en soluciones creativas y efectivas. He tenido el privilegio de trabajar en una variedad de proyectos, desde sitios web informativos hasta aplicaciones interactivas. Cada experiencia me ha permitido crecer como profesional y perfeccionar mis habilidades en el desarrollo front-end.</p>
        </div>
        <div className='sub'>
        <h4>¡Explora mi portafolio para conocer más sobre mi trabajo!.</h4>
        </div>
        
      </section>

      <section className='works'>
        {
          trabajos.map(trabajo => {
            return (

              <div key={trabajo.id} className="card">
                <span>{trabajo.categorias}</span>

                <div className="img-box"  >


                  <img src={trabajo.imagen} alt='img' >
                  </img>
                </div>

                <div className='content'>
                  <h2>
                    {trabajo.nombre}
                  </h2>
                  <h4>{trabajo.Descripcion}</h4>
                  <p>{trabajo.tecnologias}</p>

                  <a href={trabajo.url} target="_blank" rel="noreferrer" > Ir al proyecto </a>


                </div>

              </div>


            );
          })
        }
      </section>


    </div>
  )
}
