import React from 'react'


import { HeaderUp } from '../components/HerderUp/index'
import { Header } from '../components/Header/index'
import { Footer } from '../components/Footer/index'
import { QuienesSomos } from '../components/QuienesSomos/index'
import { Grupos } from '../components/Grupos/index'
import { Pista } from '../components/Pista/index'
import { MisionYVision } from '../components/MisionYVision/index'
import { Values } from '../components/Values/index'
import { Staff } from '../components/Staff/index'


function Nosotros() {
    return(
        <div>
            <HeaderUp state1='navSelect' text='Nosotros' />
            <Header state1='navSelect' text='Nosotros' />
            <main>
                <QuienesSomos />
                <MisionYVision />
                <Values />
            </main>
            <Footer />
        </div>
    )
}

export { Nosotros }