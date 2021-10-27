import axios from 'axios';
import * as Requests from './urls'
export const login=(usermail:string,password:string)=>{
   
    return axios.get(Requests.loginUTR(usermail,password));

}