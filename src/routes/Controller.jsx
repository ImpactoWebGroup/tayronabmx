import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'

const Controller = props => {

    const { element: Element, isAuthenticated, ...rest } = props
    const NewElement = Element(props.element)

    const [isAuth, setIsAuth] = useState(true)

    const init = () => {
        if(!localStorage.getItem("auth")) {
            setIsAuth(false)
        } else {
            const auth = JSON.parse(localStorage.getItem('item'))
            if(auth === 'yes') {
                setIsAuth(true)
            } else {
                setIsAuth(false)
            }
        }
    }
    useEffect(init, [])

    return isAuth ? <NewElement {...rest} /> : <Navigate to='/login' />

}

export { Controller }