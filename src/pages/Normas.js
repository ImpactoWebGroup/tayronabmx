import React from 'react'


import { HeaderUp } from '../components/HerderUp/index'
import { Header } from '../components/Header/index'
import { Footer } from '../components/Footer/index'
import { NormasWelcome } from '../components/NormasWelcome/index'
import { Rules } from '../components/Rules/index'
import { Manual } from '../components/Manual/index'


function Normas() {
    return(
        <div>
            <HeaderUp state5='navSelect' text='Normas' />
            <Header state5='navSelect' text='Normas' />
            <main>
                <NormasWelcome />
                <Rules />
                <Manual />
            </main>
            <Footer />
        </div>
    )
}

export { Normas }