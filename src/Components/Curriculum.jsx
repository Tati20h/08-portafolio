import React from 'react'
import educacion from '../assets/img/educacion.jpeg'
import experiens from '../assets/img/experiencia lab.jpeg'
import courses from '../assets/img/cursos.jpeg'
import Certifications from '../assets/img/certificado.jpeg'


export const Curriculum = () => {
  return (
    <div className='page'>

      <section className='homes'>
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
              <h2>Front - End Developer </h2 >
              <a className='subtitle' href="https://www.credential.net/adec9fcc-3a50-406f-a4a3-9397d9f06e31#gs.42uxdh">
                Laboratoria
              </a>
              <div class="caption">
                <p>Our Front-End Programming Bootcamp teaches JavaScript and React, using real-world work scenarios and the SCRUM methodology.</p>
              </div>
              <br />
              <h2>Gastronomy Professional</h2>
              <a className='subtitle' href="https://www.credential.net/adec9fcc-3a50-406f-a4a3-9397d9f06e31#gs.42uxdh">
               Universidad San Mateo
              </a>
              <div class="caption">
                <p>Gastronomy professional recognized for best research in a degree project focused on the Fourth Industrial Revolution in Gastronomy.</p>
              </div>

            </div>

            <div class="social-icon">

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
            <h2>Front - End Developer </h2 >
            <a className='subtitle' href="https://www.credential.net/adec9fcc-3a50-406f-a4a3-9397d9f06e31#gs.42uxdh">
                Laboratoria
              </a>
              <div class="caption">
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                quisquam iure in! Corporis expedita consequatur tenetur rem
                ratione saepe, perferendis ipsam alias quam. Libero illum maxime,
                unde itaque ratione "
              </div>
              <h2>Front - End Developer </h2 >
              <a className='subtitle' href="https://www.credential.net/adec9fcc-3a50-406f-a4a3-9397d9f06e31#gs.42uxdh">
                Laboratoria
              </a>
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
            <h2>Front - End Developer </h2 >
            <a className='subtitle' href="https://www.credential.net/adec9fcc-3a50-406f-a4a3-9397d9f06e31#gs.42uxdh">
                Laboratoria
              </a>
              <div class="caption">
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                quisquam iure in! Corporis expedita consequatur tenetur rem
                ratione saepe, perferendis ipsam alias quam. Libero illum maxime,
                unde itaque ratione "
              </div>
              <h2>Front - End Developer </h2 >
              <a className='subtitle' href="https://www.credential.net/adec9fcc-3a50-406f-a4a3-9397d9f06e31#gs.42uxdh">
                Laboratoria
              </a>
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
            <h2>Front - End Developer </h2 >
            <a className='subtitle' href="https://www.credential.net/adec9fcc-3a50-406f-a4a3-9397d9f06e31#gs.42uxdh">
                Laboratoria
              </a>
              <div class="caption">
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                quisquam iure in! Corporis expedita consequatur tenetur rem
                ratione saepe, perferendis ipsam alias quam. Libero illum maxime,
                unde itaque ratione "
              </div>
              <h2>Front - End Developer </h2 >
              <a className='subtitle' href="https://www.credential.net/adec9fcc-3a50-406f-a4a3-9397d9f06e31#gs.42uxdh">
                Laboratoria
              </a>
              <span>Senior Developer</span>
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}
