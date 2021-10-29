import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { getCurrentDate } from "../../Axios/get-current-date";

import { getCurrentDateTimeAction } from "../Actions";
import {getCurrentDateTimeSucceeded} from "../Actions/get-current-date-time";
function* getCurrentDateTimeSaga() {

    try {
  
        const res : AxiosResponse= yield call(getCurrentDate);
        console.log(res)
        
        yield put(getCurrentDateTimeSucceeded(res.data.GetCurrentDateTimeResult));
    } catch (e) {
        throw new Error("Page Not Found 404");
    } 
}

export function* watchGetCurrentDateTimeSaga() {
    yield takeLatest(getCurrentDateTimeAction.requested, getCurrentDateTimeSaga);
}
