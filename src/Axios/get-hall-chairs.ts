import axios from 'axios';
import * as Requests from './urls'

export const getHallChairs = (CinemaIpAdress:string,ShowTimeCod:string,hallid:string) =>{
   
    return axios.get(Requests.getHallChairsUrl(CinemaIpAdress,ShowTimeCod,hallid)
    );
}