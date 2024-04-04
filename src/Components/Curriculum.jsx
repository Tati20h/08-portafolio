import React from 'react'
import educacion from '../assets/img/educacion.jpeg'
import experiens from '../assets/img/experiencia lab.jpeg'
import courses from '../assets/img/cursos.jpeg'
import Certifications from '../assets/img/certificado.jpeg'



export const Curriculum = () => {
  return (
    <div className='page'>

      <section className='box-cont'>
        <div className='box'>
          <h1 className='heading'> Curriculum. </h1>
          <h2 >
            Thank you for visiting and exploring my portfolio! Feel free to browse, get inspired and discover what we can achieve together.
          </h2>
        </div>
      </section>

      <section class="cards-container">

        <div class="cards">
          <h2 className='title'>Education</h2>

          <div class="front">
            <img src={educacion} alt="animation" />
          </div>

          <div class="back">
            <div class="details">
              <h3>Front - End Developer </h3 >
              <a className='subtitle' href="https://www.credential.net/adec9fcc-3a50-406f-a4a3-9397d9f06e31#gs.42uxdh">
                Laboratoria
              </a>
              <div class="caption">
                <p>Our Front-End Programming Bootcamp teaches JavaScript and React, using real-world work scenarios and the SCRUM methodology.</p>
              </div>

              <h3>Gastronomy Professional</h3>
              <a className='subtitle' href="https://drive.google.com/file/d/1BAfb0paO9B8k3WkS7JCF6oV9aLZxwlLC/view?usp=sharing">
                Universidad San Mateo
              </a>
              <div class="caption">
                <p>Gastronomy professional recognized for best research in a degree project focused on the Fourth Industrial Revolution in Gastronomy.</p>
              </div>

            </div>



          </div>
        </div>

        <div class="cards1">
          <h2 className='title'>Professional Experience</h2>

          <div class="front">
            <img src={experiens} alt="animation" />
          </div>

          <div class="back">
            <div class="details">
              <h3>Freelance Front-End Developer </h3>
              <p>Pidgin Contact Solutions</p>

              <div class="caption">
                Web project for generating employment certificates for a technology company, also including validation using hex codes. Developed as a single project using Express for the server and React for the front end.
              </div>
              <p> start Date:&nbsp;December&nbsp;&nbsp;2023</p>
              <br />
              <h3>Manual QA </h3>
              <p>IdealSolutions</p>
              <div class="caption">
                Responsible for manual and API testing of web platforms using agile methodologies (Scrum), as well as web development.
              </div>
              <p className='mes'> start Date:&nbsp;01/06/2016</p>
              <p className='mes'> End Date:&nbsp;01/08/2020</p>

              <br />
              <h3 >Cost Analyst at A&Br </h3>
              <p>Club Campestre Guaymaral</p>
              <div class="caption">
                I began as a kitchen assistant, and my excellent performance and teamwork quickly earned me a promotion to Cook II. In this role, I excelled due to my leadership and agility.
              </div>
              <p className='mes'> start Date:&nbsp;01/06/2016</p>
              <p className='mes'> End Date:&nbsp;01/08/2020</p>

            </div>
          </div>
        </div>

        <div class="cards">
          <h2 className='title'> Courses </h2>
          <div class="front">
            <img src={courses} alt="animation" />
          </div>

          <div class="back">
            <div class="details">

              <h3> Front - End Developer </h3 >
              <p > Platzi </p>

              <div class="caption">
                I have taken various web development courses along with their tools such as Git, Jira, Postman, JavaScript, React, HTML, CSS, SQL databases, and DevOps
              </div>

            </div>
          </div>
        </div>

        <div class="cards">
          <h2 className='title'> Certifications </h2>
          <div class="front">
            <img src={Certifications} alt="animation" />
          </div>
          <div class="back">
            <div class="details">
              <h3> Master React </h3>
              <a className='subtitle' href="https://udemy-certificate.s3.amazonaws.com/image/UC-b7e882ff-2dc6-47a8-be8b-46e5d6d5a027.jpg">
                Udemy
              </a>

              <h3> Basic Digital Marketing Course </h3>
              <a className='subtitle' href="https://drive.google.com/file/d/1ETWUKHE9SlwC4WA5rsmv4xYqgnzE6nhE/view?usp=drive_link">
                Google Academic
              </a>

              <h3>Diploma in Gastronomic Marketing</h3>
              <a className='subtitle' href="https://drive.google.com/file/d/1qu23a-Hc88JzZPUx2GcjM2Zjtn720LYX/view?usp=drive_link">
                Fundación Universitaria San Mateo
              </a>

              <h3> Diploma in Food Science Applied to Culinary Techniques </h3>
              <a className='subtitle' href="https://drive.google.com/file/d/1E973NIMgTfuWYwMEoqGpLK9WVRsRciSF/view?usp=drive_link">
                Fundación Universitaria San Mateo
              </a>

            </div>

          </div>

        </div>

      </section >

    </div >
  )
}
