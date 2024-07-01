import React from 'react'

import { Steps } from '../Steps/index'
import { AgendarForm } from '../AgendarForm/index'

import './Agendar.css'

function Agendar() {
    return(
        <section className='agendar'>
                <Steps />
                <AgendarForm />
        </section>
    )
}

export { Agendar }