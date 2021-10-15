import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { getMovieCinemas } from "../../Axios/get-movie-cinemas";
import { getMovieCinemasAction } from "../Actions/index"; 
import { getMovieCinemasRequested, getMovieCinemasSucceeded }  from '../Actions/get-movie-cinemas-action';
import { union } from "ts-action";



const actionType = union(getMovieCinemasRequested);
function* getMovieCinemasSaga(action:typeof actionType.actions) {

    try {
        const payload = action.payload;
     //console.log(payload)
        const res : AxiosResponse= yield call(getMovieCinemas,payload.id);
       // console.log("saga cinemas",res.data.GetWorkersByShowResult)
        
        yield put(getMovieCinemasSucceeded(res.data.GetCinemasByShowResult));
    } catch (e) {
        //yield put(getMoviesFailed(e));
        console.log(e)
        //throw new Error("Page Not Found 404");
    } 
}

export function* watchGetMovieCinemasSaga() {
    yield takeLatest(getMovieCinemasAction.requested, getMovieCinemasSaga);
}
