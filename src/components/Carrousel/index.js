import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'

import { CarrouselItem } from '../CarrouselItem/index'

import Banner1 from '@images/images/1_BannerE.jpg'
import Banner2 from '@images/images/2_BannerE.jpeg'
import Banner3 from '@images/images/3_BannerE.jpeg'
import Banner4 from '@images/images/4_BannerE.jpg'
import Banner5 from '@images/images/5_BannerE.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import './Carrousel.css'

function Carrousel() {

    const [banners, setBanners] = useState([])

    const loadData = () => {
        axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3MTcwMTIxMDEsImV4cCI6MTcxOTYwNDEwMX0.8hJ7mL3xglRKwdhuqslSMjPvj0pymN2ZpaP_Cs2KjuU`
        axios.get('https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/carrouselbmx')
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
        <section className="carouselHome">
            <Carousel autoPlay infiniteLoop swipeable useKeyboardArrows showStatus={false} showThumbs={false}>
                {banners.map((banner, index) => (
                    <CarrouselItem key={index} title={banner.titulo} image={banner.img} imageAlt={banner.img} link={banner.link} />
                ))}
                    {/* <CarrouselItem title="Somos Tayrona BMX" image={Banner1} imageAlt="Nuestro partidor" />
                    <CarrouselItem title="Baby Tayrona Bmx" image={Banner2} imageAlt="Baby Tayrona Bmx" />
                    <CarrouselItem title="EL MAGDALENA SUMANDO PUNTOS EN EL CAMPEONATO NACIONAL" image={Banner3} imageAlt="Banner" />
                    <CarrouselItem title="Copa Tayrona Bmx, muy pronto nuestra segunda edición!" image={Banner4} imageAlt="Banner" />
                    <CarrouselItem title="Tayrona Colombia" image={Banner5} imageAlt="Tayrona Colombia" /> */}
            </Carousel>
        </section>
    )
}

export { Carrousel }