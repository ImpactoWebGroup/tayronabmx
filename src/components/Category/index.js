import React from 'react'


import './Category.css'


function Category(props) {
    return(
        <button onClick={props.click} className={props.class + ' categoria'}>
            <p>{props.name}</p>
        </button>
    )
}

export { Category }