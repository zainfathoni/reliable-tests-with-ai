import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import Toggle from '../Toggle'

describe('Toggle', () => {
  it('renders with initial state off', () => {
    render(<Toggle />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/off/i)
    expect(button).toBeInTheDocument()
  })

  it('toggles state when clicked', async () => {
    const user = userEvent.setup()
    render(<Toggle />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/off/i)
    
    await user.click(button)
    expect(button).toHaveTextContent(/on/i)
    
    await user.click(button)
    expect(button).toHaveTextContent(/off/i)
  })

  it('maintains state through multiple toggles', async () => {
    const user = userEvent.setup()
    render(<Toggle />)
    
    const button = screen.getByRole('button')
    
    // Toggle multiple times
    await user.click(button)
    expect(button).toHaveTextContent(/on/i)
    
    await user.click(button)
    expect(button).toHaveTextContent(/off/i)
    
    await user.click(button)
    expect(button).toHaveTextContent(/on/i)
  })

  it('uses Button component for rendering', () => {
    render(<Toggle />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('button')
  })
})