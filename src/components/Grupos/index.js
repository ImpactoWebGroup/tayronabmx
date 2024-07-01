import React from 'react'
import Carousel from "react-multi-carousel";


import { Grupo } from '../Grupo/index'


import BabyTayrona from '@images/images/Baby_Tayrona.jpeg'
import competitivo from '@images/images/competitivo_nosotros.jpg'
import formativos from '@images/images/Formativos_nosotros.jpg'
import "react-multi-carousel/lib/styles.css";
import './Grupos.css'


function Grupos() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
            }
        };

    return(
        <section className='grupos'>
            <h2>SEMILLERO TAYRONA BMX SANTA MARTA</h2>
            <Carousel responsive={responsive}>
                <Grupo
                    title='BABY TAYRONA'
                    image={BabyTayrona}
                    imageAlt='Image'
                    text='Estructurado para niños de 2 a 5 años que aún no pedalean. Aquí desarrollan la coordinación, motricidad gruesa y la velocidad con los pies sin el uso de pedales, dando a el niño (a) la estabilidad y fuerza necesaria para ejecutar en la pista de Bmx'
                />
                <Grupo
                    title='SEMILLEROS 6 AÑOS +'
                    image={formativos}
                    imageAlt='Image'
                    text='Este nivel es para niños de 3 años en adelante que ya pedalean, donde sus habilidades serán afianzadas dentro de la pista con los conceptos técnicos del Bmx'
                />
                <Grupo
                    title='ALTO RENDIMIENTO'
                    image={competitivo}
                    imageAlt='Competidores del grupo Alto Rendimiento'
                    text='Dirigido a niños de 5 años en adelante que ven en el Bmx una pasión con visión a ser deportistas de alto nivel, con un entrenamiento más intenso y enfocado en objetivos y logros trazados.'
                />
            </Carousel>;
        </section>
    )
}

export { Grupos }