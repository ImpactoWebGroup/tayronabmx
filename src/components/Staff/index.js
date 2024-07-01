import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from "react-multi-carousel";

import { Member } from '../Member/index'
import { Panda } from '../Panda/index'

import Karen from '@images/images/IMG_0426.jpg'
import carlos from '@images/images/Carlos Borrego.jpg'
import Anthony from '@images/images/bmx100.jpg'
import "react-multi-carousel/lib/styles.css";
import './Staff.css'

function Staff() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
            }
    }

    const [banners, setBanners] = useState([])

    const loadData = () => {
        axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3MTcwMTIxMDEsImV4cCI6MTcxOTYwNDEwMX0.8hJ7mL3xglRKwdhuqslSMjPvj0pymN2ZpaP_Cs2KjuU`
        axios.get('https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/profesdata')
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
        <section className="staff">
            <h2>NUESTRO EQUIPO</h2>
            <Panda />
            <Carousel responsive={responsive}>
                {banners.slice(2, banners.length+1).map((noticia, index) => (
                    <div key={index}>
                        <Member
                            image={noticia.img}
                            imageAlt={noticia.img}
                            text={noticia.nombre}
                            descrip={noticia.texto}
                        />
                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export { Staff }