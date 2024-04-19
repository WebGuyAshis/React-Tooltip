import { useState } from 'react'

import './App.css'
import Tooltip from './components/Tooltip'

function App() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })
  const [showTooltip, setShowTooltip] = useState(false)

  const handleMouseEnter = (e) => {

    const position = e.target.getBoundingClientRect();
    const { left, top, height, width } = position;
    console.log("Position:", position);
    setPosition({
      x: left + width + 10,
      y: top - height / 2
    })
    setShowTooltip(true)

  }

  const HandleMouseLeave = () => {
    setShowTooltip(false)
  }

  return (
    <div className="app">
      {
        showTooltip && <Tooltip top={position.y} left={position.x} content={"Hi Im a Tooltip!"} />
      }

      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={HandleMouseLeave}
      >Hover Me</button>

    </div>
  )
}

export default App
