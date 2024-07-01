import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaWindowClose } from 'react-icons/fa'


import Logo from '@images/images/Logo BMX.png'
import './Header.css'

function Header(props) {

    const [active, setActive] = useState(
        {
            menu: 'none'
        }
    )
    const handleClick = (option) => {
        if(option === 'on') {
            setActive({
                menu: 'flex'
            })
        } else if(option === 'off') {
            setActive({
                menu: 'none'
            })
        }
    }

//     var cadenaConcatenada = "sk8-438k4-xmxm392-sn2m2490000COPprod_integrity_Z5mMke9x0k8gpErbDqwrJXMqsI6SFli6"
//   //Ejemplo
//     const encondedText = new TextEncoder().encode(cadenaConcatenada);
//     const hashBuffer = await crypto.subtle.digest('SHA-256', encondedText);
//     const hashArray = Array.from(new Uint8Array(hashBuffer));
//     const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return(
        <header>
            <div className="header--menu">
                <div className="header--menu__logo">
                    <Link to='/'>
                        <img src={Logo} alt="Logo de BMX Tayrona" />
                    </Link>
                </div>
                <span onClick={() => {handleClick('on')}}><FaBars />
                    <p className='ubicacion'>{props.text}</p>
                </span>
            </div>
            <div className="header--menu__donar mobile">
                <button><Link to="/inscribete">Inscribete</Link></button>
            </div>
            <nav className={active.menu + " header--nav"}>
                <span onClick={() => {handleClick('off')}}><FaWindowClose /></span>
                <li className={props.state9 + ' nav--action'}>
                    <Link to='/fundacion'>
                    Fundación
                    </Link>
                </li>
                <li className={props.state}>
                    <Link to='/'>Inicio</Link>
                </li>
                <li className={props.state1}>
                    <Link to='/nosotros'>Nosotros</Link>
                </li>
                <li className={props.state10}>
                    <Link to='/club'>Club</Link>
                </li>
                <li className={props.state2}>
                    <Link to='/acomulado-challenge'>Challenge</Link>
                </li>
                <li className={props.state3}>
                    <Link to='/acomulado-championship'>Championship</Link>
                </li>
                <li className={props.state4}>
                    <Link to='/eventos'>Eventos</Link>
                </li>
                <li className={props.state5}>
                    <Link to='/normas'>Normas</Link>
                </li>
                <li className={props.state6}>
                    <Link to='/calendarios'>Calendarios</Link>
                </li>
                <li className={props.state7}>
                    <Link to='/noticias'>Noticias</Link>
                </li>
                <li className={props.state8}>
                    <Link to='/contacto'>Contacto</Link>
                </li>
            </nav>
        </header>
    )
}


export { Header }