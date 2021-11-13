import axios from "axios";
import React from "react";
import { Marker } from "react-map-gl";

const Pin = ({ data }: any) => {

    const apiKey = 'AIzaSyAKTcfNF9tmUO2IN4PD0mg1t0rDpQ_SkQ0';
    const apiURI = `https://maps.googleapis.com/maps/api/geocode/json?address=${data.STREET}&key=${apiKey}`;

    axios.get(apiURI)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });

    return (
        < div >
        {/* <Marker
            key={`marker-1`}
            longitude={111}
            latitude={111}
        >
        </Marker> */}
        </div >

    );
}

export default Pin;