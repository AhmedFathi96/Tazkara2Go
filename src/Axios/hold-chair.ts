import axios from 'axios';
import * as Requests from './urls'
export const holdChair=(CinemaIpAdress:string,ShowTimeCod:string,hallId:string,ShowDate:string,ChairId:string,ChairPrice:string,bookcode:string,holdWaitingMinutes:string,ShowName:string,timein:string)=>{
    return axios.get(Requests.holdChairUrl(CinemaIpAdress,ShowTimeCod,hallId,ShowDate,ChairId,ChairPrice,bookcode,holdWaitingMinutes,ShowName,timein));

}