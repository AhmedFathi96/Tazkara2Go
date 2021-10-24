import axios from 'axios';
import * as Requests from './urls'

export const getBookCode = () =>{
    
    return axios.get(Requests.getBookCodeUrl);
}