import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {  holdChairAction } from "../Actions/index"; 
import { union } from "ts-action";
import { holdChairRequested, holdChairSucceeded} from "../Actions/hold-chair-action";
import { holdChair} from "../../Axios/hold-chair";



const actionType = union(holdChairRequested);
function* holdChairSaga(action:typeof actionType.actions) {

    try {
        const payload = action.payload;
       // //console.log(payload)
        const res : AxiosResponse= yield call(holdChair,payload.CinemaIpAdress,payload.ShowTimeCod,payload.hallId,payload.ShowDate,payload.ChairId,payload.ChairPrice,payload.bookcode,payload.holdWaitingMinutes,payload.ShowName,payload.timein);
      //  //console.log("saga times",res.data)
        
        yield put(holdChairSucceeded(res.data));
    } catch (e) {
        //yield put(getMoviesFailed(e));
        //console.log(e)
        //throw new Error("Page Not Found 404");
    } 
}

export function* watchHoldChairSaga() {
    yield takeLatest(holdChairAction.requested, holdChairSaga);
}
