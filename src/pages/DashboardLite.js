import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

function DashboardLite() {

    const initialState = { id: '', image: '', titulo: '', descripcion: '', contenido: '' }

    const [body, setBody] = useState(initialState)

    const navigate = useNavigate()

    const handleChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const onDelete = async (id) => {
        event.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:4000/api/eliminar-noticia', { id: id })
            console.log(data.message)
        } catch (error) {
            console.log(error)
        }
    }
    const onSend = async () => {
        event.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:4000/api/guardar-noticia', body)
            setBody(initialState)
            console.log(data.message)
        } catch (error) {
            console.log(error)
        }
    }
    const onEdit = async () => {
        event.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:4000/api/editar-noticia', body)
            setBody(initialState)
            console.log(data.message)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Hola desde Dashboard</h1>
            <button onClick={() => {
                localStorage.clear()
                navigate('/login')
            }}>Cerrar Sesión</button>
            <button onClick={() => { onDelete('4') }}>Eliminar noticia</button>
            <form action="">
                <input type="text" onChange={handleChange} name='image' value={body.image} placeholder='Tituloimagen' />
                <input type="text" onChange={handleChange} name='titulo' value={body.titulo} placeholder='Titulo' />
                <input type="text" onChange={handleChange} name='descripcion' value={body.descripcion} placeholder='descripción' />
                <input type="text" onChange={handleChange} name='contenido' value={body.contenido} placeholder='contenido' />
                <input type="number" onChange={handleChange} name='id' value={body.id} placeholder='id' />
                <button onClick={() => { onSend() }}>enviar</button>
                <button onClick={() => { onEdit() }}>Editar</button>
            </form>
        </div>
    )
}

export { DashboardLite }