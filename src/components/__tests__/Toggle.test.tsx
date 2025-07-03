import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import Toggle from '../Toggle'

describe('Toggle', () => {
  it('renders with initial state off', () => {
    render(<Toggle />)
    
    const stateDisplay = screen.getByText(/off/i)
    expect(stateDisplay).toBeInTheDocument()
    const button = screen.getByRole('button', { name: /toggle/i })
    expect(button).toBeInTheDocument()
  })

  it('toggles state when clicked', async () => {
    const user = userEvent.setup()
    render(<Toggle />)
    
    const button = screen.getByRole('button', { name: /toggle/i })
    expect(screen.getByText(/off/i)).toBeInTheDocument()
    
    await user.click(button)
    expect(screen.getByText(/on/i)).toBeInTheDocument()
    
    await user.click(button)
    expect(screen.getByText(/off/i)).toBeInTheDocument()
  })

  it('maintains state through multiple toggles', async () => {
    const user = userEvent.setup()
    render(<Toggle />)
    
    const button = screen.getByRole('button', { name: /toggle/i })
    
    // Toggle multiple times
    await user.click(button)
    expect(screen.getByText(/on/i)).toBeInTheDocument()
    
    await user.click(button)
    expect(screen.getByText(/off/i)).toBeInTheDocument()
    
    await user.click(button)
    expect(screen.getByText(/on/i)).toBeInTheDocument()
  })

  it('uses Button component for rendering', () => {
    render(<Toggle />)
    
    const button = screen.getByRole('button', { name: /toggle/i })
    expect(button).toHaveClass('button')
  })
})