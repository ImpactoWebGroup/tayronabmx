import React, { useState } from 'react'
import axios from 'axios'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

import { Maps } from '../Maps/index'

import './Contact.css'

function Contact() {

    const initialState = { name: '', email: '', mensaje: '' }

    const [body, setBody] = useState(initialState)


    const onSend = async () => {
        event.preventDefault();
        if(body.name != '' && body.email != '' && body.mensaje != '') {
            try {
                const { data } = await axios.post('https://bmxtayronabackend-production.up.railway.app/api/recovery', body)
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
        <section className='contact'>
            <div className="contact--data">
                <h1>Contactanos</h1>
                <p>Estamos listos para ayudarte, puedes contactarnos en alguno de nuestros canales de atención</p>
                <form action="" method="get">
                    <label>Tu Nombre</label>
                    <input required type="text" onChange={handleChange} name='name' value={body.name} placeholder='Carlos Ortiz' />
                    <label>Tu Email</label>
                    <input required type="email" onChange={handleChange} name='email' value={body.email} placeholder='tucorreo@mail.com' />
                    <label>Mensaje</label>
                    <textarea required type="text" onChange={handleChange} name='mensaje' value={body.mensaje} placeholder='Escribe tu mensaje...' />
                    <button onClick={ () => { onSend() } } type='submit'>Enviar</button>
                </form>
            </div>
            <div className="contact--info">
                <Maps />
                <p>Pista Bmx Sector Bureche<br /> Santa Marta, Magdalena</p>
                <h2><strong>Comunícate con nosotros</strong></h2>
                <p><a href="tel:+573008671485">+57 300 8671485</a></p>
                <p><a href="mailto:tayrona@bmxsantamarta.com">tayrona@bmxsantamarta.com</a></p>
                <div className="contact--info__social">
                    <a href="https://www.instagram.com/clubtayronabmx/" target='__blank' ><span><FaInstagram /></span></a>
                    <a href="https://www.facebook.com/clubtayronabmx" target='__blank' ><span><FaFacebookF /></span></a>
                    <a href="https://api.whatsapp.com/send?phone=573008671485" target='__blank' ><span><FaWhatsapp /></span></a>
                </div>
            </div>
        </section>
    )
}

export { Contact }