import * as actions from "../actions";


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
    return {...state, loading: true};
};

const droneDataReceived = (state, action) => {
    const {data} = action;
    if (!data) return state;
    const weather = data["data"][0];
    const {metric, latitude, longitude} = weather;
    const map = data["data"].map((point) => {
        const date = Date(point.timestamp);
        return ({name: date.slice(date.indexOf(" ") ,date.lastIndexOf(":")), value: point.metric});
    });
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
