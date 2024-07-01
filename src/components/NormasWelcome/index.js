import React from 'react'

import image from '@images/images/NormaWolcome.jpeg'
import './NormasWelcome.css'

function NormasWelcome() {
    return(
        <section className="normasWelcome">
            <div className="normasWelcome--content">
                <h2>Son importantes las normas</h2>
                <p>Porque nos ayudan al crecimiento y desarrollo de las actividades deportivas</p>
            </div>
            <img src={image} alt="Images" />
        </section>
    )
}

export { NormasWelcome }