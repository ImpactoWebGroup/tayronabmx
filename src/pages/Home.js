import React from 'react'


import { HeaderUp } from '../components/HerderUp/index'
import { Header } from '../components/Header/index'
import { Footer } from '../components/Footer/index'
import { Carrousel } from '../components/Carrousel/index'
import { Noticias } from '../components/Noticias/index'
import { Participa } from '../components/Participa/index'
import { Testimonials } from '../components/Testimonials/index'


function Home() {
    return(
        <div>
            <HeaderUp state='navSelect' text='Home' />
            <Header state='navSelect' text='Home' />
            <main>
                <Carrousel />
                <Noticias />
                <Participa />
                <Testimonials />
            </main>
            <Footer />
        </div>
    )
}

export { Home }