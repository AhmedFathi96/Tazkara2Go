import axios from 'axios';
import * as Requests from './urls'
export const getUserInfo=(userKey:string)=>{
   
    return axios.get(Requests.getUserInfoUrl(userKey));

}