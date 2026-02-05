import React from "react";
import perfil from "../assets/img/perfil.png";
import { ContactForm } from "./layout/ContactForm";
import animation from "../assets/img/men_animation.gif";
import Graf from "./Mui/Graf";
import Barras from "./Mui/Barras";

import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";



export const Inicio = () => {
  return (
    <div className="page">
      {/* HERO */}
      <section className="home">
        <div className="profile-block animate-profile">
          <img className="perfil" src={perfil} alt="Profile" />
        </div>

        <div className="abouts">
          <h1 className="heading">About.</h1>

          <p className="intro">
            I am a <strong>Front-End Developer</strong> with experience building
            web applications using <strong>React, JavaScript, and TypeScript</strong>.
          </p>

          <p>
            I have worked on <strong>real-world projects for companies</strong>,
            collaborating in agile environments (SCRUM) and using Git for version control.
          </p>

          <p>
            I am motivated to build <strong>clean, maintainable, and well-tested</strong>
            web solutions and grow within collaborative tech teams.
          </p>
        </div>
      </section>

      <div >
        <ul className="social-icons">
          <a
            href="/cv-tatiana-frontend.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button"
          >
            Download CV
          </a>

          <li>
            <a className="icon-name" href="https://github.com/Tati20h">
              <FaGithub size={50} color="333" />
              <span className="icon-name1"> GitHub</span>
            </a>
          </li>
          <li className="icon-name">
            <FiPhoneCall className="icon-name" size={50} color="333" />
            <span className="icon-name1">+34 651 42 62 89</span>
          </li>
          <li>
            <a className="icon-name" href="https://www.linkedin.com/in/tatiana-hernandez29/">
              <SiLinkedin alt="Linkedin" size={50} color="#039BE5" />
              <span className="icon-name"> Linkedin</span>

            </a>
          </li>

        </ul>


      </div>

      {/* SKILLS */}
      <section className="lasts-works">
        <div className="grafi">
          <h2 className="subheading">Technical Skills</h2>
          <p className="skills-description">
            Technologies and tools I use to build scalable web applications.
          </p>
          <Barras />
        </div>

        <div className="container">
          <h3 className="subhead">Coder.</h3>
          <h2 className="subh">
            Clean code and simple design create better user experiences.
          </h2>
          <p>
            I focus on readable, reusable components that balance aesthetics,
            performance, and usability.
          </p>
          {/* Botón para ir al portfolio */}
          <a href="/portfolio" className="btn-portfolio">
            View Portfolio
          </a>
        </div>
      </section>


      {/* SOFT SKILLS */}
      <section className="lasts-works">
        <div className="container">
          <h3 className="subheading">Welcome to my digital corner!</h3>
          <p>
            My background in gastronomy strengthened creativity, discipline,
            and attention to detail — qualities I now apply to UI development.
          </p>
        </div>

        <div className="graf">
          <h2 className="subheading">Soft Skills</h2>
          <p className="skills-description">
            Skills that define how I collaborate and adapt within teams.
          </p>
          <Graf />
        </div>
      </section>

      <section className='homes'>
        <div className="homes-container">
          <img className='animation' src={animation} alt="animation" />
          <ContactForm />
        </div>
      </section>

      {/* HOBBIES 
      <section className="hobbies">
        <Gallery />

      </section>
      */}
    </div>
  );
};
