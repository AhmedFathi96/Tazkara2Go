import axios from 'axios';
import * as Requests from './urls'

export const getCurrentDate = () =>{
    
    return axios.get(Requests.getCurrentDateTimeUrl);
}