import React from 'react'


import './Grupo.css'


function Grupo(props) {

    return(
        <div className='grupo'>
            <h4>{props.title}</h4>
            <img src={props.image} alt={props.imageAlt} />
            <p>{props.text}</p>
        </div>
    )
}

export { Grupo }