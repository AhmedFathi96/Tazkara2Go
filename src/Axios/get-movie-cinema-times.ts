import axios from 'axios';
import * as Requests from './urls'
export const getMovieCinemaTimes=(ip:string,showName:string)=>
{
    return axios.get(Requests.getMovieCinemaTimesUrl(ip,showName));

}