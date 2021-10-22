import axios from 'axios';
import * as Requests from './urls'
export const unholdChair=(CinemaIpAdress:string,ShowTimeCod:string,hallId:string,ShowDate:string,ChairId:string,bookcode:string)=>{
   
    return axios.get(Requests.unholdChairUrl(CinemaIpAdress,ShowTimeCod,hallId,ShowDate,ChairId,bookcode));

}