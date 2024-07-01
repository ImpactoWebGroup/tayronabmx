import React from 'react'
import { BsUiChecks } from 'react-icons/bs'
import { GiJumpAcross } from 'react-icons/gi'
import { FaHandHoldingHeart } from 'react-icons/fa'


import { ValueImage } from '../ValueImage/index'

import responsabilidad from '@images/images/responsabilidad.jpg'
import trabajoEnEquipo from '@images/images/trabajo en equipo.jpg'
import honestidad from '@images/images/honestidad.jpg'
import './Values.css'

function Values() {

    const icon1 = <BsUiChecks />
    const icon2 = <GiJumpAcross />
    const icon3 = <FaHandHoldingHeart />

    return (
      <section className="valores background3">
        <h2>Valores</h2>
        <div className="valores--container">
          <ValueImage
            image={honestidad}
            imageAlt="image"
            name="Honestidad"
            text="La honestidad debe estar presente en todo aspecto de nuestra vida y en el Club Tayrona Bmx, nos permite desarrollar actividades de manera satisfactoria apoyando a nuestros deportistas en el manejo de sus emociones visionando siempre con claridad y transparencia."
          />
          <ValueImage
            image={responsabilidad}
            imageAlt="Competidores con responsabilidad"
            name="Responsabilidad"
            text="Para poder crecer, El Club Tayrona Bmx es responsable, en el cumplimiento y ejecución de nuestras funciones en los tiempos determinados, de este modo aplicamos este valor diariamente dentro y fuera de los entrenamientos."
          />
          <div className="valores--containerSd">
            <ValueImage
              image={trabajoEnEquipo}
              imageAlt="image"
              name="Trabajo en Equipo"
              text="Como seres sociales es indispensable cultivar el trabajo en equipo, en especial en el ámbito deportivo, el Club Tayrona Bmx potencializa en los deportistas este importante valor.  Juntos nos apoyamos en equipo y lo más importante preocuparse uno por el otro."
            />
          </div>
          {/* <ValueImage image={image} imageAlt='image' name='Compromiso' /> */}
        </div>
        {/* <div className="valores--containerSd">
                <ValueIcon image={icon1} name='Responsabilidad' />
                <ValueIcon image={icon2} name='Superación' />
                <ValueIcon image={icon3} name='Honestidad' />
            </div> */}
        {/* <div className="valores--container">
                <ValueImage image={image} imageAlt='image' name='Respeto' />
                <ValueImage image={image} imageAlt='image' name='Trabajo en Equipo' />
                <ValueImage image={image} imageAlt='image' name='Compromiso' />
                <ValueImage image={image} imageAlt='image' name='Disciplina' />
            </div>
            <div className="valores--containerSd">
                <ValueIcon image={icon1} name='Responsabilidad' />
                <ValueIcon image={icon2} name='Superación' />
                <ValueIcon image={icon3} name='Honestidad' />
            </div> */}
      </section>
    );
}

export { Values }