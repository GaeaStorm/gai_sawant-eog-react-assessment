import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Drone from "./Drone";
// import Marker from "google-maps-react";

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    render() {
        // console.log(<Drone/>);
        return (
            <Map
                google={this.props.google}
                zoom={5}
                style={mapStyles}
                initialCenter={{
                    lat: 29.2884,
                    lng: -94.8233
                }}
            >
                {/*<Marker name={'Drone'} position={{lat: 30, lng:-95}}/>*/}
                <Drone/>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCiqnqPDGq0oi9XNi1FUaNcCRmcMQLeNOw'
})(MapContainer);