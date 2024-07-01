import React, { useState } from 'react'
import axios from 'axios'

import './AgendarForm.css'

function AgendarForm() {

    const initialState = { name: '', email: '', phone: 0, date: '', time: '', mensaje: '' }

    const [body, setBody] = useState(initialState)


    const onSend = async () => {
        event.preventDefault();
        if(body.name != '' && body.email != '' && body.mensaje != '') {
            try {
                const { data } = await axios.post('https://bmxtayronabackend-production.up.railway.app/api/recoveryReserve', body)
                setBody(initialState)
                alert('Se envió con éxito')
            } catch (error) {
                console.log(error)
                alert('Opps... ocurrió un error')
            }
        } else {
            alert('Todos los campos deben estar llenos')
        }
    }
    const onSendConfi = async () => {
        event.preventDefault();
        if(body.name != '' && body.email != '' && body.mensaje != '') {
            try {
                const { data } = await axios.post('https://bmxtayronabackend-production.up.railway.app/api/recoveryReserveConfirmation', body)
                setBody(initialState)
                alert('Se envió con éxito')
            } catch (error) {
                console.log(error)
                alert('Opps... ocurrió un error')
            }
        } else {
            alert('Todos los campos deben estar llenos')
        }
    }


    const handleChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    return(
        <div className="agendarForm" name='agendarPosition'>
                <h2>Agendar</h2>
                <form className='agendarForm--form' action="" method="get">
                    <label>Tu Nombre</label>
                    <input required type="text" onChange={handleChange} name='name' value={body.name} placeholder='Carlos Ortiz' />
                    <label>Tu Email</label>
                    <input required type="email" onChange={handleChange} name='email' value={body.email} placeholder='tucorreo@mail.com' />
                    <label>Teléfono</label>
                    <input required id="GET-phone" type="number" onChange={handleChange} name="phone" value={body.phone} placeholder='3508156328'></input>
                    <div className="agendarForm--agenda">
                        <div className='agendarForm--agenda__campos'>
                            <label>Fecha</label>
                            <input required id="GET-date" type="date" onChange={handleChange} name="date" value={body.date} ></input>
                        </div>
                        <div className='agendarForm--agenda__campos'>
                            <label>Hora</label>
                            <input required id="GET-hour" type="time" onChange={handleChange} name="time" value="16:00" min="16:00" max="17:00" step="3600"></input>
                        </div>
                    </div>
                    <label>Mensaje</label>
                    <textarea required type="text" onChange={handleChange} name='mensaje' value={body.mensaje} placeholder='Escribe tu mensaje...' />
                    <button onClick={ () => { onSend(), onSendConfi() } } type='submit'>Agendar</button>
                </form>
            </div>
    )
}

export { AgendarForm }