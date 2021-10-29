import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { union } from "ts-action";
import { dataAuth ,dataOrder,getData00 } from "../../Axios/commonPaymentApis";
import { finalDataCard, updateCinemaCard } from "../../Axios/payByCard";
import { finalDataCardAction} from "../Actions";
import { finalDataCardRequested,finalDataCardSucceeded } from "../Actions/payByCard-action";


const actionType = union(finalDataCardRequested);

function* cardPaymentSaga(action:typeof actionType.actions) {

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
            const finalDataCardRes:AxiosResponse=yield call(finalDataCard,token1,payload.amount,id,payload.email,payload.name.indexOf(" "),payload.phone,payload.name)
            const finalToken:string = finalDataCardRes.data.token;
            const updateCinemaCardRes:AxiosResponse=yield call(updateCinemaCard,payload.bookCode,payload.expire)
            yield put(finalDataCardSucceeded(finalToken))
        }
        
    
    } catch (e) {
    
        throw new Error("Page Not Found 404");
    } 
}

export function* watchCardPaymentSaga() {
    yield takeLatest(finalDataCardAction.requested, cardPaymentSaga);
}
