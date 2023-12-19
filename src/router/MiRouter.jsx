import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Inicio } from "../Componets/Inicio"
import { Portafolio } from "../Componets/Portafolio"
import { Curriculum } from "../Componets/Curriculum"
import { Servicios } from "../Componets/Servicios"
import { Contacto } from "../Componets/Contacto"
import { HeaderNav } from '../Componets/layout/HeaderNav'
import { Footer } from '../Componets/layout/Footer'

export const MiRouter = () => {
  return (
    <BrowserRouter>
      {/*HEADER Y NAVEGACION */}
      <HeaderNav />


      {/*CONTENIDO CENTRAL */}
      <section className='content'>
        <Routes>
          <Route path='/' element={<Navigate to="/inicio" />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/portafolio' element={<Portafolio />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/servicios' element={<Servicios />} />
        </Routes>
      </section>



      {/*FOOTER */}
      <Footer />
    </BrowserRouter>
  )

}
