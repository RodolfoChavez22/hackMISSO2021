import React, { useState } from "react";
import ReactMapGL from 'react-map-gl';
import { useSelector } from "react-redux";
import { Container } from '@material-ui/core';
import Pin from './Pin';

const Map = () => {
    const data: any = useSelector((state: any) => state.posts);

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100vh",
        latitude: 29.749907,
        longitude: -95.358421,
        zoom: 12
    });

    return (
        <Container>
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken="pk.eyJ1IjoibGVmdGF1dG9tYXRlZCIsImEiOiJja3Vhc3loemUwazM0MzNvOHM3bm15a2p3In0._GQv-oKLsITVnWW2GVjHZw"
                mapStyle="mapbox://styles/leftautomated/ckvxksj7o07ww15o5kpda8yv6"
                onViewportChange={(nextViewport: any) => setViewport(nextViewport)}>
            </ReactMapGL>
            {data.map((post: any) => (<Pin data={post} />))}
        </Container>
    );
}

export default Map;