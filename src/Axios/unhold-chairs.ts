import axios from 'axios';
import * as Requests from './urls'
export const unholdChairs=(CinemaIpAdress:string,ShowTimeCod:string,hallId:string,ShowDate:string,bookcode:string)=>{
   
    return axios.get(Requests.UnHoldChairsUrl(CinemaIpAdress,ShowTimeCod,hallId,ShowDate,bookcode));

}