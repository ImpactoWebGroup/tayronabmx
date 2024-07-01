import React from 'react'
import { useNavigate } from 'react-router'


import { NoticiasBoard } from '../components/NoticiasBoard/index'
import { CorrouselBoard } from '../components/CorrouselBoard/index'
import { VideoHomeBoard } from '../components/VideoHomeBoard/index'
import { VideoGranBoard } from '../components/VideoGranBoard/index'
import { VideoPequeBoard } from '../components/VideoPequeBoard/index'
import { TestimoniosBoard } from '../components/TestimoniosBoard/index'
import { TeamBoard } from '../components/TeamBoard/index'
import { PdfBoard } from '../components/PdfBoard/index'
import { CalendariosBoard } from '../components/CalendariosBoard/index'
import { CalendariosCBoard } from '../components/CalendariosCBoard/index'
import { CalendariosIntBoard } from '../components/CalendariosIntBoard/index'
import { PeriodicoBoard } from '../components/PeriodicoBoard/index'
import { CompañerismoBoard } from '../components/CompañerismoBoard/index'
import { CambioBoard } from '../components/CambioBoard/index'
import { AsistenciaBoard } from '../components/AsistenciaBoard/index'
import { EsfuerzoBoard } from '../components/EsfuerzoBoard/index'
import { ChallengeBoard } from '../components/ChallengeBoard/index'
import { ChampionshipBoard } from '../components/ChampionshipBoard/index'
import { ChallengePdfBoard } from '../components/ChallengePdfBoard/index'
import { ChampionshipPdfBoard } from '../components/ChampionshipPdfBoard/index'
import { VentaBoard } from '../components/VentaBoard/index'
import { EventosBoard } from '../components/EventosBoard/index'

import logo from '@images/images/LogoMapaXW.png'

function Dashboard() {

    const navigate = useNavigate()

    return(
        <div className='dashboard'>
            <main>
                <button className="cerrar" onClick={() => {
                    localStorage.clear()
                    navigate('/login')
                }}>Cerrar Sesión</button>

                <img src={logo} alt="Logo de MapaX" />

                <h1>Bienvenido a tu Dashboard</h1>

                <NoticiasBoard />
                <CorrouselBoard />
                <VentaBoard />
                <VideoHomeBoard />
                <VideoGranBoard />
                <VideoPequeBoard />
                <TestimoniosBoard />
                <TeamBoard />
                <ChallengeBoard />
                <ChallengePdfBoard />
                <ChampionshipBoard />
                <ChampionshipPdfBoard />
                <EventosBoard />
                <CalendariosBoard />
                <CalendariosCBoard />
                <CalendariosIntBoard />
                <PeriodicoBoard />
                <CompañerismoBoard />
                <AsistenciaBoard />
                <EsfuerzoBoard />
                <CambioBoard />
            </main>
        </div>
    )
}

export { Dashboard }