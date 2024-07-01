import React, { useState, useEffect, useLayoutEffect  } from 'react'
import { BrowserRouter as Router, Routes, Route, useRoutes, Navigate, useLocation  } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa';

import '../pages/responsive/Laptop.css'
import '../pages/responsive/Tablet.css'
import '../pages/responsive/Mobile.css'
import './global.css'

import { Home } from '../pages/Home'
import { Nosotros } from '../pages/Nosotros'
import { Club } from '../pages/Club'
import { AcumuladoChallenge } from '../pages/AcomuladoChallenge'
import { AcumuladoChampionship } from '../pages/AcumuladoChampionship'
import { Eventos } from '../pages/Eventos'
import { Normas } from '../pages/Normas'
import { Calendarios } from '../pages/Calendarios'
import { Noticias } from '../pages/Noticias'
import { NoticiaView } from '../components/NoticiaView'
import { Periodico } from '../pages/Periodico'
import { Contacto } from '../pages/Contacto'
import { Inscribete } from '../pages/Inscribete'
import { Fundacion } from '../pages/Fundacion'

const App = () => {

    const location = useLocation();

    const [isAuth, setIsAuth] = useState(true)

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const controller = () => {
            if(!localStorage.getItem("auth")) {
                setIsAuth(false)
            } else {
                const auth = JSON.parse(localStorage.getItem('auth'))
                if(auth === 'yes') {
                    setIsAuth(true)
                } else {
                    setIsAuth(false)
                }
        }
    }
    useEffect(controller, [])


    const routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/nosotros", element: <Nosotros /> },
        { path: "/club", element: <Club /> },
        { path: "/acomulado-challenge", element: <AcumuladoChallenge /> },
        { path: "/acomulado-championship", element: <AcumuladoChampionship /> },
        { path: "/eventos", element: <Eventos /> },
        { path: "/normas", element: <Normas /> },
        { path: "/calendarios", element: <Calendarios /> },
        { path: "/noticias", element: <Noticias /> },
        { path: "/noticias/:id", element: <NoticiaView /> },
        { path: "/periodico", element: <Periodico /> },
        { path: "/contacto", element: <Contacto /> },
        { path: "/inscribete", element: <Inscribete /> },
        { path: "/fundacion", element: <Fundacion /> },
    ]);
    return routes;
}


const AppWrapper = () => {
    return (
        <Router>
            <a className='button--WhatsApp' href="https://api.whatsapp.com/send?phone=573008671485" target="_blank">
                <span><FaWhatsapp /></span>
            </a>
            <App />
        </Router>
    );
};


export { AppWrapper }