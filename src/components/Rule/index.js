import React from 'react'


import './Rule.css'

function Rule(props) {
    return(
        <div className={props.class + " norma"}>
            <div className="norma--content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <img src={props.image} alt={props.imageAlt} />
        </div>
    )
}

export { Rule }