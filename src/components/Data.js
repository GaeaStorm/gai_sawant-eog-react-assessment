import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../store/actions";

class Data extends Component {

    componentDidMount() {
        this.props.onLoad();
        this.interval = setInterval(() => this.setState(this.props.onLoad()), 4000);
    }

    render() {
        const {
            metric,
            latitude,
            longitude
        } = this.props;
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            Temperature in F
                        </td>
                        <td>:</td>
                        <td>
                            {metric}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Latitude
                        </td>
                        <td>:
                        </td>
                        <td>
                            {latitude}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Longitude
                        </td>
                        <td>:
                        </td>
                        <td>
                            {longitude}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
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
)(Data);
