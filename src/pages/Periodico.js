import React from 'react'
import { Link } from 'react-router-dom'
import { FaWindowClose } from 'react-icons/fa'


import images from '@images/images/periodico.jpg'

function Periodico() {
    return(
        <div>
            <section className="newsPaper background3">
            <div className={"newsPaper--big"}>
                <img src={images} alt="Periodico" />
                <Link to='/noticias'>
                    <span><FaWindowClose /></span>
                </Link>
            </div>
            <div className='line'></div>
        </section>
        </div>
    )
}

export { Periodico }