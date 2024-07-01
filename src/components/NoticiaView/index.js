import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams  } from "react-router-dom";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';


import './NoticiaView.css'

function NoticiaView() {

    const params = useParams();
    const [banners, setBanners] = useState({});
    const { quill, quillRef } = useQuill({
        readOnly: true,
        modules: { toolbar: false },
    });

    const loadData = () => {
        axios
        .get(`https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/noticia/${params.id}`)
        .then(({ data }) => {
            setBanners(data);
        })
        .catch(({ response }) => {
            console.log(response.data);
        });
    };

    useEffect(() => {
        axios.defaults.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2Nzg0ODQ4NjksImV4cCI6MTY4MTA3Njg2OX0.lwrgZkIjwFdiMFmstveKeuf2yb3wQyPOBMxc6VB0XCA";
        axios.get(`https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/noticia/${params.id}`)
            .then(({ data }) => {
                setBanners(data);
                quill.setContents(JSON.parse(data.contenido));
            })
            .catch(({ response }) => {
                console.log(response.data)
        })
    }, [params.id, quill]);

    return(
        <div className={"noticia--fix"}>
            <div className="noticia--fix--content">
                <img className='noticia_imgView' src={banners.img} alt={banners.img} />
                <h2 className='noticia_tituloView'>{banners.titulo}</h2>
                <article ref={quillRef}></article>
            </div>
        </div>
    )
}

export { NoticiaView }