import axios from 'axios';
import * as Requests from './urls'

export const getMovies = () =>{
    
    return axios.get(Requests.getMoviesUrl);
}