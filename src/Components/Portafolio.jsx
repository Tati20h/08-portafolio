import React from 'react'
import { trabajos } from '../data/trabajos'
//import { Link } from 'react-router-dom';//

export const Portafolio = () => {
  return (
    <div className='page'>
      <section className='home'>
        <div className='containere'>
          <h1 className='heading'>Portfolio.</h1>
          <p>My approach is based on understanding user needs and translating them into creative and effective solutions. I've had the privilege of working on a variety of projects, from informative websites to interactive applications. Each experience has allowed me to grow as a professional and hone my skills in front-end development.</p>
        </div>
        <div className='sub'>
          <h4>Explore my portfolio to learn more about my work! </h4>
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
