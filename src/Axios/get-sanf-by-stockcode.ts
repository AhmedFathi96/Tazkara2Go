import axios from 'axios';
import * as Requests from './urls'

export const getSanfbyStockcod = (ip:string,stockcode:string) =>{
    return axios.get(Requests.getSanfByStockCodeUrl(ip,stockcode)
    );
}