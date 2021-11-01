import axios from 'axios';
import * as Requests from './urls';

const headers = {
    'Accept-Language': 'es-ES,es;q=0.8',
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json"
}
export const register=(UserName:string,UserEmail:string,UserPhone:string,UserPassword:string)=>{
   
    return axios.get(Requests.rgisterUrl(UserName,UserEmail,UserPhone,UserPassword), {headers});

}