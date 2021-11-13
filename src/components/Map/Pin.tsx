import React from "react";
import { Marker } from "react-map-gl";

const Pins = ({ data }: any) => {
    const points = data;

    return (
        <Marker
            key={`marker-1`}
            longitude={111}
            latitude={111}
        >
        </Marker>
    );
}

export default Pins;