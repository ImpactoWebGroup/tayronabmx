import React from 'react'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'


import './Maps.css'

const Maps = () => {
    const defaultCenter = [11.188762, -74.196157]

    return (
        <MapContainer className='leaflet-container' center={defaultCenter} zoom={16} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={defaultCenter} >
                <Popup className='popup'>
                    Tayrona BMX
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export { Maps }