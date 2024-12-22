import {render, screen} from '@testing-library/react'
import Login from './Login.jsx'

describe("Login component", () => {
    it("are the input elements renderd", () => {
        render(<Login />)
        const email = screen.getByTestId("email")
        const pw = screen.getByTestId("pw")
        expect(email).toBeInTheDocument()
        expect(pw).toBeInTheDocument()
    })
    it("are the labels rendred", () => {
        render(<Login />)
        const email = screen.getByLabelText("Email")
        const pw = screen.getByLabelText("Password")
        expect(email).toBeInTheDocument()
        expect(pw).toBeInTheDocument()
    })
    it("is the button rendred", () => {
        render(<Login />)
        const btn = screen.getByTestId("btn")
        expect(btn).toBeInTheDocument()
        expect(btn.textContent).toMatch(/OK/)
    })
})