import React from 'react'
import "./styles.css"

const Screen = ({code}) => {
  return (
    <div className='screen-container'>
      <div className="screen-code">
        <h1>{code}</h1>
      </div>
    </div>
  )
}

export default Screen;
