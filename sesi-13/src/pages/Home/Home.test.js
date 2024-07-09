/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import App from "../../App"

describe('Home Test', () => {
  it('should render home page', () => {
    const { unmount } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const button = screen.getByTestId('usr-list-btn')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Users List')
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Why do we need Test?')).toBeInTheDocument()
    unmount()
  })

  it('should change screen to the users page', () => {
    const { unmount } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const button = screen.getByTestId('usr-list-btn')

    fireEvent.click(button)
    expect(screen.getByText('Users')).toBeInTheDocument()

    const backToHomeBtn = screen.getByTestId('back-to-home-btn')

    expect(backToHomeBtn).toHaveTextContent('Back To Home')

    fireEvent.click(backToHomeBtn)
    expect(screen.getByText('Home')).toBeInTheDocument()
    unmount()
  })

  it('should add the count 1', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const incrementButton = getByTestId('increment')
    fireEvent.click(incrementButton)
    const countEle = getByTestId('count')

    expect(countEle).toHaveTextContent('1')
  })

  it('should add the count 3', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const incrementButton = getByTestId('increment')
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    const countEle = getByTestId('count')

    expect(countEle).toHaveTextContent('3')
  })

  // it('should decrement the count to -3', () => {
  //   const { getByTestId } = render(
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   )

  //   const decrementButton = getByTestId('decrement')
  //   fireEvent.click(decrementButton)
  //   fireEvent.click(decrementButton)
  //   fireEvent.click(decrementButton)
  //   const countEle = getByTestId('count')

  //   expect(countEle).toHaveTextContent('-3')
  // })
})