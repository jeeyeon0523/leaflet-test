import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

function MapHooks(){
    const map = useMap();
    // set map bounds
    const LeftTop = L.latLng(38.807100, 123.753453);
    const RightBottom = L.latLng(32.019165, 132.125035);
    const bounds = L.latLngBounds(LeftTop, RightBottom);
    map.setMaxBounds(bounds);
    return null;
}

function MapsSprint11(){

    // cinnamon네
    const [lat, setLat] = useState('37.576429');
    const [lng, setLng] = useState('126.904376');
    const [zoom, setZoom] = useState(13);
    const center = [37.56410648646213, 126.9851966669863];
    const position = [lat, lng];
    const LGE14 = [37.56311315285575, 126.83560094099408];


    // marker재등록
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    return(
        <MapContainer style={{height: '100vh'}} center={center} zoom={zoom} zoomControl={false} minZoom={7}>
            <MapHooks/>
            <TileLayer
                attribution='<a href="https://maps.google.com/maps"></a>'
                url='http://mt0.google.com/vt/lyrs=m&hl=kr&x={x}&y={y}&z={z}'
            />
            <ZoomControl position="bottomleft" />
            <Marker position={position} >
                <Popup><span>Cinnamon네 입니다. 놀러오세요~ </span></Popup>
            </Marker>
            <Marker position={LGE14}>
                <Popup><span>E14연구동</span></Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapsSprint11;