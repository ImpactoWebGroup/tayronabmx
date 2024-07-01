import React, { useState, useLayoutEffect } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';


import './Noticia.css'

function Noticia(props) {


    const [tamaño, setTamaño] = useState(
        {
            estado: 'noticiaNone',
            block: ''
        }
    )

    const handleClick = (option) => {
        if(option === 'big') {
            setTamaño({
                estado: '',
                block: 'noticia--fix'
            })
        } else if(option === 'small') {
            setTamaño({
                estado: 'noticiaNone',
                block: ''
            })
        }
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [tamaño.estado]);

    return(
        <div className={tamaño.block+" noticia"}>
            <img src={props.image} alt="" />
            <div className="noticia--content">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <Link to={`/noticias/${props.id}`}>Leer Más <FaArrowRight /></Link>
            </div>
            <div className={tamaño.estado + " noticia--fix"}>
                <div className="noticia--fix--content">
                    <span onClick={ () => { handleClick('small') } } ><FaArrowLeft /></span>
                    <img src={props.image} alt={props.imagAlt} />
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export { Noticia }