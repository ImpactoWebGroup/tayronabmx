import React from 'react'


import './Step.css'

function Step(props) {
    return(
        <div className="step">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export { Step }