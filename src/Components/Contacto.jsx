import React from 'react'
import animation from '../Components/assets/img/men_animation.gif';

export const Contacto = () => {
  return (
    <div className='page'>
 
        <h1 className='heading'>Contacto</h1>
        <section className='cont'>
        <form className='contact' action="mailto=ltatianahernandez@sanmateo.edu.co">
          <input type="text" placeholder='Nombre' />
          <input type="text" placeholder='Apellido' />
          <input type="text" placeholder='Email ' />
          <textarea type="text" placeholder='Motivo de contacto ' />
          <input type="submit" value='Enviar' />

        </form>
        <div>
          <img className='animation' src={animation} alt="animation" />
        </div>
      </section>
    </div>

  )
}
