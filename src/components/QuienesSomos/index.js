import React from 'react'


import portada from '@images/images/Portada_quienes_somos.jpg'
import './QuienesSomos.css'


function QuienesSomos() {
    return(
        <section className='quienesSomos'>
            <img src={portada} alt="Foto de competidores" />
            <div className="quienesSomos--content">
                <h1>¿Quiénes somos?</h1>
                <p>Somos TAYRONA BMX, club de bicicross centrado en la formación deportiva integra de niños y jóvenes, buscando ampliar el potencial deportivo respetando el proceso individual de cada deportista; aprovechamos su pasión por la bici para afianzar en ellos los conceptos técnicos que se necesitan para el bmx; nuestros valores como la disciplina, trabajo en equipo, la responsabilidad y orientación a los hábitos de una vida saludable hacen una parte importante de lo que establecemos en la familia Tayrona Bmx.</p>
            </div>
        </section>
    )
}

export { QuienesSomos }