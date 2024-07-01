import React from 'react'

import { Step } from '../Step'

import './Steps.css'

function Steps() {
    return(
        <section className="steps">
            <h2>Indicaciones</h2>
            <div className="steps--content">
                <Step title='Ind 1' text='INGRESA TUS DATOS' />
                <Step title='Ind 2' text='ESCOGE UNA FECHA Y UNA HORA' />
                <Step title='Ind 3' text='EL EQUIPO TAYRONA SE CONTACTARÁ CONTIGO' />
                <Step title='Ind 4' text='ESPERA TU CONFIRMACIÓN VIA WhatsApp' />
            </div>
        </section>
    )
}

export { Steps }