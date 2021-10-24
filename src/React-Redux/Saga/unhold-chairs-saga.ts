import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {  unholdChairsAction } from "../Actions/index"; 
import { union } from "ts-action";
import { unholdChairsRequested, unholdChairsSucceeded} from "../Actions/unhold-chairs-action";
import { unholdChairs} from "../../Axios/unhold-chairs";



const actionType = union(unholdChairsRequested);
function* unholdChairsSaga(action:typeof actionType.actions) {

    try {
        const payload = action.payload;
       // //console.log(payload)
        const res : AxiosResponse= yield call(unholdChairs,payload.CinemaIpAdress,payload.ShowTimeCod,payload.hallId,payload.ShowDate,payload.bookcode);
        yield put(unholdChairsSucceeded(res.data));
    } catch (e) {
        //yield put(getMoviesFailed(e));
        //console.log(e)
        //throw new Error("Page Not Found 404");
    } 
}

export function* watchUnHoldChairsSaga() {
    yield takeLatest(unholdChairsAction.requested, unholdChairsSaga);
}
