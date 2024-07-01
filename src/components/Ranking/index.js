import React from 'react'


import ranking from '@images/images/ranking.png'
import './Ranking.css'


function Ranking(props) {
    return(
        <section className="ranking">
            <img className='ranking--animate' src={ranking} alt="Imagen de ranking" />
            <img className='ranking--foto' src={props.image} alt={props.imageAlt} />
        </section>
    )
}

export { Ranking }