import axios from 'axios';
import * as Requests from './urls'
export const unholdChairs=(CinemaIpAdress:string,ShowTimeCod:string,hallId:string,ShowDate:string,bookcode:string)=>{
    const headers = {
        'Accept-Language': 'es-ES,es;q=0.8',
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
    }
    return axios.get(Requests.UnHoldChairsUrl(CinemaIpAdress,ShowTimeCod,hallId,ShowDate,bookcode), {headers});

}