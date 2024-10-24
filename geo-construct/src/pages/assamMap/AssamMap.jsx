import React,{ useEffect, useState } from "react";
import "./styles.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { Icon } from 'leaflet';

const AssamMap = () => {

/*
  const [places, setPlaces] = useState([]);

  useEffect(()=>{
    // fetching the coordinates from the database api
    fetch('http://localhost:8081/districts')
    .then(response => response.json())
    .then(data => setPlaces(data))
    .catch(err => console.log(err));
  }, []) */

  // markers
  const markers = [
    {
      geocode: [27.4705, 94.9125],
      popUp: "This is Dibrugarh",
    },
    {
      geocode: [26.7509, 94.2037],
      popUp: "This is Jorhat",
    },
    {
      geocode: [26.1158, 91.7086],
      popUp: "This is Guwahati",
    },
  ];

  const customIcon = new Icon({
    iconUrl: '../../../pin.png', //Files in the public directory are served at the root path. Instead of /public/pin.png, use /pin.png.
    iconSize: [35, 35], // Size of the icon
        iconAnchor: [15, 36], // Point of the icon which will correspond to marker's location
        popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});

  return (
    <>
      <div>
        <MapContainer center={[26.2006, 92.9376]} zoom={7}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* {places.map((marker) => (
            <Marker position={[marker.latitude, marker.longitude]} icon={customIcon}>
              <Popup>{marker.name}</Popup>
            </Marker> 
          ))}  */}

          {markers.map((marker) => (
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker> 
          ))} 

        </MapContainer>
      </div>
    </>
  );
};

export default AssamMap;
