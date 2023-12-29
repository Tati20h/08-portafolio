import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const Proyecto = () => {

  const [proyecto, setProyecto] = useState("")
  const params = useParams();

  useEffect(() => {
    let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);

    setProyecto(proyecto[0]);

  }, []);

  return (
    <div className='page page-work'>

      <h1 className='heading'>{proyecto.nombre}  </h1>
      <div className='mask'>
        <img className='image' src={proyecto.imagen} alt='img' ></img>
      </div>
      <h3>{proyecto.tecnologias}</h3>
      <p>{proyecto.Descripcion}</p>
      <a href={proyecto.url} target="_blank" rel="noreferrer" > Ir al proyecto </a>
    </div>
  )
}
