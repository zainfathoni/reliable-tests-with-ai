import React from 'react'
import Toggle from './components/Toggle'
import ToggleHooks from './components/ToggleHooks'
import './index.css'

function App() {
  return (
    <div className="app">
      <h1>React Testing Demo</h1>
      <div className="demo-section">
        <h2>Class-based Toggle Component</h2>
        <Toggle />
      </div>
      <div className="demo-section">
        <h2>Hooks-based Toggle Component</h2>
        <ToggleHooks />
      </div>
    </div>
  )
}

export default App