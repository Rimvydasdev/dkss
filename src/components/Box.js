import React from 'react'
import "./styles.css"

const Box = ({ doorID, knobID, open }) => {
    return (
       <div className="frame">
                {/* <img src="https://source.unsplash.com/mou0S7ViElQ" alt="minion" /> */}
            <div id={doorID} className={open ? 'door door-open' : 'door'}>
                <div id={knobID} className="knob"></div>
                <div className="number">
                </div>
            </div>
       </div>
    )
}

export default Box