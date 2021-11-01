import axios from 'axios';
import * as Requests from './urls'

export const getCurrentDate = () =>{
    const headers = {
        'Accept-Language': 'es-ES,es;q=0.8',
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
    }
    return axios.get(Requests.getCurrentDateTimeUrl, {headers});
}