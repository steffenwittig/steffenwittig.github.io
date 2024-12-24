import { render, screen } from '@testing-library/react'
import App from './App'

// TODO: Create tests some day

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Steffen Wittig/i)
  expect(linkElement).toBeInTheDocument()
})
