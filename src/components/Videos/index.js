import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './Videos.css'

function Videos() {

  const [bannerss, setBannerss] = useState([])

  const loadData = () => {
      axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3MTcwMTIxMDEsImV4cCI6MTcxOTYwNDEwMX0.8hJ7mL3xglRKwdhuqslSMjPvj0pymN2ZpaP_Cs2KjuU`
      axios.get('https://dashboard-pruebas-git-master-josuemartinezgonzalez.vercel.app/video')
          .then(({ data }) => {
              setBannerss(data)
              console.log(data)
          })
          .catch(({ response }) => {
              console.log(response.data)
          })
  }

  useEffect(loadData, [])

    return (
      <section id="noticias"  className="videos">
        <h2>Videos</h2>
        <p>
          Competencias, experiencias y mucho entretenimiento encontraras en
          nuestro canal de YouTube
        </p>
        <div className="videos--content__part1">
          {bannerss.slice(2, 4).map((noticia, index) => (
            <iframe
              key={index}
              width="560"
              height="315"
              src={"https://www.youtube.com/embed/" + noticia.link}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          ))}
        </div>
        <div className="videos--content__part2">
          {bannerss.slice(4, 7).map((noticia, index) => (
            <iframe
              key={index}
              width="560"
              height="315"
              src={"https://www.youtube.com/embed/" + noticia.link}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          ))}
        </div>
      </section>
    );
}

export { Videos }