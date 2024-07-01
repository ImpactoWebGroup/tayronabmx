import React from 'react'


import './ValueImage.css'

function ValueImage(props) {

    return(
        <div className="valueImage">
            <div className="valueImage--content">
                <p>{props.name}</p>
                <div className="valueImage--content__background">
                    <span>{props.text}</span>
                </div>
            </div>
            <img src={props.image} alt={props.imageAlt} />
        </div>
    )
}

export { ValueImage }