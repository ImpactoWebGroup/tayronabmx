import React from 'react'


import portada from '@images/images/Portada_quienes_somos.jpg'
import './HistoriaFundacion.css'


function HistoriaFundacion() {
    return(
        <section className='historiaFundacion' id="historia">
            <div className="historiaFundacion--content">
                <h1>HISTORIA</h1>
                <h2> <span>Fundación</span> Tayrona BMX: <span>Rodando hacia un futuro brillante</span></h2>
                <p>La Fundación Tayrona BMX, concebida en 2024 por Karen Tamaris y Luis Borrego, representa una luz de esperanza para la juventud colombiana al promover el BMX como un camino hacia el éxito y la realización personal. Ofrecemos programas innovadores que involucran a familias enteras en la práctica deportiva y estamos comprometidos a brindar apoyo a las comunidades en momentos difíciles mediante alianzas estratégicas, sembrando así las semillas de un futuro prometedor. Con herramientas pedagógicas y motivacionales, encendemos la pasión por el BMX en los corazones de los jóvenes, cultivando la determinación y el espíritu de superación. En la Fundación Tayrona BMX, estamos unidos en nuestra misión de impulsar el potencial de cada niño, niña y joven colombiano, navegando juntos hacia un futuro radiante de éxito y oportunidades.<span>¡Juntos, rodamos hacia un futuro brillante!</span></p>
            </div>
        </section>
    )
}

export { HistoriaFundacion }