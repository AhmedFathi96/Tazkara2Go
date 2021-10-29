import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { union } from "ts-action";
import {  dataKey, dataAuth ,dataOrder,getData00 } from "../../Axios/commonPaymentApis";
import { finalDataAman, updateBooking, updateCinemaAman } from "../../Axios/payByAman";
import { finalDataAmanAction} from "../Actions";
import { finalDataAmanRequested, finalDataAmanSucceeded } from "../Actions/payByAman-action";


const actionType = union(finalDataAmanRequested);

function* amanPaymentSaga(action:typeof actionType.actions) {

    try {
        const payload = action.payload;
        console.log(payload)
        const data00: AxiosResponse=yield call(getData00,payload.bookCode,payload.name,payload.email,payload.phone,payload.cinemaId,payload.hallId,payload.chairId,payload.paymentType,payload.partyDate,payload.partyId,payload.partyTime,payload.showId,payload.expire)
       // const res : AxiosResponse= yield call(finalDataAman,payload.finalToken);
       if (data00.data.AddBookingDetailsResult == "success") {
          const data:AxiosResponse=yield call(dataAuth);
          const token0:string = data.data.token;
          
         const dataOrd:AxiosResponse=yield call(dataOrder,token0,payload.bookCode,payload.amount);
         const id:string= dataOrd.data.id;
        const token1 :string= dataOrd.data.token;
       // token1:string,amount:string,id:string,email:string,name:string,phone:string,startIndex:number
        const data1k:AxiosResponse=yield call(dataKey,token1,payload.amount,id,payload.email,payload.name,payload.phone,payload.name.indexOf(" "))
        const finalToken:string = data1k.data.token;
        
        const finalD:AxiosResponse=yield call(finalDataAman,finalToken);
        const referenceKey:any= finalD.data.id;
        const updateBookingRes:AxiosResponse=yield call(updateBooking,payload.bookCode,referenceKey);
       // const expireTime
        const updateCinemaAmanRes:AxiosResponse=yield call(updateCinemaAman,payload.bookCode,payload.expire)
        yield put(finalDataAmanSucceeded(finalD.data));

    }


        
    
    } catch (e) {
    
        throw new Error("Page Not Found 404");
    } 
}

export function* watchAmanPaymentSaga() {
    yield takeLatest(finalDataAmanAction.requested, amanPaymentSaga);
}
