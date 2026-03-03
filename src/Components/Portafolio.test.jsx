import { render, screen } from '@testing-library/react'
import { Portafolio } from './Portafolio'

jest.mock('../data/Trabajos', () => ({
  trabajos: [
    {
      id: 1,
      categorias: 'Web App',
      imagen: 'test.jpg',
      nombre: 'Proyecto Test',
      Descripcion: 'Descripción de prueba',
      tecnologias: 'React, JS',
      url: 'https://test.com'
    }
  ]
}))

describe('Portafolio', () => {

  test('renderiza el título Portfolio', () => {
    render(<Portafolio />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Portfolio.' })
    ).toBeInTheDocument()
  })

  test('renderiza proyecto del array', () => {
    render(<Portafolio />)

    expect(screen.getByText('Proyecto Test')).toBeInTheDocument()
    expect(screen.getByText('Descripción de prueba')).toBeInTheDocument()
    expect(screen.getByText('React, JS')).toBeInTheDocument()
  })

  test('renderiza link del proyecto correctamente', () => {
    render(<Portafolio />)

    const link = screen.getByRole('link', { name: /Go to project/i })

    expect(link).toHaveAttribute('href', 'https://test.com')
    expect(link).toHaveAttribute('target', '_blank')
  })

})