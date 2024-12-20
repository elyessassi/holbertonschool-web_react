import {render, screen} from '@testing-library/react'
import App from './App.jsx'

describe("App component", () => {
    it("is the header rendered", () => {
        render(<App />)
        const h1elem = screen.getByRole("heading")
        expect(h1elem).toBeInTheDocument()
    })
    it("is the image rendred", () => {
        render(<App />)
        const img = screen.getByAltText("holberton logo")
        expect(img).toBeInTheDocument()
    })
    it("are the input elements renderd", () => {
        render(<App />)
        const email = screen.getByTestId("email")
        const pw = screen.getByTestId("pw")
        expect(email).toBeInTheDocument()
        expect(pw).toBeInTheDocument()
    })
    it("are the labels rendred", () => {
        render(<App />)
        const email = screen.getByLabelText("Email")
        const pw = screen.getByLabelText("Password")
        expect(email).toBeInTheDocument()
        expect(pw).toBeInTheDocument()
    })
    it("is the button rendred", () => {
        render(<App />)
        const btn = screen.getByTestId("btn")
        expect(btn).toBeInTheDocument()
        expect(btn.textContent).toMatch(/OK/)
    })
})