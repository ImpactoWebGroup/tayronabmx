import React from 'react'
import { GiThreeFriends } from 'react-icons/gi';
import { BiTimer } from 'react-icons/bi';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { FaApple } from 'react-icons/fa';

import { Rule } from '../Rule/index'

import rule1 from '@images/images/Norma1.webp'
import rule2 from '@images/images/Norma2.jpg'
import rule3 from '@images/images/Norma3.webp'

import './Rules.css'

function Rules() {


    return(
        <section className="normas background2">
            <Rule
            class='norma--red redIcon '
            image={rule1}
            imageAlt='Image'
            title='Respeto'
            description='Asumir una actitud de respeto hacia el entrenador, compañeros y comunidad en general.'
            />
            <Rule
            class='norma--blue union'
            image={rule2}
            imageAlt='Image'
            title='Puntualidad'
            description='Asistir con puntualidad a los entrenamientos y eventos deportivos que sean convocados, debiendo estar preparados y uniformados antes de la hora de inicio del entrenamiento.'
            />
            <Rule
            class='norma--red redIcon union '
            image={rule3}
            imageAlt='Image'
            title='Vestimenta'
            description='El equipamiento básico obligatorio de un bicicrossita será: jersey Tayrona, pantalones largos, medias que cubran el tobillo, casco full face, coderas, rodilleras, guantes, pechera, protector cervical (opcional).'
            />
        </section>
    )
}

export { Rules }