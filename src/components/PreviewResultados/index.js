import React from 'react'

import './PreviewResultados.css'

function PreviewResultados(props) {
    return(
        <div className='previewResultados'>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="previewResultados--content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export { PreviewResultados }