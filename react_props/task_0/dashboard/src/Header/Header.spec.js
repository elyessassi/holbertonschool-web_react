import {render, screen} from '@testing-library/react'
import Header from './Header.jsx'

describe("Header component", () => {
    it("is the header rendered", () => {
        render(<Header />)
        const h1elem = screen.getByRole("heading")
        expect(h1elem).toBeInTheDocument()
    })
    it("is the image rendred", () => {
        render(<Header />)
        const img = screen.getByAltText("holberton logo")
        expect(img).toBeInTheDocument()
    })
})