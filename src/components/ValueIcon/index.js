import React from 'react'


import './ValueIcon.css'

function ValueIcon(props) {
    return(
        <div className="valueIcon">
            <span>{props.image}</span>
            <p>{props.name}</p>
        </div>
    )
}

export { ValueIcon }