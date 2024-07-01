import React from 'react'

import './CarrouselItem.css'

function CarrouselItem(props) {
    return(
        <div className="carousel--image">
            <img src={props.image} alt={props.imageAlt} />
            <a href={props.link}>{props.title}</a>
        </div>
    )
}

export { CarrouselItem }