import React from 'react'

import './CalendarioCarrusel.css'

function CalendarioCarrusel(props) {
    return(
        <section className='calendario'>
            <h2>{props.title}</h2>
            <div className="calendario--content">
                { props.children }
            </div>
        </section>
    )
}

export { CalendarioCarrusel }