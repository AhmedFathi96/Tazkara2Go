import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {  getMovieCinemaTimesAction } from "../Actions/index"; 
import { union } from "ts-action";
import { getMovieCinemaTimesRequested, getMovieCinemaTimesSucceeded } from "../Actions/get-movie-cinema-times-action";
import { getMovieCinemaTimes } from "../../Axios/get-movie-cinema-times";



const actionType = union(getMovieCinemaTimesRequested);
function* getMovieCinemaTimesSaga(action:typeof actionType.actions) {

    try {
        const payload = action.payload;
       // //console.log(payload)
        const res : AxiosResponse= yield call(getMovieCinemaTimes,payload.ip,payload.showName);
      //  //console.log("saga times",res.data)
        
        yield put(getMovieCinemaTimesSucceeded(res.data.GetShowTimesByShowNameResult));
    } catch (e) {
        //yield put(getMoviesFailed(e));
        //console.log(e)
        //throw new Error("Page Not Found 404");
    } 
}

export function* watchGetMovieCinemaTimesSaga() {
    yield takeLatest(getMovieCinemaTimesAction.requested, getMovieCinemaTimesSaga);
}
