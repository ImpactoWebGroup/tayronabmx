import React from 'react'


import { HeaderUp } from '../components/HerderUp/index'
import { Header } from '../components/Header/index'
import { Footer } from '../components/Footer/index'
import { Grupos } from '../components/Grupos/index'
import { Pista } from '../components/Pista/index'
import { Staff } from '../components/Staff/index'


function Club() {
    return(
        <div>
            <HeaderUp state10='navSelect' text='Club' />
            <Header state10='navSelect' text='Club' />
            <main>
                <Grupos />
                <Pista />
                <Staff />
            </main>
            <Footer />
        </div>
    )
}

export { Club }