import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel';

import { Testimony } from '../Testimony/index'

import sara from '@images/images/sara_testimonio.jpg'
import valeria from '@images/images/valeria_testimonio.jpg'
import juanma from '@images/images/juanma_testimonio.jpg'
import jorge from '@images/images/jorge_testimonio.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Testimonials.css'

function Testimonials() {

    const [banners, setBanners] = useState([])

    const loadData = () => {
        axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3MTcwMTIxMDEsImV4cCI6MTcxOTYwNDEwMX0.8hJ7mL3xglRKwdhuqslSMjPvj0pymN2ZpaP_Cs2KjuU`
        axios.get('https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/testimoniosdata')
            .then(({ data }) => {
                setBanners(data)
                console.log(data)
            })
            .catch(({ response }) => {
                console.log(response.data)
            })
    }

    useEffect(loadData, [])

    return(
        <section className="testimonials">
            <Carousel swipeable showStatus={false} showIndicators={false} showThumbs={false}>
                {banners.map((noticia, index) => (
                    <Testimony
                        key={index}
                        image={noticia.img}
                        imageAlt={noticia.img}
                        name={noticia.nombre}
                        type={noticia.titulo}
                        text={noticia.texto}
                    />
                ))}
            </Carousel>
        </section>
    )
}

export { Testimonials }