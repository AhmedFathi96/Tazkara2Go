import axios from 'axios';
import * as Requests from './urls';
export const updateBooking=(bookCode:string,referenceKey:string)=>{
    return axios.get(Requests.updateBookingUrl(bookCode,referenceKey))
}
///////////////////////////////////////////
export const updateCinemaAman=(bookCode:string,expireTime:string)=>{
    return axios.get(Requests.updateCinemaAmanUrl(bookCode,expireTime))
}
//////////////////////////////////////////////////
export const finalDataAman = (finalToken: string) => {
    return axios.post(Requests.finalDataAmanUrl, JSON.stringify({
        "source": { "identifier": "AGGREGATOR", "subtype": "AGGREGATOR" },
        "payment_token": finalToken
    }), { headers: Requests.headers })
}