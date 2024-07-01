import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'

import { CarrouselItem } from '../components/CarrouselItem/index'
import { HeaderUp } from '../components/HerderUp/index'
import { Header } from '../components/Header/index'
import { Footer } from '../components/Footer/index'
import { CalendarWelcome } from '../components/CalendarWelcome/index'
import { Calendario } from '../components/Calendario/index'
import { CalendarioCarrusel } from '../components/CalendarioCarrusel/index'

import Medellin from '@images/images/Calendario_Medellin.jpeg'
import UCI from '@images/images/Calendario UCI.jpeg'
import Nacionales from '@images/images/Calendario_Nacional.jpeg'

function Calendarios() {

    const [bannerss, setBannerss] = useState([])

    const loadData = () => {
        axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3MTcwMTIxMDEsImV4cCI6MTcxOTYwNDEwMX0.8hJ7mL3xglRKwdhuqslSMjPvj0pymN2ZpaP_Cs2KjuU`
        axios.get('https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/calendarios')
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
        <div>
            <HeaderUp state6='navSelect' text='Calendarios' />
            <Header state6='navSelect' text='Calendarios' />
            <main>
                <CalendarWelcome />
                {bannerss.map((noticia, index) => (
                    <Calendario
                        key={index}
                        title={noticia.titulo}
                        image={noticia.img}
                        imageAlt={noticia.img}
                    />
                ))}
            </main>
            <Footer />
        </div>
    )
}

export { Calendarios }