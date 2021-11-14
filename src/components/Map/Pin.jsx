import React, { useState } from "react";
import axios from "axios";
import { Marker } from "react-map-gl";

const Pin = ({ data }) => {

    const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

    const SIZE = 20;

    const apiKey = 'AIzaSyAKTcfNF9tmUO2IN4PD0mg1t0rDpQ_SkQ0';
    const apiURI = `https://maps.googleapis.com/maps/api/geocode/json?address=${data.STREET}, ${data.CITY}, ${data.STATE}&key=${apiKey}`;

    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);


    const getCoordinates = async () => {
        const response = axios.get(apiURI)
        .catch((error) => {
            console.error(error);
        });

        if(response && response.data){
            const loc = response.data.results[0].geometry.location;
            setLat(loc.lat);
            setLng(loc.lng);
            console.log(lat);
        }

    }

    getCoordinates();

    return (
        <Marker
            key={data._id}
            longitude={lat}
            latitude={lng}
        >
            <div> 
                <font color="white">
                    {data.ESTAB_NAME.split(" ").map((n) => n[0]).join(".")} 
                </font> 
            </div>
            <svg
                height={SIZE}
                viewBox="0 0 24 24"
                style={{
                    cursor: "pointer",
                    fill: "rgba(200, 100, 100, 0.3)",
                    stroke: "none",
                    transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
                }}
                >
                <path d={ICON} />
            </svg>
            
        </Marker>
    );
}

export default Pin;