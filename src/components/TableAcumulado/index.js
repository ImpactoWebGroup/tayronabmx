import React from 'react'


import './TableAcumulado.css'


function TableAcumulado(props) {
    return(
        <div className="tableAcumulado">
            <div className="tableAcumulado--indice">
                <p>RANK</p>
                <p>PLATE</p>
                <div className='tableAcumulado--indice__largo'>
                    <p>NOMBRE</p>
                </div>
                <div className='tableAcumulado--indice__largo'>
                    <p>CATEGORÍA</p>
                </div>
                <p>TOTAL</p>
            </div>
            <div className="tableAcumulado--content">
                {props.children}
            </div>
        </div>
    )
}

export { TableAcumulado }