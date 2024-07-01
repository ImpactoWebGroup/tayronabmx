import React from 'react'

import Pdf from '../../assets/pdf/NORMAS GENERALES CLUB TAYRONA  BMX.pdf'
import './Manual.css'

function Manual() {
    return(
        <div className='manual'>
            <a href = {Pdf} target = "_blank" >Leer Manual</a>
        </div>
    )
}

export { Manual }