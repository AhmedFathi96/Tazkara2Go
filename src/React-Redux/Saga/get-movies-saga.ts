import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { getMovies} from "../../Axios/get-movies";

import { getMoviesAction } from "../Actions";
import {getMoviesSucceeded } from "../Actions/get-movies-action";
function* getMoviesSaga() {

    try {
  
        const res : AxiosResponse= yield call(getMovies);
        //console.log(res.data.GetShowsResult)
        
        yield put(getMoviesSucceeded(res.data.GetShowsResult));
    } catch (e) {
        //yield put(getMoviesFailed(e));
        throw new Error("Page Not Found 404");
    } 
}

export function* watchGetMoviesSaga() {
    yield takeLatest(getMoviesAction.requested, getMoviesSaga);
}
