import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

import politicas from '../../assets/pdf/Politicas de Privacidad.pdf'
import terminos from '../../assets/pdf/Terminos y condiciones.pdf'
import logo from '@images/images/Logo BMX.png'
import logoMpx from '@images/images/LogoMapaXs.png'
import logoFede from '@images/images/logo_federacion_ciclismo.png'
import logoUCI from '@images/images/logo_uci.png'
import './Footer.css'


function Footer() {

    const moonLanding = new Date()

    return(
        <footer>
            <img src={logo} alt="" />
            <div className="footer--links footer--enlaces">
                <a href='https://www.uci.org/news/bmx-racing/1aAFr0SVQQu4ARbI9VSI5E?page=1' target="_blank" >
                    <img src={logoUCI} alt="Logo y enlace la federación Colombiana de ciclismo" />
                </a>
                <a href='http://www.federacioncolombianadeciclismo.com/' target="_blank" >
                    <img src={logoFede} alt="Logo y enlace a la UCI" />
                </a>
            </div>
            <div className="footer--links">
                <Link to='/eventos'>Eventos</Link>
                <Link to='/inscribete'>Inscribete</Link>
                <Link to='/noticias'>Noticias</Link>
            </div>
            <div className="footer--terms">
                <a href={politicas} target="_blank" >Políticas de privacidad</a>
                <a href={terminos} target="_blank" >Términos y Condiciones</a>
            </div>
            <div className="footer--social">
                <a href="https://www.instagram.com/clubtayronabmx/" target='__blank' alt='Instagram' aria-label="Instagram" ><span><FaInstagram /></span></a>
                <a href="https://www.facebook.com/clubtayronabmx" target='__blank' alt='Facebook' aria-label="Facebook" ><span><FaFacebookF /></span></a>
                <a href="https://api.whatsapp.com/send?phone=573008671485" target='__blank' alt='WhatsApp' aria-label="WhatsApp" ><span><FaWhatsapp /></span></a>
            </div>
            <a className='mapax' href='https://tumapax.com/' target="_blank">Con 🧡 del team MapaX <img src={logoMpx} alt="Logo de MapaX SAS" /></a>
            <p>&copy; {moonLanding.getFullYear()} Tayrona BMX</p>
        </footer>
    )
}


export { Footer }