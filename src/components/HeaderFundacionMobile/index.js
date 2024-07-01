import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderFundacionMobile.css'
import Logo from '@images/images/Logo BMX.png'
import image from '@images/images/image0.jpeg'


function HeaderFundacionMobile () {
    return (
      <header className="headerFundacionMobile">
        <div className="header--menu__logo">
          <Link to="/">
            <img src={Logo} alt="Logo de BMX Tayrona" />
          </Link>
        </div>
        <nav>
          <ul className='nav--fundacion'>
            <li>
              <Link to="/contacto">Fundación</Link>
            </li>
            <li className={'diferente'}>
              <Link to="/inscribete">Inscribete</Link>
            </li>
          </ul>
        </nav>
        <div className="fundacion--image">
          <div className='opciones--fundacion'>
            <a className='orang' href="#historia">Historia</a>
            <a href="#mision">Misión y Visión</a>
            <a className='orang' href="#noticias">Noticias</a>
            <a href="#donar">Donaciones</a>
          </div>
          <h2> "Rodando hacia un futuro brilante"</h2>
          <div className='filtro'></div>
          <img src={image} alt="Competidores" />
        </div>
      </header>
    );

}

export {HeaderFundacionMobile}