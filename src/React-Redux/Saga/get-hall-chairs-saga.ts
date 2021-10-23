import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { getHallChairs } from "../../Axios/get-hall-chairs";
import { getHallChairsAction } from "../Actions/index"; 
import { getHallChairsSucceeded, getHallChairsRequested }  from '../Actions/get-hall-chairs-action';
import { union } from "ts-action";
import { IChair } from "../../models";



const actionType = union(getHallChairsRequested);
function* getHallChairsSaga(action:typeof actionType.actions) {

    try {
       // console.log(action)
        const payload = action.payload;
     //console.log("payload",payload)
        const res : AxiosResponse= yield call(getHallChairs,payload.CinemaIpAdress,payload.ShowTimeCod,payload.hallid);
       // console.log("saga halls chairs",res.data.GetHallChairsResult)
        const re= res.data.GetHallChairsResult.map((c:IChair)=> c.selected = false)
        yield put(getHallChairsSucceeded(res.data.GetHallChairsResult));
    } catch (e) {
        //yield put(getMoviesFailed(e));
        console.log(e)
        //throw new Error("Page Not Found 404");
    } 
}

export function* watchGetHallChairsSaga() {
    yield takeLatest(getHallChairsAction.requested, getHallChairsSaga);
}
