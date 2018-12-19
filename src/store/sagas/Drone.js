import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";

/*
  1. The weather service requires us to make a search by lat/lng to find its
  weather ID.
  2. We then use that weather ID to get the weather.

  This process is pretty well defined here with a saga.

  call invokes a method
  put dispatches an action
  takeEvery watches actions and executes a function

  Also -- the `*` in function is important; turns it into a "generator"

*/

function* watchDroneReceived(action) {

    console.log("Drone Saga");

    const {error, data} = yield call(API.drone);
    if (error) {
        console.log("Not here!");
        console.log({error});
        yield put({type: actions.API_ERROR, code: error.code});
        yield cancel();
        return;
    }
    const drone = data["data"][0] ? data["data"][0].metric : false;
    if (!drone) {
        console.log("Not here!");
        yield put({ type: actions.API_ERROR});
        yield cancel();
        return;
    }
    yield put({ type: actions.DRONE_DATA_RECEIVED, data});
}

function* watchDroneLoad() {

    console.log("Sagas export");

    yield all([
        takeEvery(actions.FETCH_DRONE, watchDroneReceived)
    ]);
}

export default [watchDroneLoad];
