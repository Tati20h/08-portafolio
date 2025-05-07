import React, { useRef } from 'react'
import animation from '../assets/img/learn.gif';
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


export const Contacto = () => {

  const seeAlert = () => {
    swal({
      title: "Message sent succesfully!🚀",
      text: "We'll be in contact soon.👩‍💻",
      icon: "success",
      button: "ok",
      timer: "4000",
    });
  }

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const apiKey = process.env.REACT_APP_API_KEY;

    console.log(refForm.current)

    emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
      .then(result => {
        seeAlert()
        console.log(result)
      })
      .catch(error => console.log(error))

    event.target.reset()

  }

  return (
    <div className='page'>
      <section className='contac'>

        <h1 className='heading'>Contact.</h1>

        <p>I am always open to new opportunities for collaboration. Do you have an exciting project in mind?</p>
        <p><strong>Let's talk!.</strong></p>

        <ul className="social-icons">
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

      </section>

      <section className='cont'>
        <div>
          <img className='animation' src={animation} alt="animation" />
        </div>


        <form action='' className='contact' ref={refForm} onSubmit={handleSubmit} >

          <input
            className='input'
            autoComplete='on'
            type="text"
            placeholder='Name'
            id='name'
            name='name' required />

          <input
            className='input'
            type="email"
            placeholder='Email '
            id='email'
            name='user_email' required />
          <textarea
            id='message'
            className='motive'
            type="text"
            placeholder='Message '
            name='user_message' required
          />
          <input
            type="submit"
            value='Send Email'
          />

        </form>

      </section>

    </div>

  )
}
