import React, {Component} from 'react';
import Drone from "./Drone";
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";
import Temperature from "./Data";

const MapReturn = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={6}
        defaultCenter={{lat: 29, lng: -95}}
    >
        <Drone/>
    </GoogleMap>
));

export class MapContainer extends Component {

    render() {

        return (
            <MapReturn
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCiqnqPDGq0oi9XNi1FUaNcCRmcMQLeNOw"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `100%`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            />
        )
    }
}

export default (MapContainer);