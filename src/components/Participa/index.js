import axios from 'axios'
import React, { useState, useEffect } from 'react'

import './Participa.css'

function Participa() {

    const [banners, setBanners] = useState([])

    const loadData = () => {
        axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3MTcwMTIxMDEsImV4cCI6MTcxOTYwNDEwMX0.8hJ7mL3xglRKwdhuqslSMjPvj0pymN2ZpaP_Cs2KjuU`
        axios.get('https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/video')
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
        <section className="participa">
            <h2>Divertirse es genial,  Pero hacerlo en bici es super genial!!!</h2>
            <p>Siguenos en nuestro canal de Youtube para visualizar el contenido</p>
            {banners.slice(0, 2).map((banner, index) => (
                    <iframe key={index} width="560" height="315" src={"https://www.youtube.com/embed/"+banner.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                ))}
        </section>
    )
}

export { Participa }