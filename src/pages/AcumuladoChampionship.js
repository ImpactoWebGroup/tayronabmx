import React, { useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import axios from 'axios'


import { HeaderUp } from '../components/HerderUp/index'
import { Header } from '../components/Header/index'
import { Footer } from '../components/Footer/index'
import { Ranking } from '../components/Ranking/index'
import { Acumulado } from '../components/Acumulado/index'
import { Competitor } from '../components/Competitor/index'

import championshipPdf from '../assets/pdf/Acumulado_championship.pdf'
import championship from '@images/images/Championship_foto.jpg'

function AcumuladoChampionship() {

    const [bannerss, setBannerss] = useState([])
    const [banners, setBanners] = useState([])

    const loadData = () => {
        axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3MTcwMTIxMDEsImV4cCI6MTcxOTYwNDEwMX0.8hJ7mL3xglRKwdhuqslSMjPvj0pymN2ZpaP_Cs2KjuU`
        axios.get('https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/acumuladochampship')
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
            <HeaderUp state3='navSelect' text='Championship' />
            <Header state3='navSelect' text='Championship' />
            <main>
                <Ranking image={championship} imageAlt='Image' />
                    <Acumulado title='Acumulado Championship' >
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
                        rank="1"
                        plate="123"
                        name="Carlos Ortiz"
                        group="Juvenil"
                        total="100"
                        uno="10"
                        dos="10"
                        tres="10"
                        cuatro="10"
                        cinco="10"
                        seis="10"
                        siete="10"
                        ocho="10"
                        nueve="10"
                        diez="10"
                    />
                    <Competitor
                        class='competitorActive'
                        rank="2"
                        plate="321"
                        name="Anthony Ortiz"
                        group="Juvenil"
                        total="90"
                        uno="5"
                        dos="5"
                        tres="10"
                        cuatro="10"
                        cinco="10"
                        seis="10"
                        siete="10"
                        ocho="10"
                        nueve="10"
                        diez="10"
                    />
                    <Competitor
                        class='competitorActive'
                        rank="3"
                        plate="231"
                        name="Josué Ortiz"
                        group="Juvenil"
                        total="80"
                        uno="5"
                        dos="5"
                        tres="5"
                        cuatro="5"
                        cinco="10"
                        seis="10"
                        siete="10"
                        ocho="10"
                        nueve="10"
                        diez="10"
                    /> */}
                </Acumulado>
                <div className='buttonPdf'>
                    {banners.slice(1, 2).map((banner, index) => (
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

export { AcumuladoChampionship }