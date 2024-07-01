import React, { useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import './NoticiaBlock.css'

function NoticiaBlock(props) {

    return(
        <div className={"noticiaBlock"}>
            <img src={props.image} alt={props.imagAlt} />
            <div className="noticia--content">
                <span>{props.date}</span>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <Link to={`/noticias/${props.id}`}>Leer Más <FaArrowRight /></Link>
            </div>
        </div>
    )
}

export { NoticiaBlock }