import React from 'react'


import { HeaderUp } from '../components/HerderUp/index'
import { Header } from '../components/Header/index'
import { Footer } from '../components/Footer/index'
import { Contact } from '../components/Contact/index'


function Contacto() {
    return(
        <div>
            <HeaderUp state8='navSelect' text='Contacto' />
            <Header state8='navSelect' text='Contacto' />
            <main>
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export { Contacto }