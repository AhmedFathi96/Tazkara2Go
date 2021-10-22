import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { getUnAvialableChairsSucceeded, getUnAvialableChairsRequested }  from '../Actions/get-unAvailable-chairs-action';
import { union } from "ts-action";
import { getUnAvialableChairs } from "../../Axios/get-unAvailable-chairs";
import { getUnAvialableChairsAction } from "../Actions/index";



const actionType = union(getUnAvialableChairsRequested);
function* getUnAvailableChairsSaga(action:typeof actionType.actions) {

    try {
       // console.log(action)
        const payload = action.payload;
     //console.log("payload",payload)
        const res : AxiosResponse= yield call(getUnAvialableChairs,payload.CinemaIpAdress,payload.hallId,payload.ShowDate,payload.ShowTimeCod,payload.ShowName);
      
        //CinemaIpAdress:string,hallId:string,ShowDate:string,ShowTimeCod:string,ShowName:string
        yield put(getUnAvialableChairsSucceeded(res.data));
    } catch (e) {
        //yield put(getMoviesFailed(e));
        console.log(e)
        //throw new Error("Page Not Found 404");
    } 
}

export function* watchGetUnAvailableChairsSaga() {
    yield takeLatest(getUnAvialableChairsAction.requested, getUnAvailableChairsSaga);
}
