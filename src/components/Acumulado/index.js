import React, { useState } from 'react'

import { Category } from '../Category/index'
import { TableAcumulado } from '../TableAcumulado/index'
import { CounterPages } from '../CounterPages/index'

import './Acumulado.css'


function Acumulado(props) {

    const [cate, setCate] = useState(
        {
            cat1: 'categoryActive',
            cat2: '',
            cat3: '',
            cat4: ''
        }
    )

    const handleClick = (option) => {
        if(option === 'uno') {
            setCate({
                    cat1: 'categoryActive',
                    cat2: '',
                    cat3: '',
                    cat4: ''
                })
        } else if(option === 'dos') {
            setCate({
                    cat1: '',
                    cat2: 'categoryActive',
                    cat3: '',
                    cat4: ''
                })
        } else if(option === 'tres') {
            setCate({
                    cat1: '',
                    cat2: '',
                    cat3: 'categoryActive',
                    cat4: ''
                })
        } else if(option === 'cuatro') {
            setCate({
                    cat1: '',
                    cat2: '',
                    cat3: '',
                    cat4: 'categoryActive'
                })
        }
    }

    return(
        <section className="acumulado background2">
            <h2>{props.title}</h2>
            <TableAcumulado>
                {props.children}
            </TableAcumulado>
        </section>
    )
}

export { Acumulado }