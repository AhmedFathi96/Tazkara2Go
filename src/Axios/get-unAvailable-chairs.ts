import axios from 'axios';
import * as Requests from './urls'

export const getUnAvialableChairs = (CinemaIpAdress:string,hallId:string,ShowDate:string,ShowTimeCod:string,ShowName:string) =>{
    const headers = {
        'Accept-Language': 'es-ES,es;q=0.8',
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
    }
    return axios.get(Requests.getUnAvialableChairsUrl(CinemaIpAdress,hallId,ShowDate,ShowTimeCod,ShowName), {headers});
}