import React, { useState } from 'react'

import { MemberResults } from '../MemberResults'
import { Category } from '../Category/index'
import { CounterPages } from '../CounterPages/index'

import './Resultado.css'

function Resultado(props) {

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
        <section className="resultado">
            <h2>{props.title}</h2>
            <div className="resultado--table">
                <div className="tableAcumulado--indice">
                    <p>RANK</p>
                    <p>PLATE</p>
                    <div className='tableAcumulado--indice__largo'>
                        <p>NOMBRE</p>
                    </div>
                    <div className='tableAcumulado--indice__largo'>
                        <p>GRUPO</p>
                    </div>
                    <p>TOTAL</p>
                    <p>M-PTS 1</p>
                    <p>M-PTS 2</p>
                    <p>M-PTS 3</p>
                </div>
                <div className="tableAcumulado--content">
                    {props.children}
                </div>
            </div>
            <div className='buttonPdf'>
                    <div className="noticiasBoard--content__contanier">
                        <div className="noticiasBoard--content__noticia">
                            <a className='acumuladoPdf' href={props.pdf} target='_blank'>{props.title}</a>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export { Resultado }