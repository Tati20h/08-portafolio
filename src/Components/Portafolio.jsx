import React from 'react'
import { trabajos } from '../data/trabajos'
//import { Link } from 'react-router-dom';//

export const Portafolio = () => {
  return (
    <div className='page'>
      <section className='contac'>
        <h1 className='heading'>Portafolio.</h1>
        <p>Ponte en contacto conmigo a través de las redes sociales o correo electrónico.</p>

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
