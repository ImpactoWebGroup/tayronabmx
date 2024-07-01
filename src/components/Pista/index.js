import React, { useState } from 'react'
import { FaArrowRight, FaWindowClose } from 'react-icons/fa'


import ground from '@images/images/ground.png'
import './Pista.css'


function Pista() {

    const [tamaño, setTamaño] = useState(
        {
            estado: 'nonePista',
        }
    )

    const handleClick = (option) => {
        if(option === 'big') {
            setTamaño({
                estado: ''
            })
        } else if(option === 'small') {
            setTamaño({
                estado: 'nonePista'
            })
        }
    }

    return(
        <section className='pista'>
            <img src={ground} alt="Pista de BMX" />
            <div className="pista--content">
                <p>Conoce un poco más sobre nosotros. Pista de Bmx Bureche</p>
                <a onClick={() => {handleClick('big')}} > Ver <FaArrowRight /></a>
            </div>
            <div className={tamaño.estado + " newsPaper--big"}>
                <img src={ground} alt="Pista de BMX" />
                <span onClick={() => {handleClick('small')}}><FaWindowClose /></span>
            </div>
        </section>
    )
}

export { Pista }