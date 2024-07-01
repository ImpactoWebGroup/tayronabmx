import React, { useState, useEffect } from 'react'
import axios from 'axios'


import { Noticia } from '../Noticia/index'

import './Noticias.css'

function Noticias() {

    const [banners, setBanners] = useState([])

    const loadData = () => {
        axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3MTcwMTIxMDEsImV4cCI6MTcxOTYwNDEwMX0.8hJ7mL3xglRKwdhuqslSMjPvj0pymN2ZpaP_Cs2KjuU`
        axios.get('https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/noticia')
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
        <section className="noticias background">
            <h2>Noticias</h2>
            <div className="noticias--container">
                {banners.slice(-3).reverse().map((banner, index) => (
                    <Noticia
                        key={index}
                        image={banner.img}
                        date={banner.date}
                        title={banner.titulo}
                        text={banner.descripcion}
                        content={banner.contenido}
                        id={banner._id}
                    />
                ))}
            </div>
        </section>
    )
}

export { Noticias }