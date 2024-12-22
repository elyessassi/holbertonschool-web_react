
import {render, screen} from '@testing-library/react'
import Footer from './Footer.jsx'

describe("Footer component", () => {
    it ("if the footer paragraph rendred", () => {
        render(<Footer />)
        const p = screen.getByText("Copyright 2024 - Holberton School main dashboard")
        expect(p).toBeInTheDocument()
    })
})

