import React from 'react'



import './CongraBox.css'

function CongraBox(props) {
    return(
        <div className="congraBox">
            <h3>{props.title}</h3>
            {props.children}
        </div>
    )
}

export { CongraBox }