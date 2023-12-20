import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>

      <h1 className='heading'>Contacto</h1>

      <form className='contact' action="mailto=ltatianahernandez@sanmateo.edu.co">
        <input type="type" placeholder='Nombre' />
        <input type="type" placeholder='Apellido' />
        <input type="type" placeholder='Email ' />
        <textarea type="type" placeholder='Motivo de contacto ' />
        <input type="submit" value='Enviar' />
      </form>
    </div>

  )
}
