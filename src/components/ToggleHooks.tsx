import React, { useState } from 'react'
import Button from './Button'

function ToggleHooks() {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <span>
        {toggle ? 'On' : 'Off'}
      </span>
      <Button onClick={handleToggle}>
        Toggle
      </Button>
    </div>
  )
}

export default ToggleHooks