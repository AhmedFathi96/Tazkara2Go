import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { getUserInfoAction} from "../Actions/index"; 
import { getUserInfoSucceeded, getUserInfoRequested}  from '../Actions/get-user-info-action';
import { union } from "ts-action";
import { getUserInfo } from "../../Axios/getUserInfo";




const actionType = union(getUserInfoRequested);
function* getUserInfoSaga(action:typeof actionType.actions) {

    try {
      
        const payload = action.payload;
        
        const res : AxiosResponse= yield call(getUserInfo,payload.userKey);
        //console.log(res.data)
        yield put(getUserInfoSucceeded(res.data.GetUserInfoResult));
    } catch (e) {
        //yield put(getMoviesFailed(e));
        //console.log(e)
        throw new Error("Page Not Found 404");
    } 
}

export function* watchGetUserInfoSaga() {
    yield takeLatest(getUserInfoAction.requested, getUserInfoSaga);
}
