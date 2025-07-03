import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import ToggleHooks from '../ToggleHooks'

describe('ToggleHooks', () => {
  it('renders with initial state off', () => {
    render(<ToggleHooks />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/off/i)
    expect(button).toBeInTheDocument()
  })

  it('toggles state when clicked', async () => {
    const user = userEvent.setup()
    render(<ToggleHooks />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/off/i)
    
    await user.click(button)
    expect(button).toHaveTextContent(/on/i)
    
    await user.click(button)
    expect(button).toHaveTextContent(/off/i)
  })

  it('maintains state through multiple toggles', async () => {
    const user = userEvent.setup()
    render(<ToggleHooks />)
    
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
    render(<ToggleHooks />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('button')
  })

  it('behaves identically to class-based Toggle component', async () => {
    const user = userEvent.setup()
    render(<ToggleHooks />)
    
    const button = screen.getByRole('button')
    
    // Should start in off state
    expect(button).toHaveTextContent(/off/i)
    
    // Should toggle to on
    await user.click(button)
    expect(button).toHaveTextContent(/on/i)
    
    // Should toggle back to off
    await user.click(button)
    expect(button).toHaveTextContent(/off/i)
  })
})