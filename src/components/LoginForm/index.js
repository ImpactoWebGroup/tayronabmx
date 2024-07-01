import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

import Logo from '@images/images/LogoMapaX.png'
import './LoginForm.css'

const LoginForm = () => {

    const [body, setBody] = useState({nickname: '', password: ''})
    const navigate = useNavigate()

    const handleChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const onSubmit = () => {
        event.preventDefault();
        axios.post('http://localhost:4000/api/login', body)
            .then(({ data }) => {
                navigate('/dashboard')
                localStorage.setItem('auth', '"yes"')
                console.log(data)
            })
            .catch(({ response }) => {
                console.log(response.data)
            })
    }

    return (
        <section className='loginForm'>
            <div className="loginForm--container">
                <img src={Logo} alt="Logo de MapaX" />
                <h2>¡Ingresa a tu panel de control!</h2>
                <form action="">
                    <div className="campo">
                        <label>Tu Usuario</label>
                        <input
                            autoFocus
                            required
                            id="GET-name"
                            type="nickname"
                            name="nickname"
                            value={body.nickname}
                            onChange={handleChange}
                            placeholder='User'
                        ></input>
                    </div>
                    <div className="campo">
                        <label>Contraseña</label>
                        <input
                            required
                            id="GET-email"
                            type="password"
                            name="password"
                            value={body.password}
                            onChange={handleChange}
                            placeholder='contraseña'
                        ></input>
                    </div>
                    <button type='submit' onClick={() => {onSubmit()}}>Inicias Sesión</button>
                </form>

            </div>
        </section>
    )
}

export { LoginForm }