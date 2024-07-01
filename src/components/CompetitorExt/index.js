import React from 'react'


import './CompetitorExt.css'


function CompetitorExt(props) {
    return(
        <div className="fixedCompeti">
            <div className="tableAcumulado--indice">
                <p>TOTAL</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
            </div>
            <div className="tableAcumulado--content">
                <p>{props.total}</p>
                <p>{props.uno}</p>
                <p>{props.dos}</p>
                <p>{props.tres}</p>
                <p>{props.cuatro}</p>
                <p>{props.cinco}</p>
                <p>{props.seis}</p>
                <p>{props.siete}</p>
                <p>{props.ocho}</p>
                <p>{props.nueve}</p>
                <p>{props.diez}</p>
            </div>
        </div>
    )
}

export { CompetitorExt }