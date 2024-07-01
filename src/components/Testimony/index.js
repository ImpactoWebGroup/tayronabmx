import React from 'react'


import './Testimony.css'

function Testimony(props) {
    return(
        <div className="testimony">
            <div className="testimony--com">
                <img src={props.image} alt={props.imageAlt} />
                <h3>{props.name}</h3>
                <span> <p>{props.type}</p></span>
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export { Testimony }