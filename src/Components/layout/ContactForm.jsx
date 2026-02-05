import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../../styles/ContactForm.css";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrekkkzo");

  return (
    <div className="contact-container">
      <h2>Contacto</h2>

      <form onSubmit={handleSubmit} className="contact-form">

        
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
        />

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Tu email"
          required
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />

        <textarea
          id="message"
          name="message"
          placeholder="Tu mensaje"
          required
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {/* POP-UP DE CONFIRMACIÓN */}
      {state.succeeded && (
        <div className="thank-you-overlay">
          <div className="thank-you-popup">
            <p>¡Gracias! Tu mensaje ha sido enviado.</p>
            <button onClick={() => window.location.reload()}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

