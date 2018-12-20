import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../store/actions";
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

class Temperature extends Component {

    componentDidMount() {
        this.props.onLoad();
        this.interval = setInterval(() => this.setState(this.props.onLoad()), 4000);
    }

    render() {
        const {
            map
        } = this.props;
        return (
            <LineChart height={300} width={600} data={map}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis padding={{top: 20, bottom: 20}} name={"Time"} dataKey="name"/>
                <YAxis padding={{top: 20, bottom: 20}} name={"Temperature(F)"}
                       domain={['dataMin' - 1000, 'dataMax' + 1000]}/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="value" stroke="#8884d8"/>
            </LineChart>
        );
    }
}

const mapState = (state, ownProps) => {
    const {
        map
    } = state.drone;
    return {
        map
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
)(Temperature);
