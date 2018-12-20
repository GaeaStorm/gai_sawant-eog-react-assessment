import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../store/actions";
import {Marker} from "react-google-maps";

// import Marker from "google-maps-react";

class Drone extends Component {

    componentDidMount() {
        this.props.onLoad();
        this.interval = setInterval(() => this.setState(this.props.onLoad()), 4000);
    }


    render() {
        console.log("Drone");
        const {
            latitude,
            longitude
        } = this.props;
        return (
            <Marker position={{lat: latitude, lng: longitude}}/>
        );
    }
}

const mapState = (state, ownProps) => {
    const {
        latitude,
        longitude
    } = state.drone;
    return {
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

export default connect(
    mapState,
    mapDispatch
)(Drone);
