import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel';

import { CongraBox } from '../CongraBox/index'
import { CongraUser } from '../CongraUser/index'

import compañerismo from '@images/images/Buen_compañero.jpg'
import teLlevaraLejos from '@images/images/LlevaraLejos.jpg'
import JoseJaramillo from '@images/images/juanJulioGranPaso.jpg'
import JuanMahecha from '@images/images/JuanMahechaGranPaso.jpg'
import JuanJulio from '@images/images/joseJaramilloGranPaso.jpg'
import avatar from '@images/images/Avatar.jpg'
import constante from '@images/images/constante.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Congra.css'

function Congra(props) {

    const [bannerss, setBannerss] = useState([])

    const loadData = () => {
        axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3MTcwMTIxMDEsImV4cCI6MTcxOTYwNDEwMX0.8hJ7mL3xglRKwdhuqslSMjPvj0pymN2ZpaP_Cs2KjuU`
        axios.get('https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/felicidadesdata')
            .then(({ data }) => {
                setBannerss(data)
                console.log(data)
            })
            .catch(({ response }) => {
                console.log(response.data)
            })
    }

    useEffect(loadData, [])

    return(
        <section className="congra">
            <h2>¡Felicitaciones!</h2>
            <p>Reconocemos el esfuerzo, compañerismo y compromiso</p>
            <CongraBox title='Porque es un buen compañero' >
                {bannerss.slice(0, 1).map((banner, index) => (
                    <CongraUser
                        key={index}
                        image={banner.img}
                        imageAlt={banner.img}
                        name={banner.nombre}
                        option1="Plate"
                        value1={banner.plate}
                        option2=''
                        value2={banner.texto}
                    />
                ))}
            </CongraBox>
            <CongraBox title='Tu esfuerzo te llevará lejos' >
                {bannerss.slice(1, 2).map((banner, index) => (
                    <CongraUser
                        key={index}
                        image={banner.img}
                        imageAlt={banner.img}
                        name={banner.nombre}
                        option1="Plate"
                        value1={banner.plate}
                        option2=''
                        value2={banner.texto}
                    />
                ))}
            </CongraBox>
            <CongraBox title='La constancia es una clave del éxito' >
                {bannerss.slice(2, 3).map((banner, index) => (
                    <CongraUser
                        key={index}
                        image={banner.img}
                        imageAlt={banner.img}
                        name={banner.nombre}
                        option1="Plate"
                        value1={banner.plate}
                        option2=''
                        value2={banner.texto}
                    />
                ))}
            </CongraBox>
            <CongraBox title='Estas dando un paso importante' >
                <Carousel
                    width='200px'
                    autoPlay
                    infiniteLoop
                    swipeable
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                >
                    {bannerss.slice(3, 100).map((banner, index) => (
                        <CongraUser
                            key={index}
                            image={banner.img}
                            imageAlt={banner.img}
                            name={banner.nombre}
                            option1="Plate"
                            value1={banner.plate}
                            option2='Nueva Categoría'
                            value2={banner.nuevaCategoria}
                        />
                    ))}
                </Carousel>
            </CongraBox>

        </section>
    )
}

export { Congra }