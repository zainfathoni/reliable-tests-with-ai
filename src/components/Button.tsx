import React from 'react'
import './Button.css'

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
}

class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Button