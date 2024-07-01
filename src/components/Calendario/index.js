import React from 'react'

import './Calendario.css'

function Calendario(props) {
    return(
        <section className='calendario'>
            <h2>{props.title}</h2>
            <div className="calendario--content">
                <img src={props.image} alt={props.imageAlt} />
                { props.children }
            </div>
        </section>
    )
}

export { Calendario }