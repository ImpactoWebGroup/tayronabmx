import React, { useState, useEffect } from 'react'
import axios from 'axios'


import { HeaderUp } from '../components/HerderUp/index'
import { Header } from '../components/Header/index'
import { Footer } from '../components/Footer/index'
import { PreviewResultados } from '../components/PreviewResultados/index'
import { Resultado } from '../components/Resultado/index'
import { MemberResults } from '../components/MemberResults/index'

import Pdf from '../assets/pdf/Prueba.pdf'


function Eventos() {

    const [bannerss, setBannerss] = useState([])

    const loadData = () => {
        axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3MTcwMTIxMDEsImV4cCI6MTcxOTYwNDEwMX0.8hJ7mL3xglRKwdhuqslSMjPvj0pymN2ZpaP_Cs2KjuU`
        axios.get('https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/eventos')
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
            <HeaderUp state4='navSelect' text='Eventos' />
            <Header state4='navSelect' text='Eventos' />
            <main>
                <section id='resultados' className='resultados'>
                    {bannerss.map((noticia, index) => (
                        <PreviewResultados  key={index} video={noticia.linkvideo} title={noticia.titulo} description={noticia.descipcion} />
                    ))}
                </section>
            </main>
                <Footer />
        </div>
    )
}

export { Eventos }