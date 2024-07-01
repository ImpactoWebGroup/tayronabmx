import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FiDownload } from 'react-icons/fi'
// import axios from 'axios'


import { HeaderUp } from '../components/HerderUp/index'
import { Header } from '../components/Header/index'
import { Footer } from '../components/Footer/index'
import { Ranking } from '../components/Ranking/index'
import { Acumulado } from '../components/Acumulado/index'
import { Competitor } from '../components/Competitor/index'

import challengerPdf from '../assets/pdf/Acumulado_challenger.pdf'
import challenger from '@images/images/Challenger_foto.jpg'

function AcumuladoChallenge() {

    const [bannerss, setBannerss] = useState([])
    const [banners, setBanners] = useState([])

    const loadData = () => {
        axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3MTcwMTIxMDEsImV4cCI6MTcxOTYwNDEwMX0.8hJ7mL3xglRKwdhuqslSMjPvj0pymN2ZpaP_Cs2KjuU`
        axios.get('https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/acumuladochallenge')
            .then(({ data }) => {
                setBannerss(data)
                console.log(data)
            })
            .catch(({ response }) => {
                console.log(response.data)
            })
        loadDatas()
    }
    const loadDatas = () => {
        axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2Nzg0ODQ4NjksImV4cCI6MTY4MTA3Njg2OX0.lwrgZkIjwFdiMFmstveKeuf2yb3wQyPOBMxc6VB0XCA`
        axios.get('https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/pdfs')
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
        <div>
            <HeaderUp state2='navSelect' text='Challenge' />
            <Header state2='navSelect' text='Challenge' />
            <main>
                <Ranking image={challenger} imageAlt='Image' />
                <Acumulado title='Acumulado Challenge' >
                    {bannerss.map((banner, index) => (
                        <Competitor
                            key={index}
                            class='competitorActive'
                            rank={banner.rank}
                            plate={banner.plate}
                            name={banner.nombre}
                            group={banner.categoria}
                            total={banner.total}
                            uno={banner.uno}
                            dos={banner.dos}
                            tres={banner.tres}
                            cuatro={banner.cuatro}
                            cinco={banner.cinco}
                            seis={banner.seis}
                            siete={banner.siete}
                            ocho={banner.ocho}
                            nueve={banner.nueve}
                            diez={banner.diez}
                        />
                    ))}
                    {/* <Competitor
                        class='competitorActive'
                        rank="11"
                        plate="121"
                        name="Sara Sofia Galeano Tobon"
                        group="Damas 8 y Menos"
                        total="625"
                        uno=""
                        dos=""
                        tres=""
                        cuatro=""
                        cinco=""
                        seis=""
                        siete=""
                        ocho=""
                        nueve=""
                        diez=""
                    />
                    <Competitor
                        class='competitorActive'
                        rank="17"
                        plate="1243"
                        name="Jonas Antonio Sandoval Granados"
                        group="Principiante 6 años y menos"
                        total="270"
                        uno=""
                        dos=""
                        tres=""
                        cuatro=""
                        cinco=""
                        seis=""
                        siete=""
                        ocho=""
                        nueve=""
                        diez=""
                    />
                    <Competitor
                        class='competitorActive'
                        rank="20"
                        plate="1495"
                        name="Fedor Agustin Marquez Freyle"
                        group="Principiante 6 años y menos"
                        total="216"
                        uno=""
                        dos=""
                        tres=""
                        cuatro=""
                        cinco=""
                        seis=""
                        siete=""
                        ocho=""
                        nueve=""
                        diez=""
                    />
                    <Competitor
                        class='competitorActive'
                        rank="21"
                        plate="1242"
                        name="Juan Jose Soto Gomez"
                        group="Principiantes 9 y 10 años"
                        total="447"
                        uno=""
                        dos=""
                        tres=""
                        cuatro=""
                        cinco=""
                        seis=""
                        siete=""
                        ocho=""
                        nueve=""
                        diez=""
                    />
                    <Competitor
                        class='competitorActive'
                        rank="23"
                        plate="501"
                        name="Andrés Felipe Giraldo Villa"
                        group="Experto 17 a 24 años"
                        total="596"
                        uno=""
                        dos=""
                        tres=""
                        cuatro=""
                        cinco=""
                        seis=""
                        siete=""
                        ocho=""
                        nueve=""
                        diez=""
                    />
                    <Competitor
                        class='competitorActive'
                        rank="36"
                        plate="1245"
                        name="Juan Fernando Beltran Sierra"
                        group="Principiante 7 y 8 años"
                        total="112"
                        uno=""
                        dos=""
                        tres=""
                        cuatro=""
                        cinco=""
                        seis=""
                        siete=""
                        ocho=""
                        nueve=""
                        diez=""
                    /> */}
                </Acumulado>
                <div className='buttonPdf'>
                    {banners.slice(0, 1).map((banner, index) => (
                        <div key={index} className="noticiasBoard--content__contanier">
                            <div className="noticiasBoard--content__noticia">
                                <a className='acumuladoPdf' href={banner.pdf} target='_blank'>Acumulado Challenge  <FiDownload /> </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export { AcumuladoChallenge }