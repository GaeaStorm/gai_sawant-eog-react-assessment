import * as actions from "../actions";

console.log("Drone Reducer");

const initialState = {
    loading: false,
    metric: null,
    weather: {},
    latitude: null,
    longitude: null,
    map: [],
    data: []
};

const startLoading = (state, action) => {
    console.log("Drone loading");
    return {...state, loading: true};
};

const droneDataReceived = (state, action) => {
    console.log("Drone Data Received");
    console.log(action);
    const {data} = action;
    if (!data) return state;
    const weather = data["data"][0];
    const {metric, latitude, longitude} = weather;
    const map = [];
    for (const point in map) {
        map.concat({name: point.timestamp, value: point.metric});
    }
    // const map = data.forEach((point) => {return({name : point.timestamp, value : point.metric})});
    console.log("metric, latitude, longitude: " + metric + " " + latitude + " " + longitude);
    return {
        ...state,
        loading: false,
        metric,
        weather,
        latitude,
        longitude,
        map,
        data: action.data

    }
};

const handlers = {
    [actions.FETCH_DRONE]: startLoading,
    [actions.DRONE_DATA_RECEIVED]: droneDataReceived
};

export default (state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") return state;
    return handler(state, action);
};
