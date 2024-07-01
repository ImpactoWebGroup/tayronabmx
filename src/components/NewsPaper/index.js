import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaWindowClose } from 'react-icons/fa'

import './NewsPaper.css'

function NewsPaper(props) {

    const [tamaño, setTamaño] = useState(
        {
            estado: 'none',
        }
    )

    const handleClick = (option) => {
        if(option === 'big') {
            setTamaño({
                estado: ''
            })
        } else if(option === 'small') {
            setTamaño({
                estado: 'none'
            })
        }
    }

    return(
        <section className="newsPaper background3">
            <div className="newsPaper--content">
                <img onClick={() => {handleClick('big')}} src={props.image} alt={props.imageAlt} />
                <Link to='/periodico'>
                    <button>Leer Periódico</button>
                </Link>
            </div>
            <div className={tamaño.estado + " newsPaper--big"}>
                <img src={props.image} alt={props.imageAlt} />
                <span onClick={() => {handleClick('small')}}><FaWindowClose /></span>
            </div>
            <div className='line'></div>
        </section>
    )
}

export { NewsPaper }