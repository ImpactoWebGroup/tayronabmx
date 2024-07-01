import React from 'react'
import { Link } from 'react-scroll'

import { Category } from '../Category/index'

import image from '@images/images/MIA2.jpeg'
import './InscribeteWelcome.css'

function InscribeteWelcome() {
    return (
      <section className="inscribeteWelcome">
        <div className="inscribeteWelcome--content">
          <h1>Agenda tu clase de cortesía</h1>
          <p>
            ¡Ven y aprende con nosotros!
          </p>
          <Link smooth={true} to="agendarPosition">
            <Category name="Sigue los pasos" />
          </Link>
        </div>
        <img src={image} alt="Image" />
      </section>
    );
}

export { InscribeteWelcome }