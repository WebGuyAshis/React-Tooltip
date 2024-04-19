import React from 'react'
import './Tooltip.css'
function Tooltip({top, left, content}) {
  return (
    <div className='tooltip'
    style={{
        position : 'fixed',
        top : top,
        left : left,
        background : 'black',
        padding : '10px',
        borderRadius : '5px',
        color: 'lightgrey'
    }}
    >
        {content}
    </div>
  )
}

export default Tooltip