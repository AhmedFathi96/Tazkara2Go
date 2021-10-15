import axios from 'axios';
import * as Requests from './urls'
export const getMovieCinemas=(id:string)=>
{
    return axios.get(Requests.getMovieCinemasUrl(id));

}