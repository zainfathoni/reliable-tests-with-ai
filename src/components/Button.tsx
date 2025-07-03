import React from 'react'
import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

class Button extends React.Component<ButtonProps> {
  render() {
    const { children, className, ...props } = this.props
    const buttonClass = className ? `button ${className}` : 'button'
    return (
      <button className={buttonClass} {...props}>
        {children}
      </button>
    )
  }
}

export default Button