import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from "react-multi-carousel";


import PandaImage from '@images/images/panda.jpeg'
import KarenImage from '@images/images/Karen.jpg'
import "react-multi-carousel/lib/styles.css";
import './Panda.css'

function Panda() {

  const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 3000, min: 464 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
        }
  }

  const [banners, setBanners] = useState([])

    const loadData = () => {
      axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2Nzg0ODQ4NjksImV4cCI6MTY4MTA3Njg2OX0.lwrgZkIjwFdiMFmstveKeuf2yb3wQyPOBMxc6VB0XCA`
      axios.get('https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/profesdata')
          .then(({ data }) => {
              setBanners(data)
              console.log(data)
          })
          .catch(({ response }) => {
              console.log(response.data)
          })
  }

  useEffect(loadData, [])

  return (
      <Carousel className="panda--container" responsive={responsive}>
        {banners.slice(0, 2).map((noticia, index) => (
          <div  key={index} className="panda">
            <img src={noticia.img} alt="" />
            <div className="panda--content">
              <h3>{noticia.nombre}</h3>
              <span> <p>{noticia.titulo}</p> </span>
              <p>
                {noticia.texto}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
  );
}

export { Panda }