import React from 'react'

import './MemberResults.css'

function MemberResults(props) {
    return(
        <div className={props.class + " memberResults"}>
            <p>{props.rank}</p>
            <p>{props.plate}</p>
            <div className='competitor--largo'>
                <p>{props.name}</p>
            </div>
            <div className='competitor--largo'>
                <p>{props.group}</p>
            </div>
            <p>{props.total}</p>
            <p>{props.mpt1}</p>
            <p>{props.mpt2}</p>
            <p>{props.mpt3}</p>
        </div>
    )
}

export { MemberResults }