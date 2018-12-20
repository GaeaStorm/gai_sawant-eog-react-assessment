import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../store/actions";
import {Marker, InfoWindow} from "react-google-maps";

class Drone extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onLoad();
        this.interval = setInterval(() => this.setState(this.props.onLoad()), 4000);
    }

    render() {
        console.log("Drone");
        const {
            metric,
            latitude,
            longitude
        } = this.props;
        console.log()
        return (
            <Marker position={{lat: latitude, lng: longitude}}/>
        );
    }
}

const mapState = (state, ownProps) => {
    const {
        metric,
        latitude,
        longitude
    } = state.drone;
    return {
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

export default connect(
    mapState,
    mapDispatch
)(Drone);
