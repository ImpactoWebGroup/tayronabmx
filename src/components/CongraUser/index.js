import React from 'react'


import './CongraUser.css'

function CongraUser(props) {
    return(
        <div className="congraUser">
            <div className="congraUser--image">
                <img src={props.image} alt={props.imageAlt} />
            </div>
            <h4>{props.name}</h4>
            <div className="congraUser--content">
                <p>{props.option1}</p>
                <span>{props.value1}</span>
            </div>
            <div className="congraUser--content">
                <p>{props.option2}</p>
                <span>{props.value2}</span>
            </div>
        </div>
    )
}

export { CongraUser }