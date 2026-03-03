import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { HeaderNav } from './HeaderNav'

describe('HeaderNav', () => {

  test('renderiza los enlaces principales', () => {
    render(
      <MemoryRouter>
        <HeaderNav />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: /About me/i }))
      .toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Portfolio/i }))
      .toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Curriculum/i }))
      .toBeInTheDocument()
  })

  test('los enlaces tienen el href correcto', () => {
    render(
      <MemoryRouter>
        <HeaderNav />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: /About me/i }))
      .toHaveAttribute('href', '/about')

    expect(screen.getByRole('link', { name: /Portfolio/i }))
      .toHaveAttribute('href', '/portfolio')

    expect(screen.getByRole('link', { name: /Curriculum/i }))
      .toHaveAttribute('href', '/curriculum')
  })

  test('abre el menú al hacer click en toggle', async () => {
    render(
      <MemoryRouter>
        <HeaderNav />
      </MemoryRouter>
    )

    const toggle = document.querySelector('.toggle')
    const nav = document.querySelector('.nav')

    expect(nav).not.toHaveClass('open')

    await userEvent.click(toggle)

    expect(nav).toHaveClass('open')
  })

})