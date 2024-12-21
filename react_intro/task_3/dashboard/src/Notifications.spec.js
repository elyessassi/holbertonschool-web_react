import Notifications from './Notifications.jsx'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test("testing if the paragraph text is correct", () => {
    render(<Notifications/>)
    const p = screen.getByRole("paragraph")
    expect(p.textContent).toBe("Here is the list of notifications")  
})

test("checking the existance of the button element", () => {
    render(<Notifications/>)
    const btn = screen.getByRole("button")
    expect(btn).toBeInTheDocument()
})

test("checking if the 3 li elements are rendred", () => {
    render(<Notifications/>)
    const liElems = screen.getAllByRole("listitem")
    liElems.map((elem) => {expect(elem).toBeInTheDocument()})
})

test("checking if the right text is logged when the button is clicked", async () => {
    render(<Notifications/>)
    const spy = jest.spyOn(console, 'log')
    const btn = screen.getByRole("button")
    const user = userEvent.setup()
    await user.click(btn)
    expect(spy).toHaveBeenCalledWith("Close button has been clicked")
    spy.mockRestore()
})


