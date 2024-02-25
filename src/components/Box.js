import React from 'react'
import "./styles.css"

const Box = ({ doorID, knobID, open, title }) => {
    return (
        <div className="frame">
            <img className='inside' src="https://source.unsplash.com/mou0S7ViElQ" alt="minion" />
            <span className="inside">{title}</span>
            <div id={doorID} className={open ? 'door door-open' : 'door'}>
                <div id={knobID} className="knob"></div>
                <div className="number"></div>
            </div>
        </div>
    )
}

export default Box