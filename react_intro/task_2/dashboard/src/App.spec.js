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
        const email = document.querySelector("#email")
        const pw = document.querySelector("#pw")
        expect(email).toBeInTheDocument()
        expect(pw).toBeInTheDocument()
    })
    it("are the labels rendred", () => {
        render(<App />)
        const email = screen.getByLabelText(/Email/)
        const pw = screen.getByLabelText(/Password/)
        expect(email).toBeInTheDocument()
        expect(pw).toBeInTheDocument()
    })
    it("is the button rendred", () => {
        render(<App />)
        const btn = document.querySelector("[type='submit']")
        expect(btn).toBeInTheDocument()
        expect(btn.textContent).toMatch(/OK/)
    })
})