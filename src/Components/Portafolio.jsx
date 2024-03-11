import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom';

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
              <div key={trabajo.id} className="work">
                <div className="item"  >

                  {/*<img className='image' src={trabajo.imagen} alt='img' ></img>*/}
                  <span>{trabajo.categorias}</span>
                  <h2> <Link to={"/proyecto/" + trabajo.id}>
                    {trabajo.nombre} </Link>
                  </h2>
                </div>
                <div className="back">

                  {/*-- <h3>{trabajo.tecnologias}</h3> */}
                  <p>{trabajo.Descripcion}</p>
                  <div className='link'>
                    <a href={trabajo.url} target="_blank" rel="noreferrer" > Ir al proyecto </a>
                  </div>
                </div>
              </div>


            );
          })
        }
      </section>


    </div>
  )
}
