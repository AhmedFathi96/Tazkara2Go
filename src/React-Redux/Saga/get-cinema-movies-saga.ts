import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { union } from "ts-action";
import { getCinemaMovies } from "../../Axios/get-cinema-movies";
import { getCinemaMoviesAction } from "../Actions";
import {getCinemaMoviesSucceeded,getCinemaMoviesRequested } from "../Actions/get-cinema-movies-action";

const actionType = union(getCinemaMoviesRequested);

function* getCinemaMoviesSaga(action:typeof actionType.actions) {

    try {
        const payload = action.payload;
        const res : AxiosResponse= yield call(getCinemaMovies,payload.id);
        ////console.log(res.data.GetShowsResult)
        
        yield put(getCinemaMoviesSucceeded(res.data.GetShowsByCinemaIdResult));
    } catch (e) {
        //yield put(getMoviesFailed(e));
        throw new Error("Page Not Found 404");
    } 
}

export function* watchGetCinemaMoviesSaga() {
    yield takeLatest(getCinemaMoviesAction.requested, getCinemaMoviesSaga);
}
