import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './VideosFundacion.css'

function VideosFundacion() {

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
      <section id="noticias"  className="videos videosFundacion">
        <h2>Noticias</h2>
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
      </section>
    );
}

export { VideosFundacion }