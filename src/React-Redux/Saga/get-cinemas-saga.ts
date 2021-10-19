import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { getCinemas} from "../../Axios/get-cinemas";

import { getCinemasAction } from "../Actions";
import {getCinemasSucceeded } from "../Actions/cinema-action";
function* getCinemasSaga() {

    try {
  
        const res : AxiosResponse= yield call(getCinemas);
       // console.log("data =======================>",res.data.GetCinemasResult)
        
        yield put(getCinemasSucceeded(res.data.GetCinemasResult));
    } catch (e) {
        //yield put(getCinemasFailed(e));
        throw new Error("Page Not Found 404");
    } 
}

export function* watchGetCinemasSaga() {
    yield takeLatest(getCinemasAction.requested, getCinemasSaga);
}
