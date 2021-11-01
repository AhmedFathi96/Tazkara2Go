import axios from 'axios';
import * as Requests from './urls';
const headers = {
    'Accept-Language': 'es-ES,es;q=0.8',
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json"
}
export const updateBooking=(bookCode:string,referenceKey:string)=>{
    return axios.get(Requests.updateBookingUrl(bookCode,referenceKey), {headers})
}
///////////////////////////////////////////
export const updateCinemaAman=(bookCode:string,expireTime:string)=>{
    return axios.get(Requests.updateCinemaAmanUrl(bookCode,expireTime), {headers})
}
//////////////////////////////////////////////////
export const finalDataAman = (finalToken: string) => {
    return axios.post(Requests.finalDataAmanUrl, JSON.stringify({
        "source": { "identifier": "AGGREGATOR", "subtype": "AGGREGATOR" },
        "payment_token": finalToken
    }), { headers: Requests.headers })
}