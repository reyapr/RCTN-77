import { render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Users from "."

describe('Users Page Test', () => {
  it('Render Users Page', () => {
    render(
      <BrowserRouter>
        <Users />
      </BrowserRouter>
    )

    expect(screen.getByText('Users')).toBeInTheDocument()
  })

  it('Render The Users List With The Data', async () => {
    render(
      <BrowserRouter>
        <Users />
      </BrowserRouter>
    )

    await waitFor(() => {
      const tBody = screen.getByTestId('tbody')
      expect(tBody).toHaveTextContent('Ervin Howell')
    })
  })
})