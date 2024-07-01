import React from 'react'


import { HeaderUp } from '../components/HerderUp/index'
import { Header } from '../components/Header/index'
import { Footer } from '../components/Footer/index'
import { InscribeteWelcome } from '../components/InscribeteWelcome/index'
import { Agendar } from '../components/Agendar/Index'


function Inscribete() {
    return(
        <div>
            <HeaderUp state9='navSelect' text='Inscribete' />
            <Header state9='navSelect' text='Inscribete' />
            <main>
                <InscribeteWelcome />
                <Agendar />
                <p className='inscribeteWelcome--final'>
                    ¡Te esperamos para que rodemos juntos!
                </p>
            </main>
            <Footer />
        </div>
    )
}

export { Inscribete }