import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../store/actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";

// import Marker from "google-maps-react";

class Drone extends Component {


    componentDidMount() {
        this.props.onLoad();
        this.interval = setInterval(() => this.setState(this.props), 4000);
        this.interval = setInterval(() => this.setState(this.props.onLoad()), 4000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        console.log("Drone");
        const {
            loading,
            latitude,
            longitude
        } = this.props;
        if (loading) return <LinearProgress/>;
        return (
            <Map
                google={this.props.google}
                zoom={5}
                style={{width: '675px', height: '363px'}}
                initialCenter={{lat: 29.2884, lng: -94.8233}}>
                <Marker name={'Drone'} position={{lat: latitude, lng: longitude}}/>
            </Map>
        );
    }
}

const mapState = (state, ownProps) => {
    const {
        loading,
        metric,
        latitude,
        longitude
    } = state.drone;
    return {
        loading,
        metric,
        latitude,
        longitude
    };
};

const mapDispatch = dispatch => ({
    onLoad: () =>
        dispatch({
            type: actions.FETCH_DRONE
        })
});

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCiqnqPDGq0oi9XNi1FUaNcCRmcMQLeNOw'
})(connect(
    mapState,
    mapDispatch
)(Drone));
