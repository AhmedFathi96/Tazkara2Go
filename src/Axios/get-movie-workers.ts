import axios from 'axios';
import * as Requests from './urls'

export const getMovieWorkers = (id:string) =>{
    
    return axios.get(Requests.getMovieWorkersUrl(id));
}