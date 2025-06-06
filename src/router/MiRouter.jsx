import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Inicio } from "../Components/Inicio"
import { Portafolio } from "../Components/Portafolio"
import { Curriculum } from "../Components/Curriculum"
import { Contacto } from "../Components/Contacto"
import { HeaderNav } from '../Components/layout/HeaderNav'
import { Footer } from '../Components/layout/Footer'
import { Proyecto } from '../Components/Proyecto'
import { Blog } from '../Components/Blog'
import { PageNotFound } from '../Components/PageNotFound'

export const MiRouter = () => {
  return (
    <BrowserRouter>
      {/*HEADER Y NAVEGACION */}
      <HeaderNav />


      {/*CONTENIDO CENTRAL */}
      <section className='conten'>
        <Routes>
          <Route path='/' element={<Navigate to="/about" />} />
          <Route path='/about' element={<Inicio />} />
          <Route path='/portfolio' element={<Portafolio />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/contact' element={<Contacto />} />
          <Route path='/proyecto/:id' element={<Proyecto />} />
          <Route path='/blog' element={<Blog />} />

          <Route path='*' element={<PageNotFound /> } />
        </Routes>
      </section>



      {/*FOOTER */}
      <Footer />
    </BrowserRouter>
  )

}
