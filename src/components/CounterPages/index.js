import React from 'react'

import { Page } from '../Page/index'

import './CounterPages.css'


function CounterPages() {
    return(
        <div className="counterPages">
            <span>{'<'}</span>
            <Page number='1' />
            <Page number='2' />
            <Page number='3' />
            <span>...</span>
            <Page number='9' />
            <span>{'>'}</span>
        </div>
    )
}

export { CounterPages }