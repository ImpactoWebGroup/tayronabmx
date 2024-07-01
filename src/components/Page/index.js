import React from 'react'


import './Page.css'


function Page(props) {
    return(
        <div className="page">
            <p>{props.number}</p>
        </div>
    )
}

export { Page }