import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {  holdChairAction } from "../Actions/index"; 
import { union } from "ts-action";
import { unholdChairRequested, unholdChairSucceeded} from "../Actions/unhold-chair-action";
import { unholdChair} from "../../Axios/unhold-chair";



const actionType = union(unholdChairRequested);
function* unholdChairSaga(action:typeof actionType.actions) {

    try {
        const payload = action.payload;
       // console.log(payload)
        const res : AxiosResponse= yield call(unholdChair,payload.CinemaIpAdress,payload.ShowTimeCod,payload.hallId,payload.ShowDate,payload.ChairId,payload.bookcode);
       // CinemaIpAdress:string,ShowTimeCod:string,hallId:string,ShowDate:string,ChairId:string,bookcode:string
        
        yield put(unholdChairSucceeded(res.data));
    } catch (e) {
        //yield put(getMoviesFailed(e));
        console.log(e)
        //throw new Error("Page Not Found 404");
    } 
}

export function* watchUnHoldChairSaga() {
    yield takeLatest(holdChairAction.requested, unholdChairSaga);
}
