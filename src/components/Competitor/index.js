import React, { useState } from 'react'


import { CompetitorExt } from '../CompetitorExt/index'

import './Competitor.css'


function Competitor(props) {

    const [tamaño, setTamaño] = useState(
        {
            estado: 'compeNone'
        }
    )

    const handleClick = (option) => {
        if(option === 'big') {
            setTamaño({
                estado: ''
            })
        } else if(option === 'small') {
            setTamaño({
                estado: 'compeNone'
            })
        }
    }

    return(
        <div className={props.class + " competitor"}>
            <p onClick={ () => { handleClick('big') } }>{props.rank}</p>
            <p onClick={ () => { handleClick('big') } }>{props.plate}</p>
            <div onClick={ () => { handleClick('big') } } className='competitor--largo'>
                <p>{props.name}</p>
            </div>
            <div onClick={ () => { handleClick('big') } } className='competitor--largo'>
                <p>{props.group}</p>
            </div>
            <p onClick={ () => { handleClick('big') } }>{props.total}</p>
            <div className={tamaño.estado+" compe--fix"}>
                <button onClick={() => { handleClick('small') } }>Cerrar</button>
                <CompetitorExt
                    total={props.total}
                    uno={props.uno}
                    dos={props.dos}
                    tres={props.tres}
                    cuatro={props.cuatro}
                    cinco={props.cinco}
                    seis={props.seis}
                    siete={props.siete}
                    ocho={props.ocho}
                    nueve={props.nueve}
                    diez={props.diez}
                />
            </div>
        </div>
    )
}

export { Competitor }