import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { getMovieWorkers } from "../../Axios/get-movie-workers";
import { getMovieWorkersAction } from "../Actions/index"; 
import { getMovieWorkersRequested, getMovieWorkersSucceeded }  from '../Actions/get-movie-workers-action';
import { union } from "ts-action";



const actionType = union(getMovieWorkersRequested);
function* getMovieWorkersSaga(action:typeof actionType.actions) {

    try {
        const payload = action.payload;

        const res : AxiosResponse= yield call(getMovieWorkers,payload.id);
       // console.log("saga workers",res.data.GetWorkersByShowResult)
        
        yield put(getMovieWorkersSucceeded(res.data.GetWorkersByShowResult));
    } catch (e) {
        //yield put(getMoviesFailed(e));
        console.log(e)
        //throw new Error("Page Not Found 404");
    } 
}

export function* watchGetMovieWorkersSaga() {
    yield takeLatest(getMovieWorkersAction.requested, getMovieWorkersSaga);
}
