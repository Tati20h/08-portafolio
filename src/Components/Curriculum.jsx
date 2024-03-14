import React from 'react'
import educacion from '../assets/img/educacion.jpeg'
import experiens from '../assets/img/experiencia lab.jpeg'
import courses from '../assets/img/cursos.jpeg'
import Certifications from '../assets/img/certificado.jpeg'
export const Curriculum = () => {
  return (
    <div className='page'>

      <section className='home'>
        <h1 className='heading'> Curriculum. </h1>
      </section>

      <section class="cards-container">
        <div class="cards">
          <h2 className='title'>Education</h2>
          <div class="front">
            <img src={educacion} alt="animation" />
          </div>
          <div class="back">
            <div class="details">
              <div class="caption">
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                quisquam iure in! Corporis expedita consequatur tenetur rem
                ratione saepe, perferendis ipsam alias quam. Libero illum maxime,
                unde itaque ratione "
              </div>
              <h2>Education</h2>
              <span>Senior Developer</span>
            </div>
          </div>
        </div>

        <div class="cards">
          <h2 className='title'>Professional Experience</h2>
          <div class="front">
            <img src={experiens} alt="animation" />
          </div>
          <div class="back">
            <div class="details">
              <div class="caption">
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                quisquam iure in! Corporis expedita consequatur tenetur rem
                ratione saepe, perferendis ipsam alias quam. Libero illum maxime,
                unde itaque ratione "
              </div>
              <h2>Madison Goldbeck</h2>
              <span>Senior Developer</span>
            </div>
          </div>
        </div>

        <div class="cards">
          <h2 className='title'>Courses</h2>
          <div class="front">
            <img src={courses} alt="animation" />
          </div>
          <div class="back">
            <div class="details">
              <div class="caption">
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                quisquam iure in! Corporis expedita consequatur tenetur rem
                ratione saepe, perferendis ipsam alias quam. Libero illum maxime,
                unde itaque ratione "
              </div>
              <h2>Madison Goldbeck</h2>
              <span>Senior Developer</span>
            </div>
          </div>
        </div>

        <div class="cards">
          <h2 className='title'>Certifications</h2>
          <div class="front">
            <img src={Certifications} alt="animation" />
          </div>
          <div class="back">
            <div class="details">
              <div class="caption">
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                quisquam iure in! Corporis expedita consequatur tenetur rem
                ratione saepe, perferendis ipsam alias quam. Libero illum maxime,
                unde itaque ratione "
              </div>
              <h2>Madison Goldbeck</h2>
              <span>Senior Developer</span>
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}
