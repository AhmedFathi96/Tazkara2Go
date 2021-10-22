import axios from 'axios';
import * as Requests from './urls'

export const getUnAvialableChairs = (CinemaIpAdress:string,hallId:string,ShowDate:string,ShowTimeCod:string,ShowName:string) =>{
    
    return axios.get(Requests.getUnAvialableChairsUrl(CinemaIpAdress,hallId,ShowDate,ShowTimeCod,ShowName));
}