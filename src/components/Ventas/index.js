import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel';

import Venta_Bici1 from '@images/images/Venta_Bici1.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Ventas.css'

function Ventas() {

    const [bannerss, setBannerss] = useState([])

    const loadData = () => {
        axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3MTcwMTIxMDEsImV4cCI6MTcxOTYwNDEwMX0.8hJ7mL3xglRKwdhuqslSMjPvj0pymN2ZpaP_Cs2KjuU`
        axios.get('https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/ventasbmx')
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
        <section className="carousel ventas">
            <h2>Compra tu bici y accesorios para Bmx aquí:</h2>
            <Carousel autoPlay infiniteLoop swipeable useKeyboardArrows showStatus={false} showThumbs={false}>
                {bannerss.map((noticia, index) => (
                    <div key={index} className="carousel--image">
                        <img src={noticia.img} alt="Bici en venta" />
                        <a href={noticia.link}>
                            <h2 className='carousel--image'>{noticia.titulo}</h2>
                        </a>
                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export { Ventas }