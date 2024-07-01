import React from 'react'

import { Donacion } from '../components/Donacion/Index';
import { HeaderFundacion } from '../components/HeaderFundacion/index'
import { HeaderFundacionMobile } from '../components/HeaderFundacionMobile/index'
import { Footer } from '../components/Footer/index'
import { Noticias } from '../components/Noticias/index'
import { MisionYVisionFundacion } from '../components/MisionYVisionFundacion/index'
import { HistoriaFundacion } from '../components/HistoriaFundacion/index'
import { VideosFundacion } from '../components/VideosFundacion/index'

function Fundacion() {
    return(
        <section className='fundacion--conainter'>
            <HeaderFundacionMobile />
            <HeaderFundacion />
            <main>
                    <HistoriaFundacion />
                    <MisionYVisionFundacion />
                    <VideosFundacion />
                <div className='fundacion'>
                    <Donacion />
                </div>
            </main>
            <Footer />
        </section>
    )
}

export { Fundacion }