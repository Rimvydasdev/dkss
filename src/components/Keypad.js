import React from 'react'
import "./styles.css"

function Keypad({handleClick}) {



  return (
    <div className='keypad-container'>
      <div className="keypad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "Clear", 0, "OK"].map((number, index) => (
          <div className="button" key={index} onClick={() => handleClick(number)}>
            <div className="number">{number}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Keypad;
