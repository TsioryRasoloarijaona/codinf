import React, { useEffect, useState } from 'react';

const Location = () => {
 const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
 });

 useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        setLocation({
          ...location,
          error: 'Geolocation is not supported by your browser.',
        });
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation({
            ...location,
            error: error.message,
          });
        }
      );
    };

    getLocation();
 }, []);

 const price = ()=>{
    fetch('https://codinftitans-backend-vmod4mzmzq-uc.a.run.app/distance/price',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(location)
    })
    .then(res=>res.text())
    .then(data=>{
        alert('prix de livraison:' + data)
    })
 }

 return (
    <div>
      <h2>Localisation</h2>
      <button onClick={price}>tarif livraison</button>
      {location.error ? (
        <div>Erreur : {location.error}</div>
      ) : (
        <div>
          Latitude : {location.latitude} <br />
          Longitude : {location.longitude}
        </div>
      )}
    </div>
 );
};

export default Location;
