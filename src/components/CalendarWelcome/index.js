import React from 'react'


import Calendar from '@images/images/Calendar.png'
import './CalendarWelcome.css'


function CalendarWelcome() {
    return(
        <section className="calendarWelcome">
            <h1>Apuntar las fechas es importante</h1>
            <img src={Calendar} alt="Imagen de un calendario" />
        </section>
    )
}

export { CalendarWelcome }