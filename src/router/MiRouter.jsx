import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Inicio } from "../Components/Inicio"
import { Portafolio } from "../Components/Portafolio"
import { Curriculum } from "../Components/Curriculum"
import { Servicios } from "../Components/Servicios"
import { Contacto } from "../Components/Contacto"
import { HeaderNav } from '../Components/layout/HeaderNav'
import { Footer } from '../Components/layout/Footer'
import { Proyecto } from '../Components/Proyecto'

export const MiRouter = () => {
  return (
    <BrowserRouter>
      {/*HEADER Y NAVEGACION */}
      <HeaderNav />


      {/*CONTENIDO CENTRAL */}
      <section className='conten'>
        <Routes>
          <Route path='/' element={<Navigate to="/inicio" />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/portafolio' element={<Portafolio />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/proyecto/:id' element={<Proyecto />} />

          <Route path='*' element={
            <div className='page'>
              <h1 className='heading'>Error 404 </h1>
            </div>} />
        </Routes>
      </section>



      {/*FOOTER */}
      <Footer />
    </BrowserRouter>
  )

}
