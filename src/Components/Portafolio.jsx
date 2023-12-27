import React from 'react'
import { trabajos } from '../data/Trabajos'
import { Link } from 'react-router-dom';

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>

      <section className='works'>
        {
          trabajos.map(trabajo => {
            return (
              <article key={trabajo.id} className="work-item">
                <div className='mask'>
                  <img className='image' src={trabajo.imagen} alt='img' ></img>
                </div>
                <span>{trabajo.categorias}</span>
                <h2> <Link to={"/proyecto/" + trabajo.id}>
                  {trabajo.nombre} </Link>
                </h2>
                <h3>{trabajo.tecnologias}</h3>
                <p>{trabajo.Descripcion}</p>
              </article>
            );
          })
        }
      </section>
    </div>
  )
}
