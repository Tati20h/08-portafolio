import { render, screen } from '@testing-library/react'
import { ContactForm } from './ContactForm'
import { useForm } from '@formspree/react'

jest.mock('@formspree/react', () => ({
  useForm: jest.fn(),
  ValidationError: () => null
}))

describe('ContactForm', () => {

  test('renderiza los campos del formulario', () => {
    useForm.mockReturnValue([
      { submitting: false, succeeded: false, errors: [] },
      jest.fn()
    ])

    render(<ContactForm />)

    expect(screen.getByPlaceholderText(/Tu nombre/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Tu email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Tu mensaje/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Enviar/i }))
      .toBeInTheDocument()
  })

  test('muestra "Enviando..." cuando está enviando', () => {
    useForm.mockReturnValue([
      { submitting: true, succeeded: false, errors: [] },
      jest.fn()
    ])

    render(<ContactForm />)

    expect(screen.getByRole('button'))
      .toHaveTextContent('Enviando...')
    expect(screen.getByRole('button'))
      .toBeDisabled()
  })

  test('muestra mensaje de éxito cuando el envío fue exitoso', () => {
    useForm.mockReturnValue([
      { submitting: false, succeeded: true, errors: [] },
      jest.fn()
    ])

    render(<ContactForm />)

    expect(screen.getByText(/Tu mensaje ha sido enviado/i))
      .toBeInTheDocument()
  })

})