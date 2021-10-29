import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { getSanfByStockCodeAction } from "../Actions/index"; 
import { getSanfByStockCodeRequested, getSanfByStockCodeSucceeded}  from '../Actions/get-sanf-by-stockcode-action';
import { getSanfbyStockcod } from "../../Axios/get-sanf-by-stockcode";
import { union } from "ts-action";



const actionType = union(getSanfByStockCodeRequested);
function* getSanfByStockcodeSaga(action:typeof actionType.actions) {

    try {

         const payload = action.payload;
        const res : AxiosResponse= yield call(getSanfbyStockcod,payload.ip,payload.stockcode);
    
        yield put(getSanfByStockCodeSucceeded(res.data.GetSanfByStockCodResult));
    } catch (e) {
    
        console.log(e)
    } 
}

export function* watchGetSanfByStockcodeSaga() {
    yield takeLatest(getSanfByStockCodeAction.requested, getSanfByStockcodeSaga);
}
