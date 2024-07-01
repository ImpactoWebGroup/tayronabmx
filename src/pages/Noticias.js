import React, { useEffect, useState } from 'react'
import axios from 'axios'


import { HeaderUp } from '../components/HerderUp/index'
import { Header } from '../components/Header/index'
import { Footer } from '../components/Footer/index'
import { NoticiasSection } from '../components/NoticiasSection/index'
import { Ventas } from '../components/Ventas/index'
import { Videos } from '../components/Videos/index'
import { NewsPaper } from '../components/NewsPaper/index'
import { Congra } from '../components/Congra/index'

import images from '@images/images/periodico.jpg'

function Noticias() {

    const [bannerss, setBannerss] = useState([])

    const loadData = () => {
        axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2Nzg0ODQ4NjksImV4cCI6MTY4MTA3Njg2OX0.lwrgZkIjwFdiMFmstveKeuf2yb3wQyPOBMxc6VB0XCA`
        axios.get('https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/periodico')
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
            <HeaderUp state7='navSelect' text='Noticias' />
            <Header state7='navSelect' text='Noticias' />
            <main>
                <NoticiasSection />
                <Ventas />
                <Videos />
                {bannerss.map((banner, index) => (
                    <NewsPaper key={index} image={banner.pdf} imageAlt={banner.img} />
                ))}
                <Congra />
            </main>
            <Footer />
        </div>
    )
}

export { Noticias }