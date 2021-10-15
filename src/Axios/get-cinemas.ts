import axios from 'axios';
import * as Requests from './urls'

export const getCinemas = () =>{
    
    return axios.get(Requests.getCinemasUrl);
}