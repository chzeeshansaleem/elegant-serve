'use client';
import React from 'react'

const page = () => {
   return (
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <Marker position={[51.505, -0.09]}>
            <Popup>
               A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
         </Marker>
      </MapContainer>
   )
}

export default page;

// import React from 'react';
// import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// // Custom marker icon
// const markerIcon = new L.Icon({
//    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//    iconSize: [25, 41],
//    iconAnchor: [12, 41],
//    popupAnchor: [1, -34],
//    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
//    shadowSize: [41, 41]
// });

// // Light-themed map tiles
// const tileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

// const Map = () => {
//    const position = [47.3769, 8.5417]; // Example coordinates (Zurich, Switzerland)
//    const radius = 100; // Circle radius in meters

//    return (
//       <MapContainer
//          center={position}
//          zoom={15}
//          style={{ width: '100%', height: '100%', borderRadius: "5px" }}
//       >
//          <TileLayer
//             url={tileUrl}
//             attribution='&copy; <a href="https://carto.com/attributions">Carto</a> contributors'
//          />
//          <Marker position={position} icon={markerIcon} />
//          <Circle center={position} radius={radius} color="#4285F4" />
//       </MapContainer>
//    );
// };

// export default Map;
