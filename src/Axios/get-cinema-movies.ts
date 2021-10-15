import axios from 'axios';
import * as Requests from './urls'

export const getCinemaMovies = (id:string) =>{
    return axios.get(Requests.getCinemaMoviesUrl(id));
}