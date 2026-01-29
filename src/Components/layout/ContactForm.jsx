import React, { useState } from "react";
import "../../styles/ContactForm.css"; 

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="contact-container">
      <h2>Contacto</h2>

      <form
        action="https://formspree.io/f/xrekkkzo" // tu URL
        method="POST"
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
          e.target.reset();
        }}
      >
        <input type="text" name="name" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu email" required />
        <textarea name="message" placeholder="Tu mensaje" required />
        <button type="submit">Enviar</button>
      </form>

     
      {submitted && (
        <div className="thank-you-overlay">
          <div className="thank-you-popup">
            <p>¡Gracias! Tu mensaje ha sido enviado.</p>
            <button onClick={() => setSubmitted(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

