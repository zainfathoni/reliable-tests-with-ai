import React from 'react'
import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

class Button extends React.Component<ButtonProps> {
  render() {
    const { children, ...props } = this.props
    return (
      <button {...props}>
        {children}
      </button>
    )
  }
}

export default Button