import axios from 'axios';
import * as Requests from './urls'
export const unholdChair=(CinemaIpAdress:string,ShowTimeCod:string,hallId:string,ShowDate:string,ChairId:string,bookcode:string)=>{
    const headers = {
        'Accept-Language': 'es-ES,es;q=0.8',
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
    }
    return axios.get(Requests.unholdChairUrl(CinemaIpAdress,ShowTimeCod,hallId,ShowDate,ChairId,bookcode), {headers});

}