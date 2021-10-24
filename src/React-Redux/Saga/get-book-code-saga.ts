import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { getBookCode } from "../../Axios/get-book-code";
import { getBookCodeAction } from "../Actions/index"; 
import { getBookCodeSucceeded }  from '../Actions/get-book-code-action';




function* getBookCodeSaga() {

    try {

     ////console.log("payload",payload)
        const res : AxiosResponse= yield call(getBookCode);
    
        yield put(getBookCodeSucceeded(res.data.NewBookCodeResult));
    } catch (e) {
    
        console.log(e)
    } 
}

export function* watchGetBookCodeSaga() {
    yield takeLatest(getBookCodeAction.requested, getBookCodeSaga);
}
