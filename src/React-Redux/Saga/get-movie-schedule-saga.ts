import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {  getMovieScheduleAction } from "../Actions/index"; 
import { union } from "ts-action";
import { getMovieScheduleRequested,getMovieScheduleSucceeded } from "../Actions/get-movie-schedule";
import { getMovieCinemaTimes } from "../../Axios/get-movie-cinema-times";
import { getCinemas } from "../../Axios/get-cinemas";

const actionType = union(getMovieScheduleRequested);
function* getMovieScheduleSaga(action:typeof actionType.actions) {

    try {
        const payload = action.payload;
        // //console.log("showName ==========================>",payload.showName)
        let data:any[] = [];
        const cinemas : AxiosResponse= yield call(getCinemas);
        const len = Array.from(Array(cinemas.data.length).keys())
        for (const i in len) {
            if (cinemas.data.GetCinemasResult.hasOwnProperty(i)) {
                const res:AxiosResponse =  yield call(getMovieCinemaTimes,cinemas.data.GetCinemasResult[i].IpAdress,payload.showName);
                if(res.data.GetShowTimesByShowNameResult.length > 0){
                    const show:any[] = res.data.GetShowTimesByShowNameResult.filter((sh:any)=> sh.isVip === "0");
                    const vipShow:any[] = res.data.GetShowTimesByShowNameResult.filter((sh:any)=> sh.isVip === "1");
                    data.push({cinema: cinemas.data.GetCinemasResult[i], shows:show.length>0?show:[] , vipShows:vipShow.length>0?vipShow:[] })
                }
            }
        }

        console.log("data ===================================>",data)
        yield put(getMovieScheduleSucceeded(data));
    } catch (e) {
        //console.log(e)
    } 
}

export function* watchGetMovieScheduleSaga() {
    yield takeLatest(getMovieScheduleAction.requested, getMovieScheduleSaga);
}
