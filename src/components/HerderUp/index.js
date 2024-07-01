import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderUp.css'
import Logo from '@images/images/Logo BMX.png'


function HeaderUp (props) {
    return (
      <header className="headerUp">
        <div className="header--menu__donar">
          <button><Link to="/inscribete">Inscribete</Link></button>
        </div>
        <div className="header--menu__logo">
          <Link to="/">
            <img src={Logo} alt="Logo de BMX Tayrona" />
          </Link>
        </div>
        <nav>
          <ul>
            <li className={props.state}>
              <Link to="/">Inicio</Link>
            </li>
            <li className={props.state1}>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li className={props.state10}>
              <Link to="/club">Club</Link>
            </li>
            <li className={props.state1 + " sub"}>
              <a >Competencias</a>
              <ul>
                <li className={props.state4}>
                  <Link to="/eventos">Eventos</Link>
                </li>
                <li className={props.state6}>
                  <Link to="/calendarios">Calendarios</Link>
                </li>
                <li className={props.state2 + " sub2"}>
                  <a>Acumulado</a>
                  <ul>
                    <li className={props.state2}>
                      <Link to="/acomulado-challenge">Challenge</Link>
                    </li>
                    <li className={props.state3}>
                      <Link to="/acomulado-championship">Championship</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className={props.state5}>
              <Link to="/normas">Normas</Link>
            </li>
            <li className={props.state7}>
              <Link to="/noticias">Noticias</Link>
            </li>
            <li className={props.state8}>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li className={props.state9 + ' diferente'}>
              <Link to="/fundacion">Fundación</Link>
            </li>
          </ul>
        </nav>
      </header>
    );

}

export {HeaderUp}