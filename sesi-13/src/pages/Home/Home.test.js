import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import App from "../../App"

describe('Home Test', () => {
  it('should render home page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const button = screen.getByTestId('usr-list-btn')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Users List')
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Why do we need Test?')).toBeInTheDocument()

  })

  it('should change screen to the users page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const button = screen.getByTestId('usr-list-btn')

    fireEvent.click(button)
    expect(screen.getByText('Users')).toBeInTheDocument()

    const backToHomeBtn = screen.getByTestId('back-to-home-btn')

    expect(backToHomeBtn).toHaveTextContent('Back To Home')

  })
})