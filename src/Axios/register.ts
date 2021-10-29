import axios from 'axios';
import * as Requests from './urls'
export const register=(UserName:string,UserEmail:string,UserPhone:string,UserPassword:string)=>{
   
    return axios.get(Requests.rgisterUrl(UserName,UserEmail,UserPhone,UserPassword));

}