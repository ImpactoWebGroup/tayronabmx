import React, { useState, useEffect } from 'react'
import axios from 'axios'

 // vairable
import { NoticiaBlock } from '../NoticiaBlock/index'
import { Category } from '../Category/index'

import './NoticiasSection.css'

function NoticiasSection() {
    const [number, setNumber] = useState(1);
    const [banners, setBanners] = useState([]);

    const loadData = () => {
        axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3MTcwMTIxMDEsImV4cCI6MTcxOTYwNDEwMX0.8hJ7mL3xglRKwdhuqslSMjPvj0pymN2ZpaP_Cs2KjuU`;
        axios
        .get("https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/noticia")
        .then(({ data }) => {
            setBanners(data);
            console.log(data);
        })
        .catch(({ response }) => {
            console.log(response.data);
        });
    };

    const handleClick = () => {
        setNumber((prevNumber) => prevNumber + 1);
    };

    useEffect(() => {
        loadData();
    }, []);

    const visibleBanners = banners.slice(-number * 3).reverse();

    return (
        <section className="noticiasSection">
        <h2>Noticias</h2>
        <div className="noticias--container">
            {visibleBanners.map((banner, index) => (
            <NoticiaBlock
                key={index}
                image={banner.img}
                date={banner.date}
                title={banner.titulo}
                text={banner.descripcion}
                content={banner.contenido}
                id={banner._id}
            />
            ))}
        </div>
        {visibleBanners.length < banners.length && (
            <Category click={handleClick} name="Más" />
        )}
        </section>
    );
}

export { NoticiasSection }