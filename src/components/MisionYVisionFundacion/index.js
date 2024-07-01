import React from 'react'


import vision from '@images/images/image1.jpeg'
import mision from '@images/images/image2.jpeg'
import './MisionYVisionFundacion.css'


function MisionYVisionFundacion() {
    return(
        <section className='misionYVision' id="mision">
            <div className="misionYVision--content mision">
                <img src={vision} alt="image" />
                <div className="misionYVision--content__text">
                    <h2>Misión</h2>
                    <p>En el Club Tayrona Bmx nos enfocamos en la formación de deportistas íntegros dentro de la disciplina del Bmx, así como también apoyamos al desarrollo de las habilidades competitivas de los bicicrossitas por medio de eventos locales y participaciones nacionales esto con el fin de llevar el deporte a todas las áreas sociales de nuestro departamento, por un Bmx para todos.</p>
                </div>
            </div>
            <div className="misionYVision--content vision">
                <div className="misionYVision--content__text">
                    <h2>Visión</h2>
                    <p>El Club Tayrona Bmx se proyecta en ser el mejor club deportivo con reconocimiento local, nacional y mundial, confiando en la preparación de sus deportistas, los cuales estarán listo para ir por sus triunfos con todo el conocimiento técnico y emocional adquiridos dentro de la formación que impartimos; este empeño nos llevara a ser un modelo a seguir en la vinculación de deportistas del Magdalena a las competencias oficiales de la UCI (Unión Ciclística Internacional), y el Ciclo Olímpico.</p>
                </div>
                <img src={mision} alt="Entrenador Panda con el campeón Santiago" />
            </div>
        </section>
    )
}

export { MisionYVisionFundacion }