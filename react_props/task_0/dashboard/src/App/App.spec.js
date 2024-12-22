import {render, screen} from '@testing-library/react'
import Login from '../Login/Login.jsx'
import { Header } from '../Header/Header.jsx'
import { Footer } from '../Footer/Footer.jsx'
import Notifications from '../Notifications/Notifications.jsx'  

test("testing if components are rendered", () => {
    const h = render(<Header/>)
    expect(h).toBeInTheDocument()
    const l = render(<Login/>)
    expect(l).toBeInTheDocument()
    const f = render(<Footer/>)
    expect(f).toBeInTheDocument()
    const n = render(<Notifications/>)
    expect(n).toBeInTheDocument()
})