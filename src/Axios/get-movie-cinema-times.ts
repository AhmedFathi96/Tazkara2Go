import axios from 'axios';
import * as Requests from './urls'
export const getMovieCinemaTimes=(ip:string,showName:string)=>{
    const headers = {
        'Accept-Language': 'es-ES,es;q=0.8',
        'Content-Type': 'application/x-www-form-urlencoded',
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
    return axios.get(Requests.getMovieCinemaTimesUrl(ip,showName), {headers});

}