import axios from 'axios';
import * as Requests from './urls'
export const getMovieCinemaTimes=(ip:string,showName:string)=>{
    // const headers = {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Credentials':true

    // };
    return axios.get(Requests.getMovieCinemaTimesUrl(ip,showName));

}