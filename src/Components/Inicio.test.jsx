import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Inicio } from './Inicio'

jest.mock('./layout/ContactForm', () => ({
    ContactForm: () => <div>ContactForm Mock</div>
}))

jest.mock('./Mui/Graf', () => () => <div>Graf Mock</div>)
jest.mock('./Mui/Barras', () => () => <div>Barras Mock</div>)

describe('Inicio', () => {

    test('renderiza el título About', () => {
        render(
            <MemoryRouter>
                <Inicio />
            </MemoryRouter>
        )

        expect(screen.getByRole('heading', { name: /About./i }))
            .toBeInTheDocument()
    })

    test('renderiza botón Download CV', () => {
        render(
            <MemoryRouter>
                <Inicio />
            </MemoryRouter>
        )

        const cvLink = screen.getByRole('link', { name: /Download CV/i })

        expect(cvLink).toBeInTheDocument()
        expect(cvLink).toHaveAttribute('href', '/cv-tatiana-frontend.pdf')
    })

    test('renderiza link de GitHub', () => {
        render(
            <MemoryRouter>
                <Inicio />
            </MemoryRouter>
        )

        const githubLink = screen.getByRole('link', { name: /GitHub/i })

        expect(githubLink).toHaveAttribute(
            'href',
            'https://github.com/Tati20h'
        )
    })

    test('renderiza link de LinkedIn', () => {
        render(
            <MemoryRouter>
                <Inicio />
            </MemoryRouter>
        )

        const linkedinLink = screen.getByRole('link', { name: /Linkedin/i })

        expect(linkedinLink).toHaveAttribute(
            'href',
            'https://www.linkedin.com/in/tatiana-hernandez29/'
        )
    })

    test('renderiza botón View Portfolio', () => {
        render(
            <MemoryRouter>
                <Inicio />
            </MemoryRouter>
        )

        expect(screen.getByRole('link', { name: /View Portfolio/i }))
            .toHaveAttribute('href', '/portfolio')
    })

    test('renderiza imagen de perfil', () => {
        render(
            <MemoryRouter>
                <Inicio />
            </MemoryRouter>
        )

        expect(screen.getByAltText(/Profile/i))
            .toBeInTheDocument()
    })

})