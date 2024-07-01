import React from 'react'


import './Member.css'

function Member(props) {
    return(
        <div className="member">
            <img src={props.image} alt={props.imageAlt} />
            <p>{props.text}</p>
            <p className='member__descrip'>{props.descrip}</p>
        </div>
    )
}

export { Member }