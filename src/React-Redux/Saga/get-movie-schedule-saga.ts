import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {  getMovieScheduleAction } from "../Actions/index"; 
import { union } from "ts-action";
import { getMovieScheduleRequested,getMovieScheduleSucceeded } from "../Actions/get-movie-schedule";
import { getMovieCinemaTimes } from "../../Axios/get-movie-cinema-times";
import { getCinemas } from "../../Axios/get-cinemas";
import { ICinema } from "../../models";



const actionType = union(getMovieScheduleRequested);
function* getMovieScheduleSaga(action:typeof actionType.actions) {

    try {
        const payload = action.payload;
        // console.log("showName ==========================>",payload.showName)
        let data:any[] = [];
        const cinemas : AxiosResponse= yield call(getCinemas);

        for (const i in [1,2,3]) {
            if (cinemas.data.GetCinemasResult.hasOwnProperty(i)) {
                const res:AxiosResponse =  yield call(getMovieCinemaTimes,cinemas.data.GetCinemasResult[i].IpAdress,payload.showName);
                if(res.data.GetShowTimesByShowNameResult.length > 0){
                    //console.log("data 2 ==========================>",res.data.GetShowTimesByShowNameResult)
                    data.push({cinema: cinemas.data.GetCinemasResult[i], shows:res.data.GetShowTimesByShowNameResult})
                }
            }
        }

        //console.log("data 3 ==========================>",data)
        yield put(getMovieScheduleSucceeded(data));
    } catch (e) {
        console.log(e)
    } 
}

export function* watchGetMovieScheduleSaga() {
    yield takeLatest(getMovieScheduleAction.requested, getMovieScheduleSaga);
}
